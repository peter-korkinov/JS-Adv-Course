// 'use strict';

// let a = 5;
// let b = 6;
// let c = a * b;
// console.log(c);

// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 3));

// function printStars(count) {
//     console.log("*".repeat(count));
// }

// printStars(10)

// function foo(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// foo(1, 2, 3, 4, 5, 6);

// let myString = "hello, world";
// console.log(myString.toLowerCase());
// myString = "hello";
// console.log(myString);

// function echo(inputString = "ba si mo") {
//     let temp = inputString.length;
//     return temp + "\n" + inputString;
// }

// console.log(echo());


function solve(first, second, third) {
    combinedString = first + second + third;
    lenOfString = combinedString.length;
    averageLen = Math.floor(lenOfString / 3);

    console.log(lenOfString + "\n" + averageLen);
}

solve('chocolate', 'ice cream', 'cake')

// console.log(solve(input));

// function firstSolution(p, r, q) {
//     let tempList = [p, r, q];
//     let biggest = Math.max(...tempList);
//     // let biggest = Math.max(p, r, q);

//     return `The largest number is ${biggest}`;
//     // return 'The largest number is ' + biggest + "\n" + tempList + typeof(tempList[1])
// }


// function firstSolution(p, r, q) {
//     let tempList = [p, r, q];
//     let biggest = Math.max(...tempList);

//     console.log(`The largest number is ${biggest}.`);
// }


// console.log(firstSolution(1, 2, 3));


// function secondSolution(p, r, q) {
//     let biggest;
//     if (p > r && p > q) {
//         biggest = p;
//     } else if (r > q) {
//         biggest = r;
//     } else {
//         biggest = q;
//     }

//     return `The largest number is ${biggest}`;
// }

// console.log(secondSolution(1, 2, 4));

// function thirdSolution(...params) {
//     return `The largest number is ${Math.max(...params)}.`;
// }

// console.log(thirdSolution(1, 2, 3, 4, 5));


function circleArea(radius) {
    if (typeof(radius) !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
    } else {
        console.log((Math.PI * radius ** 2).toFixed(2));
    }
}

// console.log(circleArea(5));
// console.log(circleArea("kur"));
// console.log(0.1 + 0.2);

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// let listio = [1, 2, 3]
// if (listio) {
//     console.log('opa')
//     console.log(listio)
// }