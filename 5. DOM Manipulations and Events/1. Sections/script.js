function create(words) {
   let ddz = document.getElementById('content');

   for (let el of words) {
      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = el;
      para.style.display = 'none';
      div.addEventListener('click', show);
      div.appendChild(para);
      ddz.appendChild(div);
   }

   function show(e) {
      e.target.querySelector('p').style.display = 'block';
   }
}