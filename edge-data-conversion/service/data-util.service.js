const csv = require('csv-parser');
const fs = require('fs');
const { parse } = require('path');

const service = {
  async loadData(fileName) {
    let processedData = [];
    console.log(`Loading records from file ${fileName}`);
    processedData = await new Promise((resolve, reject) => {
      const allRows = [];
      fs.createReadStream(fileName)
        .pipe(csv())
        .on('headers', (headers) => {
        })
        .on('data', (row) => {
          const parsedRow = { ...row };
          console.log(parsedRow);
          allRows.push(parsedRow);
          })
          .on('error', reject)
          .on('finish', async () => {
            resolve(allRows);
          });
      });
      // fs.unlinkSync(fileName);
      return processedData || [];
    },
  };
  
  module.exports = service;
  