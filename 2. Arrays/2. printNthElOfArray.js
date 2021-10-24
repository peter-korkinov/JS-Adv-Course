function printN(arr, n) {

    let outputArr = [];

    for (let i = 0; i < arr.length; i+=n) {
        outputArr.push(arr[i]);
    }

    return outputArr
}

printN(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);

printN(['dsa',
'asd', 
'test', 
'tset'], 
2
);

printN(['1', 
'2',
'3', 
'4', 
'5'], 
6
);