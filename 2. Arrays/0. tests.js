// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']; // Filter array items based on search criteria (query)

// function filterItems(arr, query) {

//   return arr.filter(function(el) {return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;});

// }

// console.log(filterItems(fruits, 'an')); // ['apple', 'grapes']


let ari = [1, 2, 3];
let ari2 = ['X', 'X', 'O']
let ari3 = ['X', 'X', 'X']
let ari4 = ['O', 'O', 'O']
let ari5 = ['O', 'X', 'O']

// console.log(typeof(ari));
// console.log(Array.isArray(ari));

function check(arr) {
    return arr.every((val) => val === 'X') || arr.every((val) => val === 'O');
}

console.log(check(ari), check(ari2), check(ari3), check(ari4), check(ari5));