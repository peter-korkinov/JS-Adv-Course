function search() {
   let towns = document.querySelectorAll('ul li');
   const searchQuery = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0

   for (let i = 0; i < towns.length; i++) {

     if (towns[i].textContent.includes(searchQuery)) {
       towns[i].style.fontWeight = 'bold';
       towns[i].style.textDecoration = 'underline';
       towns[i].style.display = 'block';
       matches++;
     } else {
       towns[i].style.fontWeight = 'normal';
       towns[i].style.textDecoration = 'none';
       towns[i].style.display = 'none';
     }
   }

   result.textContent = `${matches} matches found`;
}