const { MongoClient } = require('mongodb');

async function main() {
	const uri = 'mongodb://localhost:27017/';
  const client = new MongoClient(uri);
  const learning = {
    code: 'learning',
    displayName: 'Learning',
    shortName: 'Learning',
    cssClass: 'rss-app learning',
    contextUrl: '/learning',
    sort: 999,
  };

  try {
    await client.connect();
    // await listDatabases(client);
    // await findOneListingByName(client);
    await updateTenant(client, learning);
    //const campuses = await getActiveCampuses(client);
    //await updateActiveCampuses(client, campuses, learning);
    // await updateDemoCampus(client);
  } catch (e) {
    console.error(e);
  }
  finally {
    await client.close();
  }
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function findOneListingByName(client) {
  const result = await client.db('branding').collection('config').findOne({ _id: 'services' });
  if (result) {
      console.log('Found');
      console.log(result);
  } else {
      console.log('Not found');
  }
}

async function updateTenant(client, learning) {
  console.log('Inside updateTenant');
  await client.db('branding').collection('config').updateOne({ _id: 'tenant' }, { $addToSet: { 'value.appList': learning } });
}

async function getActiveCampuses(client) {
  const aggregationResult = await client.db('branding').collection('config').aggregate([
    {
      '$match': {
        '_id': 'active'
      }
    }, {
      '$project': {
        'value': {
          '$objectToArray': '$value'
        }
      }
    }, {
      '$unwind': {
        'path': '$value'
      }
    }, {
      '$group': {
        '_id': null, 
        'value': {
          '$addToSet': '$value.k'
        }
      }
    }, {
      '$project': {
        'value': 1
      }
    }
  ]).toArray();

  if (aggregationResult) {
    console.log('Found');
} else {
    console.log('Not found');
}

return aggregationResult[0].value;
}

async function updateActiveCampuses(client, campuses, learning) {
  // console.log('updateActiveCampuses');
  // console.log(campuses);
  for await (const campus of campuses) {  
    const key = `value.${campus}`;
    console.log(`Updating for ${campus}`, '\n');
    await client.db('branding').collection('config').updateOne({ _id: 'active' }, { $addToSet: { [key]: 'learning' } });
    console.log(`Updating completed for ${campus}`, '\n');
  }
}

async function updateDemoCampus(client) {
  // await mongo.db.collection('config').updateOne({ _id: 'active' }, { $push: { 'value.demo': learning.shortName } });
  await client.db('branding').collection('config').updateOne({ _id: 'active'}, { $addToSet: { 'value.demo': 'learning'}});
}



main().catch(console.error);