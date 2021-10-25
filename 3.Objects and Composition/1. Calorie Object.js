function calorie(inputArr) {
  let obi = {};

  while (inputArr.length > 0) {
    let tempField = inputArr.shift();
    let tempValue = Number(inputArr.shift());
    
    obi[tempField] = tempValue;
  }

  console.log(obi);
}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);