var fs = require('fs');
var parse = require('csv-parse');
let rawDate = [];

var input = fs.readFileSync('./responses.csv');
const options = {
  columns: true,
  auto_parse: true,
  delimiter: ';',
};

function getAvg(data){
  const output = {
    avgAge: 0,
    avg_q1: 0,
    avg_q2: 0,
    avg_q3: 0,
    avg_q4: 0,
    avg_q5: 0,
    avg_q6: 0,
    avg_q7: 0,
    avg_q8: 0,
  }

  data.map((item, i) => {
    output.avgAge += item.Age;
    output.avg_q1 += item.res1;
    output.avg_q2 += item.Res2;
    output.avg_q3 += item.Res3;
    output.avg_q4 += item.Res4;
    output.avg_q5 += item.Res5;
    output.avg_q6 += item.Res6;
    output.avg_q7 += item.Res7;
    output.avg_q8 += item.Res8;
  })
  console.log('Number of people', data.length);
  Object.keys(output).map(key => {
    console.log(key, (output[key] / data.length).toFixed(2));
  })
}



const res = parse(input, options, (err, data) => {
  if (err) {
    console.error(err)
    return;
  }
  // Copy object
  rawData = Object.assign(data);
  // fs.writeFile('data.json', JSON.stringify(rawData));
  

  console.log('---- ALL ----');
  getAvg(rawData)


  const age1 = data.filter(item => Number(item.Age) <= 29);
  const age2 = data.filter(item => Number(item.Age) < 40 && Number(item.Age) >= 30);
  const age3 = data.filter(item => Number(item.Age) >= 40);

  console.log('---- Age < 30 ----');
  getAvg(age1)

  console.log('---- Age 30-40 ----');
  getAvg(age2)

  console.log('---- Age > 40 ----');
  getAvg(age3)

});


