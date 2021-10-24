function solve(n, m) {

    let output = 0;

    for (let i=Number(n); i<=Number(m); i++){
        output += i;
    }

    console.log(output);
}

solve('-8', '20');
