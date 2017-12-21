const data = require('./data.json');

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
  Object.keys(output).map(item => {
    output[item] = Number((output[item] / data.length).toFixed(2));
  })
  return output;
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
  });

  output['NumberOfLowest'] = LowOutput;
  output['NumberOfHighest'] = HighOutput;
  
  return output;
}

function getMedian(data) {
  const output = [];
  ['res1', 'Res2', 'Res3', 'Res4', 'Res5', 'Res6', 'Res7', 'Res8'].map(item => {
    const sortedRes = data.sort((a, b) => {
      return a[item] - b[item];
    });
  
    if (data.length % 2 === 0)  { // even number
      const first = sortedRes[Math.floor(data.length / 2)][item];
      const second = sortedRes[Math.ceil(data.length / 2)][item];
      output[item] = (first + second) / 2
    } else {
      output[item] = sortedRes[(data.length / 2) + .5][item];
    }
  });
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

function getStandardDeviation(data) {
  const avg = getAvg(data);
  const deviation = data.reduce((acc, item) => {
    // Sum every awnser after subracting the awsner value with the avg squared
    // for that question . 
    return {
      q1: acc.q1 + Math.pow(item.res1 - avg.avg_q1, 2),
      q2: acc.q2 + Math.pow(item.Res2 - avg.avg_q2, 2),
      q3: acc.q3 + Math.pow(item.Res3 - avg.avg_q3, 2),
      q4: acc.q4 + Math.pow(item.Res4 - avg.avg_q4, 2),
      q5: acc.q5 + Math.pow(item.Res5 - avg.avg_q5, 2),
      q6: acc.q6 + Math.pow(item.Res6 - avg.avg_q6, 2),
      q7: acc.q7 + Math.pow(item.Res7 - avg.avg_q7, 2),
      q8: acc.q8 + Math.pow(item.Res7 - avg.avg_q8, 2),
    }
  }, {
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
    q7: 0,
    q8: 0,
  });
  const standardDiviation = {};
  Object.keys(deviation).map(item => {
    standardDiviation[item] = Number(Math.sqrt(deviation[item] / data.length).toFixed(2));
  })
  return standardDiviation;
}

function getAppsUsed(data) {
  const output = [];
  let multiChoice = 0;
  data.map((item, i) => {
    const apps = item.Apps.split(',');
    if (apps.length > 1) {
      multiChoice += 1;
    }
    apps.map(appName => {
      const name = appName.toLowerCase().trim().replace("\'", "").toString();
      if (name.indexOf('garmin') > -1) {
        if (output['garmin']) {
          output['garmin'] += 1;
        } else {
          output['garmin'] = 1;
        }
        return;
      }

      if (name.indexOf('samsung') > -1) {
        if (output['samsung health']) {
          output['samsung health'] += 1;
        } else {
          output['samsung health'] = 1;
        }
        return;
      } 

      if (name.indexOf('polar') > -1) {
        if (output['polar']) {
          output['polar'] += 1;
        } else {
          output['polar'] = 1;
        }
        return;
      } 
      
      if (!output[name]) {
        output[name] = 0;
      } 
      output[name] += 1;
    })
  });
  const fullOutput = {
    other: 0,
  }
  Object.keys(output).map((key) => {
    if (output[key] >= 5) {
      fullOutput[key] = output[key];
    } else {
      fullOutput['other'] += 1
    }
  });
  console.log("mutliChoice", multiChoice);
  console.log(fullOutput);
}


// FIlter data functions
const lessThen20 = data.filter(item => Number(item.Age) < 20 && Number(item.Age) >= 0);
const age20to29 = data.filter(item => Number(item.Age) < 30 && Number(item.Age) >= 20);
const age30to39 = data.filter(item => Number(item.Age) < 40 && Number(item.Age) >= 30);
const age40to49 = data.filter(item => Number(item.Age) < 50 && Number(item.Age) >= 40);
const age50to59 = data.filter(item => Number(item.Age) < 60 && Number(item.Age) >= 50);
const olderThen60 = data.filter(item => Number(item.Age) >= 60);
const test4 = data.filter(item => Number(item.Res8) === 1);

const runkeeper = data.filter(item => item.Apps.indexOf('Runkeeper') > -1);
console.log(olderThen60);

const avg = getAvg(data);
// const usage = groupByUsage(data);
const diff =  getDifferancePerQuestion(data);
const median = getMedian(data);
const standardDiviation = getStandardDeviation(data);

const avgRunkeeper = getAvg(runkeeper);
//getAppsUsed(data);
// console.log(avgRunkeeper);
console.log(avg)
console.log(median);
// console.log(diff);
console.log(standardDiviation);
// printComments(data);