function processor(inputArr) {
  let processArr = [];

  let commands = {
    add(str) {processArr.push(str)},
    remove(str) {processArr = processArr.filter(el => el !== str)},
    print() {console.log(processArr.join())}
  }

  for (let i of inputArr) {
    const [cmd, str] = i.split(' ');
    commands[cmd](str);
  }
}

processor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
processor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
