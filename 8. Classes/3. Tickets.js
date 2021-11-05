function solve(arr, sortCrit) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  function inputArrProcessor() {
    let processedArr = [];

    for (let el of arr) {
      let [destination, price, status] = el.split('|');
      processedArr.push([destination, price, status]);
    }

    return processedArr;
  }

  function classer() {
    let classedArr = [];

    for (let el of inputArrProcessor()) {
      let temp = new Ticket(el[0], el[1], el[2])
      classedArr.push(temp)
    }

    return classedArr;
  }

  function sorter() {
    let sortedArr = classer();

    function compare(a, b) {
      if ( a[sortCrit] < b[sortCrit]) {
        return -1;
      }
      if ( a[sortCrit] > b[sortCrit]) {
        return 1;
      }
      return 0;
    }

    return sortedArr.sort(compare);

    // return sortedArr.sort((a, b) => {return a[sortCrit] - b[sortCrit]});
  }

  return sorter();
}


let opi = solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
  'destination');

let pti = solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
  'status'
);

console.log(opi);
console.log(pti);