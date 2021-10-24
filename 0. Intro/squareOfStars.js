function starSquares(n = 5) {

    let tempList = [];

    for (let i=1; i<=n; i++) {
        tempList.push('*');
    }

    let outputLine = tempList.join(' ');
    
    for (let i=1; i<=n; i++) {
        console.log(outputLine);
    }
}


starSquares(10)