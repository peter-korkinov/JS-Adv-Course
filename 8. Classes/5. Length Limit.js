class Stringer {
  constructor(string, length) {
    this.innerString = string;
    this.innerLength = length;
  }
  decrease(num) {
    this.innerLength -= num;
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }
  increase(num) {
    this.innerLength += num;
  }
  toString() {
    let temp = this.innerString.slice(0, this.innerLength);
    if (temp.length < this.innerString.length) {
      temp = temp.concat('...');
    }
    return temp;
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test

test.increase(4);
console.log(test.toString()); // Test

