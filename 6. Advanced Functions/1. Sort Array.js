function solve(arr, arg) {
  let obi = {
    asc() {
      return arr.sort((a,b) => a - b);
    },
    desc() {
      return arr.sort((a, b) => b - a)
    }
  }

  return obi[arg]();
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));

// let tre = [14, 7, 17, 6, 8];
//
// console.log(tre.sort((a,b) => a - b));
// console.log(tre.sort((a,b) => b - a));