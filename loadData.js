const fs = require('fs');
const parse = require('csv-parse');

const fileToLoad = process.argv[1];

if (!fileToLoad) {
  console.error("Usage node loadData.js <FileToLoad>");
  process.exit(1);
}

const input = fs.readFileSync(fileToLoad);
const options = {
  columns: true,
  auto_parse: true,
  delimiter: ';',
};

const res = parse(input, options, (err, data) => {
  if (err) {
    console.error(err)
    return;
  }
  // Copy object
  rawData = Object.assign(data);
  fs.writeFile('data.json', JSON.stringify(rawData), (err, data) => {
    if (err) {
      console.error('failed to write json file');
      process.exit(1);
    }
    console.log('data loaded into data.json');
  });
});
