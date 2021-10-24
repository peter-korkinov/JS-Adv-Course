// function aggregate(arr) {
//     let sum = 0;
//     let inverseSum = 0;
//     let concat = '';

//     arr.forEach(function (el) {
//         sum += Number(el);
//         inverseSum += 1 / Number(el);
//         concat += el
//     });

//     console.log(sum + '\n' + inverseSum + '\n' + concat)
// }

// aggregate([1, 2, 3])


function aggregate(arr) {
    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    for (const el of arr) {
        sum += Number(el);
        inverseSum += 1 / Number(el);
        concat += el
    }

    console.log(sum + '\n' + inverseSum + '\n' + concat)
}

aggregate([1, 2, 3])