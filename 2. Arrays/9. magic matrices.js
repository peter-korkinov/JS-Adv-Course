function magicChecker(inputMatrix) {
    let sumsArr = [];
    const reducer = (first, second) => first + second;

    for (let i = 0; i < inputMatrix.length; i++) { 

        sumsArr.push(inputMatrix[i].reduce(reducer));

        let currentColumnSum = 0;

        for (let j = 0; j < inputMatrix.length; j++) {
            currentColumnSum += inputMatrix[i][j];
        }

        sumsArr.push(currentColumnSum);
    }

    if (sumsArr.every((val, i,  arr) => val === arr[0])) {
        console.log(true);
    } else {
        console.log(false)
    }
}


magicChecker([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );

magicChecker([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );

magicChecker([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );