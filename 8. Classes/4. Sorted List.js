class List {
  constructor() {
    this.list = [];
    this.size = 0;
  }
  add(el) {
    this.list.push(el);
    this.list.sort((a, b) => {return a - b;})
    this.size = this.list.length;
  }
  remove(index) {
    if (index <= this.list.length - 1 && index > -1) {
      this.list.splice(index, 1);
      this.size = this.list.length;
    }
  }
  get(index) {
    if (index <= this.list.length - 1 && index > -1) {
      return this.list[index];
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
// list.add(5);
// list.add(6);
// list.add(7);
// list.remove(2);
console.log(list.get(4));
// list.remove(1);
// console.log(list.get(1));
// console.log(list.list);
// list.remove(4);
// list.get(2);
// list.size;
// console.log(list.hasOwnProperty('size'));
