function generateReport() {
  const headRow = document.querySelectorAll('input');
  const dataRows = document.querySelectorAll('tbody tr');

  let result = [];

  for (let i = 0; i < dataRows.length; i++) {
    let tempObj = {};

    for (let j = 0; j < headRow.length; j++) {
      if (headRow[j].checked) {
        tempObj[headRow[j].name] = dataRows[i].children[j].textContent; //<<<<<<<<<<<<<<child
      }
    }

    result.push(tempObj);
  }

  document.getElementById('output').innerText = JSON.stringify(result);
}

//     function getCheckedIndexes() {
//       let checkedCellsIndexes = [];
//       for (let cellIndex = 0; cellIndex < headRow.length; cellIndex++) {
//         if (headRow[cellIndex].checked) {
//           checkedCellsIndexes.push(cellIndex);
//         }
//       }
//       return checkedCellsIndexes;
//     }
//
//     function objectMaker() {
//       const indexes = getCheckedIndexes();
//
//       for (let i of indexes) {
//
//       }
//     }
//
//     function dataSift() {
//
//     }
//
//
//
//     console.log(dataRaw);
// }

// function generateReport() {
//   const selectionElements = document.querySelectorAll('input');
//   const allRows = document.querySelectorAll('tbody tr');
//
//   const result = [];
//
//   if (selectionElements.length < 1) {
//     return;
//   }
//
//   for (let i = 0; i < allRows.length; i++) {
//     let newObj = {}
//     for (let y = 0; y < selectionElements.length; y++ ) {
//       if (selectionElements[y].checked) {
//         newObj[selectionElements[y].name] = allRows[i].children[y].textContent;
//       }
//     }
//     result.push(newObj)
//   }
//
//   document.getElementById('output').textContent = JSON.stringify(result);
// }