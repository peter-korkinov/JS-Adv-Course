// function sortArray(input) {
//     const twoCriteriaSort = (cur, next) =>
//         cur.length - next.length || cur.localeCompare(next);
//     input.sort(twoCriteriaSort);
//     console.log(input.join('\n'));
// }

// sortArray(['alpha', 
// 'beta', 
// 'gamma']
// );
// sortArray(['Isacc', 
// 'Theodor', 
// 'Jack', 
// 'Harrison', 
// 'George']
// );




function twoCritSort(arr) {
    const sorti = (a, b) => a.length - b.length || a.localeCompare(b);
    arr.sort(sorti);
    console.log(arr.join('\n'));
}