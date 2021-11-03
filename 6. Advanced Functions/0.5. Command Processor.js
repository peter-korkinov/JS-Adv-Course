function solution() {
  let text = '';

  return {
    append: (str) => {text += str},
    removeStart: (num) => {text = text.slice(num)},
    removeEnd: (num) => {text = text.slice(0, -num)},
    print: () => {console.log(text)}
  }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
