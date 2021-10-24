function sortNums(numsArr) {
    const primarySortedArr = numsArr.sort(function(a, b) {return a - b});
    const arrMiddleLow = Math.floor(numsArr.length / 2);
    const arrMiddleHigh = Math.round(numsArr.length / 2);
    const biggerHalf = primarySortedArr.slice(arrMiddleLow).reverse();
    const smallerHalf = primarySortedArr.slice(0, arrMiddleLow);
    let outputArr = [];

    for (i = 0; i < arrMiddleHigh; i++) {
        outputArr.push(smallerHalf[i]);
        outputArr.push(biggerHalf[i]);
    }

    if (outputArr.includes(undefined)) {
        outputArr.splice(outputArr.indexOf(undefined), 1)
    }

    return outputArr;
}

console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18]));