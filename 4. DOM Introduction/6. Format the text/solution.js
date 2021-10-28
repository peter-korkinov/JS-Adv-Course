function solve() {
  let inputText = document.getElementById('input').value;
  let sentences = inputText.split('.');
  let output = [];
  let senteCounter = 0;
  let paragCounter = 0;
  let result = document.getElementById('output')

  output.push('<p>');

  for (let sentence of sentences) {
    if (senteCounter < 3) {
      if (sentence.length > 0) {
        output[paragCounter] = output[paragCounter].concat(sentence, '.');
        senteCounter++;
      }
    } else {
      if (sentence.length > 0) {
        output[paragCounter].concat('</p>');
        senteCounter = 1;
        paragCounter++;
        output.push('<p>');
        output[paragCounter] = output[paragCounter].concat(sentence, '.');
      }
    }
  }

  result.innerHTML = output.join('\n');
}