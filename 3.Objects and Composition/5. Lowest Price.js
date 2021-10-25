function pricer(inputArr) {
    let ebasimuddz = {};
    
    for (let el of inputArr) {
        let [town, product, price] = el.split(' | ');

        if (!ebasimuddz[product]) {
            ebasimuddz[product] = {};
        }

        ebasimuddz[product][town] = Number(price);
    }

    for (let prod in ebasimuddz) {
        let tempHolder = Object.entries(ebasimuddz[prod]).sort((a, b) => a[1] - b[1]);

        console.log(`${prod} -> ${tempHolder[0][1]} (${tempHolder[0][0]})`)
    }
}


pricer([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);