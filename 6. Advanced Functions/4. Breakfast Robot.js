// function solution(inputStr) {
//   let recipes = new Map();
//   recipeAdder();
//
//   let ingredients = new Map();
//   ingredients.set('carbohydrate', 0);
//   ingredients.set('flavour', 0);
//   ingredients.set('fat', 0);
//   ingredients.set('protein', 0);
//
//   let [command, task, quantity] = inputStr.split(' ');
//   quantity = Number(quantity);
//
//   const operations = {
//     restock() {
//       ingredients.set(task, ingredients.get(task) + quantity);
//       return 'Success';
//     },
//
//     prepare() {
//       let rec = recipes.get(task);
//
//       for (let ingr in rec) {
//         if (ingredients.get(ingr) < rec[ingr] * quantity) {
//           return `Error: not enough ${ingr} in stock`
//         }
//       }
//
//       for (let ingr in rec) {
//         ingredients.set(ingr, ingredients.get(ingr) - rec[ingr] * quantity);
//       }
//
//       return 'Success';
//     },
//
//     report() {
//       let outputArr = [];
//
//       for (let [ingredient, quantity] of ingredients) {
//         outputArr.push(`${ingredient}=${quantity}`);
//       }
//
//       return outputArr.join(' ');
//     },
//   }
//
//   function recipeAdder() {
//     recipes.set('apple', {carbohydrate: 1, flavour: 2});
//     recipes.set('lemonade', {carbohydrate: 10, flavour: 20});
//     recipes.set('burger', {carbohydrate: 5, flavour: 3, fat: 7});
//     recipes.set('eggs', {flavour: 1, fat: 1, protein: 5});
//     recipes.set('turkey', {carbohydrate: 10, flavour: 10, fat: 10, protein: 10});
//   }
//
//   function ingredientsAdder() {
//     ingredients.set('carbohydrate', 0);
//     ingredients.set('flavour', 0);
//     ingredients.set('fat', 0);
//     ingredients.set('protein', 0);
//   }
//
//   return operations[command]();
// }

function solution() {
  const recipes = {
    'apple': {carbohydrate: 1, flavour: 2},
    'lemonade': {carbohydrate: 10, flavour: 20},
    'burger': {carbohydrate: 5, flavour: 3, fat: 7},
    'eggs': {flavour: 1, fat: 1, protein: 5},
    'turkey': {carbohydrate: 10, flavour: 10, fat: 10, protein: 10}
  }

  const ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0
  }

    function restock(task, quantity) {
      ingredients[task] += quantity;
      return 'Success';
    }

    function prepare(item, quantity) {
      const recipe = recipes[item];

      for (let ingr in recipe) {
        if (ingredients[ingr] < recipe[ingr] * quantity) {
          return `Error: not enough ${ingr} in stock`
        }
      }

      for (let ingr in recipe) {
        ingredients[ingr] -= recipe[ingr] * quantity;
      }

      return 'Success';
    }

    function report() {
      let outputArr = [];

      for (let ing in ingredients) {
        outputArr.push(`${ing}=${ingredients[ing]}`);
      }

      return outputArr.join(' ');
    }

  function processor(inputStr) {
    let [command, task, quantity] = inputStr.split(' ');
    quantity = Number(quantity);

    switch (command) {
      case 'restock': return restock(task, quantity);
      case 'prepare': return prepare(task, quantity);
      case 'report': return report();
    }
  }

  return processor;
}

console.log('a')
let manager = solution();

console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));