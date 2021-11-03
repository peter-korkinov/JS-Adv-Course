function add(n) {
  let x = n;

  function sum(n2) {
    x += n2;
    return sum;
  }

  sum.toString = () => {
    return x;
  }

  return sum;
}

console.log(add(1)(6)(-3).toString());