// let person = {
//     name: 'Peter',
//     age: '200',
//     'job-Title': 'harpun'
// }

// console.log(person);

// person['job-title'] = 'kaput';

// console.log(person);

// console.log(person["job-Title"])

// const { name, age } = person;

// console.log(name, age);

// const employees = [
//     {name: 'john', position: 'worker'},
//     {name: 'jane', position: 'secret'}
// ];

// const [{name}] = employees;

// console.log(name);


// let data = '{ "manager":{"fisrtName":"John", "lastName":"Doe"} }';
// let obj = JSON.parse(data);
// console.log(obj);
// let opa = JSON.stringify(obj, null, 2);
// console.log(opa);
// let arr = [ "John", "Peter", "Sally", "Jane" ];
// let spa = JSON.stringify(arr, null, 4);
// console.log(spa);

// let obi = [{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}];

let obi = '[{"Name":"Stamat","Score":"5.5"},{"Name":"Rumen","Score":"6"}]';

function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);

    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>"); 

    function makeKeyRow(arr) {
        let keys = Object.keys(arr[0]);

        let output = '<tr>';
        for (let key of keys) {
            output = output.concat('<th>', key, '/th');
        }
        output = output.concat('</tr>');

        return output;
    }

    function makeValueRow(obj) {
        let values = Object.values(obj);

        let output = '<tr>';
        for (let value of values) {
            output = output.concat('<td>', value, '</td>')
        }
        output = output.concat('</tr>');

        return output;
    }

    function escapeHtml(value) {}
  
    console.log(outputArr.join('\n'));
}

JsonToHtmlTable(obi);
  

// function JsonToHtmlTable(json) {
//   let arr = JSON.parse(json);

//   let outputArr = ["<table>"];
//   outputArr.push(makeKeyRow(arr));

//   function makeKeyRow(arr) {
//     arr.forEach(element => {
      
//     });
//   }

//   console.log(outputArr.join('\n'));
// }
    
// JsonToHtmlTable(obi);


// dico = new Set();

// dico.add('edno');
// dico.add('dwe');
// dico.add('tri');
// dico.add('edno');
// dico.add('tri');
// dico.add('edno');
// dico.add('kur');

// console.log(dico);
