function prevDay(year, month, day) {
    let today = new Date(year, month - 1, day);
    let yesterday = new Date(year, month - 1, day);

    yesterday.setDate(today.getDate() - 1)

    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`)
}

prevDay(2016, 9, 30);