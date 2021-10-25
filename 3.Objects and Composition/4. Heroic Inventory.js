function inventory(heroArr) {
  let outputArr = [];

  for (const hero of heroArr) {
    const tempArr = hero.split(' / ');
    tempArr[2] = tempArr[2] ? tempArr[2].split(', ') : [];

    let tempObj = {};    
    tempObj.name = tempArr[0];
    tempObj.level = Number(tempArr[1]);
    tempObj.items = tempArr[2];

    outputArr.push(tempObj);
  }

  return JSON.stringify(outputArr);
}


console.log(inventory(
  ['Isacc / 25',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara']
));