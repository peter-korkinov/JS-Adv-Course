function getFibonator() {
  let n = 0;
  let m = 1;

  function fiber() {
    let o = n + m;
    n = m;
    m = o;

    return n;
  }

  return fiber;
}

let fib = getFibonator();

console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

