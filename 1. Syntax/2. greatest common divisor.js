// function findCommonDivisor(num1, num2) {

//     if (num1 == 0 && num2 == 0) {
//         console.log(0);
//         return;
//     } else if (num1 == 0) {
//         console.log(num2);
//         return;
//     } else if (num2 == 0) {
//         console.log(num1);
//         return;
//     } else if (num1 == num2) {
//         console.log(num1);
//         return;
//     } else if (num1 == 1 | num2 == 1) {
//         console.log(1)
//         return;
//     }

    
//     let gcd = 1;
//     let num1Divisors = [];
//     let num2Divisors = [];
//     let commonDivisors = [];
//     let shorterList;
//     let longerList;
//     let tempDivisor = 2;


//     while (num1 > 1) {
//         let isSuccess = false;

//         if (num1 > 1 && num1 % tempDivisor == 0) {
//             num1Divisors.push(tempDivisor);
//             num1 /= tempDivisor;
//             isSuccess = true;
//         }
            
//         if (!isSuccess) {
//             tempDivisor += 1
//         }
//     }

//     tempDivisor = 2

//     while (num2 > 1) {
//         let isSuccess = false;

//         if (num2 > 1 && num2 % tempDivisor == 0) {
//             num2Divisors.push(tempDivisor);
//             num2 /= tempDivisor;
//             isSuccess = true;
//         }

//         if (!isSuccess) {
//             tempDivisor += 1
//         }
//     }

//     if (num1Divisors.length < num2Divisors.length) {
//         shorterList = num1Divisors;
//         longerList = num2Divisors;
//     } else {
//         shorterList = num2Divisors;
//         longerList = num1Divisors;
//     }

//     while (shorterList.length > 0) {
//         let isSuccess = false;

//         for (let i = 0; i < longerList.length; i++) {
//             if (longerList[i] == shorterList[0]) {
//                 commonDivisors.push(shorterList[0]);
//                 shorterList.splice(0, 1);
//                 longerList.splice(i, 1);
//                 isSuccess = true;
//                 break;
//             }
//         }

//         if (!isSuccess) {
//             shorterList.splice(0, 1);
//         }
//     }

//     for (let i = 0; i < commonDivisors.length; i++) {
//         gcd *= commonDivisors[i]
//     }

//     console.log(gcd)
// }

function findCommonDivisor(num1, num2) {

    if (num1 == 0 && num2 == 0) {
        console.log(0);
        return;
    }

    let num1Factors = [];
    let num2Factors = [];
    let gcd = 1;

    function findPrimeFactors(num, listToStoreFactors) {
        let tempDivisor = 2;

        while (num > 1) {
            let isSuccess = false;

            if (num > 1 && num % tempDivisor == 0) {
                listToStoreFactors.push(tempDivisor);
                num /= tempDivisor;
                isSuccess = true;
            }
                
            if (!isSuccess) {
                tempDivisor += 1;
            }
        }
    }

    findPrimeFactors(num1, num1Factors);
    findPrimeFactors(num2, num2Factors);

    let commonFactors = num1Factors.filter(value => num2Factors.includes(value));

    for (i = 0; i < commonFactors.length; i++) {
        gcd *= commonFactors[i];
    }

    console.log(gcd);
}

findCommonDivisor(15, 5);
findCommonDivisor(2154, 458);
findCommonDivisor(0, 0);
findCommonDivisor(0, 1);
findCommonDivisor(1, 20);
findCommonDivisor(300, 405);