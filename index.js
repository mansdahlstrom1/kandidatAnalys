const data = require('./data.json');

function print(data, output) {
  console.log('Number of people', data.length);
  Object.keys(output).map(key => {
    console.log(key, (output[key] / data.length).toFixed(2));
  })
}

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
  print(data, output);
}


function groupByUsage(data){
  const output = [];
  data.map(item => {
    if (!output[item.Usage]) {
      output[item.Usage] = {
        avg_age: 0,
        avg_q1: 0,
        avg_q2: 0,
        avg_q3: 0,
        avg_q4: 0,
        avg_q5: 0,
        avg_q6: 0,
        avg_q7: 0,
        avg_q8: 0,
        count: 0,
      }
      return item;
    }
    const obj = output[item.Usage]
    output[item.Usage] = {
      avg_age: obj.avg_age+ item.Age,
      avg_q1: obj.avg_q1 + Number(item.res1),
      avg_q2: obj.avg_q2 + Number(item.Res2),
      avg_q3: obj.avg_q3 + Number(item.Res3),
      avg_q4: obj.avg_q4 + Number(item.Res4),
      avg_q5: obj.avg_q5 + Number(item.Res5),
      avg_q6: obj.avg_q6 + Number(item.Res6),
      avg_q7: obj.avg_q7 + Number(item.Res7),
      avg_q8: obj.avg_q8 + Number(item.Res8),
      count: obj.count + 1,
    }
    return item;
  });
  Object.keys(output).map(key => {
    console.log('---', key, '---')
    console.log('Count: ', output[key].count);
    Object.keys(output[key]).map(key2 => {
      if (key2 !== 'count') {
        console.log(key2, (output[key][key2] / output[key].count).toFixed(2));
      }
    })
  })
  return output;
}

const age1 = data.filter(item => Number(item.Age) <= 29);
const age2 = data.filter(item => Number(item.Age) < 40 && Number(item.Age) >= 30);
const age3 = data.filter(item => Number(item.Age) >= 40);
const test4 = data.filter(item => Number(item.Res8) === 1);

console.log('---- ALL ----');
getAvg(data);

// console.log('---- Age < 30 ----');
// getAvg(age1);

// console.log('---- Age 30-40 ----');
// getAvg(age2);

// console.log('---- Age > 40 ----');
// getAvg(age3);

// console.log('---- where awnser 1 = 1 ----');
// getAvg(test4);


groupByUsage(data);