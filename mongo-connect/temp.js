const { env } = require("process");

if (env.NODE_ENV === 'dev' || 'qa') {
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
    
      const campuses = aggregationResult[0].value;
    
      for await (const campus of campuses) {  
        const key = `value.${campus}`;
        console.log(`Updating for ${campus}`, '\n');
        await client.db('branding').collection('config').updateOne({ _id: 'active' }, { $addToSet: { [key]: 'learning' } });
        console.log(`Updating completed for ${campus}`, '\n');
      }
}


  if (env.NODE_ENV === 'prod') {
    await client.db('branding').collection('config').updateOne({ _id: 'active'}, { $addToSet: { 'value.demo': 'learning'}});
  }