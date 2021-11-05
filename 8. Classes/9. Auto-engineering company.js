function registratinator(inputArr) {
  let splitted = [];
  let registry = new Map();

  for (let i of inputArr) {
    let temp = (i.split(' | '));
    let [brand, model, produced] = temp;
    produced = Number(produced);

    if (registry.has(brand)) {
      if (registry.get(brand).hasOwnProperty(model)) {
        registry.get(brand)[model] += produced;
      } else {
        registry.get(brand)[model] = produced
      }
    } else {
      registry.set(brand, {[model]: produced});
    }
  }

  for (let [brand, obj] of registry) {
    console.log(brand);
    for (let j in obj) {
      console.log(`###${j} -> ${obj[j]}`);
    }
  }
}

let a = ['Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10']

registratinator(a);