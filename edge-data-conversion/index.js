const { loadData } = require("./service/data-util.service");
const dataUtil = require("./service/data-util.service");
const fileName = "input.csv";
const fs = require('fs');

getData();

async function getData() {
  const startTime = Date.now();
  const jsonData = await loadData(fileName);
  console.log(jsonData);
  const array = jsonData.map((item) => {
    let anItem = {};
    anItem.from = { id: item.from_id, label: item.from_label };
    anItem.to = { id: item.to_id, label: item.to_label };
    anItem.edge = { label: item.label, type: "ROLE" };
    return anItem;
  });


  fs.writeFile(
  './processedEdges.js',
  JSON.stringify(array, null, 2),
  function (err) {
      if (err) {
          console.error('Some error');
      }
  }
);
const endTime = Date.now();
const duration = endTime - startTime
console.log(`Processing Completed in ${duration}ms`);
}
