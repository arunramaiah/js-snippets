const data = require('./data.json');
const { parse } = require('json2csv');
const fs = require('fs');

console.log('Printing data');
console.log(data);

const fields = ['buildingKey', 'floorKey', 'roomKey', 'buildingId'];
const opts = { fields };
let csv;

try {
    csv = parse(data, opts);
    console.log(csv);
} catch (err) {
    console.error(err);
}

fs.writeFile('output.csv', csv, 'utf8', function (err) {
    if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
      console.log('It\'s saved!');
    }
  });

// const result = json2csv 
