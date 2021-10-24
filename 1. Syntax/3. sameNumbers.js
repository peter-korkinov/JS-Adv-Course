function sames(num) {
    let stringedNum = num.toString();
    const myarr = stringedNum.split("");
    const allEq = a
}

function somes(num) {
    const stringedNum = num.toString();
    const myarr = stringedNum.split("");
    const x = stringedNum[0];
    let result = true;
    let sumDigits = 0;

    for (let sign of myarr) {
        if (sign !== x) {
            result = false;
        }
        sumDigits += Number(sign)
    }

    console.log(result + '\n' + sumDigits)
}

somes(22322)