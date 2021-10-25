function toJSON(inputArr) {
  let rawDataArr = [];
  let outputArr = [];

  for (let el of inputArr) {
    el = el.substring(2, el.length - 1);
    el = el.split('|');
    for (let i = 0; i < el.length; i ++){
      el[i] = el[i].trim();
    }
    rawDataArr.push(el);
  }

  const [firstHead, secondHead, thirdHead] = rawDataArr[0];

  for (let i = 1; i < rawDataArr.length; i++) {
    let [firstCol, secondCol, thirdCol] = rawDataArr[i];
    secondCol = Number(Number(secondCol).toFixed(2));
    thirdCol = Number(Number(thirdCol).toFixed(2));

    outputArr.push({[firstHead]: firstCol, [secondHead]: secondCol, [thirdHead]: thirdCol});
  }

  console.log(JSON.stringify(outputArr));
}

toJSON(
    ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);