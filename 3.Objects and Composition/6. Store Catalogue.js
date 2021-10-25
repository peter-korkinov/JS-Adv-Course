function catalogue(inputArr) {
  inputArr.sort();
  let productsObj = {};

  inputArr.forEach((el) => {
    let [product, price] = el.split(' : ');
    price = Number(price);

    const firstLetter = product[0];

    if (!productsObj[firstLetter]) {
      productsObj[firstLetter] = {};
    }

    productsObj[firstLetter][product] = price;
  })

  for (const letter in productsObj) {
    console.log(letter);
    for (const prod in productsObj[letter]) {
      console.log(`  ${prod}: ${productsObj[letter][prod]}`);
    }
  }
}

  // while (inputArr.length > 0) {
  //   const firstLetter = inputArr[0][0];
  //   const elemensWithLetter = inputArr.filter((el) => el.startsWith(firstLetter));

  //   obi[firstLetter] = elemensWithLetter;

  //   inputArr.splice(0, elemensWithLetter.length);
  // }

  // for (const letter in obi) {
  //   console.log(`${letter}`);
  //   for (const product of obi[letter]) {
  //     console.log(`  ${product}`);
  //   }
  // }

  // for (const el of inputArr) {
  //   const tempArr = el.split(' : ');
  //   products.push({[tempArr[0]]: Number(tempArr[1])});
  // }

  // while (products.length > 0) {
  //   const keyo = Object.keys(products[0])[0];
  //   const firstLetter = keyo[0];


  // }

  // const filtered = Object.keys(products).filter(key => key)

  // console.log(products)

catalogue(
  ['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)