function solve(commads) {
    let n = 0;
    let tempArr = [];

    for (let i of commads) {
        switch(i) {
            case 'add':
                n += 1;
                tempArr.push(n);
                break;
            case 'remove':
                n+=1;
                tempArr.pop();
                break;
        }
    }

    if (tempArr.length === 0) {
        console.log('Empty');
    } else {
        for ( let i of tempArr) {
            console.log(i);
        }
    }
}

solve(['add', 
'add', 
'add', 
'add']
);
solve(['add', 
'add', 
'remove', 
'add', 
'add']
);
solve(['remove', 
'remove', 
'remove']
);