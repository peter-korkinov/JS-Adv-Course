function solve() {
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  let input  = document.getElementById('text').value;
  let targetCase = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  input = input.toLowerCase().split(' ');

  if (targetCase == 'Pascal Case') {
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].capitalize();
    }
  } else if (targetCase == 'Camel Case') {
    for (let i = 1; i < input.length; i++) {
      input[i] = input[i].capitalize();
    }
  } else {
    input = ['Error!']
  }

  result.innerHTML = input.join('');
}