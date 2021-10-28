function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick); //<<<<<< ()?
   let scope = document.querySelectorAll('tbody tr');

   function onClick() {
      const searchQuery = document.getElementById('searchField').value.toLowerCase();

      for (let el of scope) {
         let text = el.textContent.toLowerCase();

         if (text.includes(searchQuery)) {
            el.classList.add('select');
         } else {
            el.classList.remove('select');
         }
      }
   }
}