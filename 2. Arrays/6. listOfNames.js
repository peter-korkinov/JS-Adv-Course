function sortNames(namesArr) {
    const sortedArr = namesArr.sort();
    for (let i = 0; i < sortedArr.length; i++) {
        console.log(`${i + 1}.${sortedArr[i]}`);
    }
}


sortNames(["John", "Bob", "Christina", "Ema"]);