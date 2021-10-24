// function solve(num1, num2, operator) {    
//     function add(num1, num2) {
//         return num1 + num2
//     }

//     function substract(num1, num2) {
//         return num1 - num2
//     }

//     function multiply (num1, num2) {
//         return num1 * num2
//     }

//     function divide (num1, num2) {
//         return num1 / num2
//     }

//     function remainder (num1, num2) {
//         return num1 % num2
//     }

//     function power (num1, num2) {
//         return num1 ** num2
//     }

//     let operatorDict = {'+': add,
//                         '-': substract,
//                         '*': multiply,
//                         '/': divide,
//                         '%': remainder,
//                         '**': power
//                     };

//     return operatorDict[operator](num1, num2)
// }

// console.log(solve(5, 6, '+'))

function solve(num1, num2, operator) {

    let output;

    switch(operator) {
        case '+': output = num1 + num2; break;
        case '-': output = num1 - num2; break;
        case '*': output = num1 * num2; break;
        case '/': output = num1 / num2; break;
        case '%': output = num1 % num2; break;
        case '**': output = num1 ** num2; break;
    }

    console.log(output)
}