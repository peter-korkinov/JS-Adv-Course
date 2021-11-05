class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    // let letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    // let returnVal = "";
    // let int = this.value
    // while (int != 0) {
    //   let rest = int % 16;
    //   int = Math.floor(int / 16);
    //   returnVal = letters[rest] + returnVal;
    // }
    // return '0x' + returnVal;
    return '0x' + (this.value.toString(16).toUpperCase());
  }

  plus(num) {
  //   if (typeof num == 'Number') {
  //     let temp = ((this.value + num).toString(16)).toUpperCase();
  //     return '0x' + temp;
  //   } else if (typeof num == 'String') {
  //     let temp = (this.value + parseInt(num, 16)).toString(16).toUpperCase();
  //     return '0x' + temp;
  //   }
    let temp = ((this.value + num).toString(16)).toUpperCase()
    return '0x' + temp;
  }

  minus(num) {
    let temp = ((this.value - num).toString(16)).toUpperCase()
    return '0x' + temp;
  }

  parse(str) {
    return parseInt(str, 16)
  }
}

let FF = new Hex(255);
console.log(FF.toString());
// FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
console.log(typeof a);
