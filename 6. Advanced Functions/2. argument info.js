function solve(...args) {
  let x = new Map();

  for (let i of args) {
    console.log(`${typeof i}: ${i.toString()}`)
    if (x.has(typeof i)) {
      x.set(typeof i, x.get(typeof i) + 1);
    } else {
      x.set(typeof i, 1);
    }
  }

  let y = new Map([...x.entries()].sort((a, b) => b[1] - a[1]))

  for (let [k, v] of y) {
    console.log(`${k} = ${v}`);
  }
}

// solve('cat', 42, function () { console.log('Hello world!'); });
solve({ name: 'bob'}, 3.333, 9.999);