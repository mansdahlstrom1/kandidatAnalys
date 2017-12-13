const data = require('./data.json');

function print(data, output) {
  console.log('Number of people', data.length);
  Object.keys(output).map(key => {
    console.log(key, (output[key] / data.length).toFixed(2));
  })
}

function getAvg(data){
  console.log('# TOTAL average of the survay')
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

function getDifferancePerQuestion(data) {
  const output = [];
  output.q1 = { high: 0, low: 10 };
  output.q2 = { high: 0, low: 10 };
  output.q3 = { high: 0, low: 10 };
  output.q4 = { high: 0, low: 10 };
  output.q5 = { high: 0, low: 10 };
  output.q6 = { high: 0, low: 10 };
  output.q7 = { high: 0, low: 10 };
  output.q8 = { high: 0, low: 10 };
  
  const HighOutput = {
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
    q7: 0,
    q8: 0, 
  }
  const LowOutput = {
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
    q7: 0,
    q8: 0, 
  }

  data.map(item => {
    output['q1'] = {
      high: Math.max(output['q1'].high, item.res1),
      low: Math.min(output['q1'].low, item.res1),
    }
    output['q2'] = {
      high: Math.max(output['q2'].high, item.Res2),
      low: Math.min(output['q2'].low, item.Res2),
    }
    output['q3'] = {
      high: Math.max(output['q3'].high, item.Res3),
      low: Math.min(output['q3'].low, item.Res3),
    }
    output['q4'] = {
      high: Math.max(output['q4'].high, item.Res4),
      low: Math.min(output['q4'].low, item.Res4),
    }
    output['q5'] = {
      high: Math.max(output['q5'].high, item.Res5),
      low: Math.min(output['q5'].low, item.Res5),
    }
    output['q6'] = {
      high: Math.max(output['q6'].high, item.Res6),
      low: Math.min(output['q6'].low, item.Res6),
    }
    output['q7'] = {
      high: Math.max(output['q7'].high, item.Res7),
      low: Math.min(output['q7'].low, item.Res7),
    }
    output['q8'] = {
      high: Math.max(output['q8'].high, item.Res8),
      low: Math.min(output['q8'].low, item.Res8),
    }
  });

  data.map(item => {
    if (item.res1 === output['q1'].high) {
      HighOutput.q1 += 1; 
    }
    if (item.res1 === output['q1'].low) {
      LowOutput.q1 += 1;
    }
    if (item.Res2 === output['q2'].high) {
      HighOutput.q2 += 1; 
    }
    if (item.Res2 === output['q2'].low) {
      LowOutput.q2 += 1;
    }
    if (item.Res3 === output['q3'].high) {
      HighOutput.q3 += 1; 
    }
    if (item.Res3 === output['q3'].low) {
      LowOutput.q3 += 1;
    }
    if (item.Res4 === output['q4'].high) {
      HighOutput.q4 += 1; 
    }
    if (item.Res4 === output['q4'].low) {
      LowOutput.q4 += 1;
    }
    if (item.Res5 === output['q5'].high) {
      HighOutput.q5 += 1; 
    }
    if (item.Res5 === output['q5'].low) {
      LowOutput.q5 += 1;
    }
    if (item.Res6 === output['q6'].high) {
      HighOutput.q6 += 1; 
    }
    if (item.Res6 === output['q6'].low) {
      LowOutput.q6 += 1;
    }
    if (item.Res7 === output['q7'].high) {
      HighOutput.q7 += 1; 
    }
    if (item.Res7 === output['q7'].low) {
      LowOutput.q7 += 1;
    }
    if (item.Res8 === output['q8'].high) {
      HighOutput.q8 += 1; 
    }
    if (item.Res8 === output['q8'].low) {
      LowOutput.q8 += 1;
    }

  })
  console.log("# get differance per question");
  console.log("### Higest and lowest valye per question")
  Object.keys(output).map(key => {
    console.log('---', key, '---')
    console.log(output[key]);
  })
  console.log("### Count of persons responding with the lowest recorded value")
  console.log(LowOutput)
  console.log("### Count of persons responding with the high recorded value")
  console.log(HighOutput);
  
  return output;
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
  console.log("# get average per group");
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

function printComments(data){
  // Abc is placeholder data; since ther parser will not accept 
  // empty rows as a valid object. 
  console.log("# print all comments");
  const comments = data.filter(item => item.Res9 !== 'abc');
  comments.map(item => console.log(item.Res9));
}

const age1 = data.filter(item => Number(item.Age) <= 29);
const age2 = data.filter(item => Number(item.Age) < 40 && Number(item.Age) >= 30);
const age3 = data.filter(item => Number(item.Age) >= 40);
const test4 = data.filter(item => Number(item.Res8) === 1);


console.log('---- ALL ----');
getAvg(data);
groupByUsage(data);
printComments(data);
getDifferancePerQuestion(data);