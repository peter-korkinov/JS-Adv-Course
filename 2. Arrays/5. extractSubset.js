function extract(arr) {
    let tempo = arr[0];
    let outputArr = [tempo];

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] >= tempo) {
            outputArr.push(arr[i]);
            tempo = arr[i];
        }
    }

    return outputArr;
}

console.log(extract([-10, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));
console.log(extract([1, 
    2, 
    3,
    4]
    ));
console.log(extract([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ));