function solve(inputArr) {
  let registry = new Map();
  let bottled = new Map();

  for (let jus of inputArr) {
    let [name, quant] = jus.split(' => ');
    quant = Number(quant);

    if (registry.has(name)) {
      registry.set(name, registry.get(name) + quant);
    } else {
      registry.set(name, quant);
    }

    if (registry.get(name) >= 1000) {
      if (bottled.has(name)) {
        bottled.set(name, bottled.get(name) + Math.floor(registry.get(name) / 1000));
      } else {
        bottled.set(name, Math.floor(registry.get(name) / 1000));
      }
      registry.set(name, registry.get(name) % 1000)
    }
  }

  for (let [jus, quant] of bottled) {
    console.log(`${jus} => ${quant}`);
  }

  console.log(registry);
}

let a =['Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549']

let b = ['Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789']

solve(a);
solve(b);