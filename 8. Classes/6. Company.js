class Company {
  constructor() {
    this.departments = {};
  }
  addEmployee(name, salary, position, department) {
    if (!name || !salary || salary < 0 || !position || !department) {
      throw Error('Invalid input!');
    }

    const employee = {
      name: name,
      salary: salary,
      position: position
    }

    if (this.departments.hasOwnProperty(department)) {
      this.departments[department][name] = employee;
    } else {
      this.departments[department] = {[name]: employee};
    }

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    function getBestDep(obje) {
      function averageOfSalary(obj) {
        let totalOfSalaries = 0;
        const numOfEmployees = Object.keys(obj).length;
        Object.values(obj).forEach(el => totalOfSalaries += el.salary);

        return (totalOfSalaries / numOfEmployees).toFixed(2);
      }

      let temp = []

      for (let dep in obje) {
        temp.push([dep, averageOfSalary(obje[dep])])
      }

      temp.sort((a, b) => {return b[1] - a[1]});

      return temp[0];
    }

    const [nameOfBest, averageSalary] = getBestDep(this.departments);
    const bestDep = this.departments[nameOfBest];
    let outputArr = [];
    let empArr = [];

    outputArr.push(`Best Department is: ${nameOfBest}`, `Average salary: ${averageSalary}`);

    for (let emp in bestDep) {
      empArr.push(bestDep[emp]);
    }

    empArr.sort((a, b) => {return b.salary - a.salary || a.name.localeCompare(b.name)});

    for (let emp of empArr) {
      outputArr.push(`${emp.name} ${emp.salary} ${emp.position}`);
    }

    return outputArr.join('\n');
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
console.log(c.addEmployee("Slavi", 0, "dyer", "Construction"));
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// console.log(c);
// console.log('---------------------------------------------');
// console.log(c.departments);


// class Company {
//   constructor() {
//     this.departments = {};
//   }
//   addEmployee(name, salary, position, department) {
//     if (!name || !salary || salary < 0 || !position || !department) { // <<<<<<<<<<<<<<<<<< less than zero?
//       return 'Invalid input!';
//     }
//
//     const employee = {
//       salary: salary,
//       position: position
//     }
//
//     if (this.departments.hasOwnProperty(department)) {
//       this.departments[department][name] = employee;
//       this.departments[department].totalSalary += salary;
//       this.departments[department].numberOfEmployees += 1;
//     } else {
//       this.departments[department] = {
//         totalSalary: salary,
//         numberOfEmployees: 1,
//         averageSalary() {
//           return this.totalSalary / this.numberOfEmployees;
//         },
//         [name]: employee
//       };
//     }
//
//     return `New employee is hired. Name: ${name}. Position: ${position}`;
//   }
//
//   bestDepartment() {
//
//     for (let dep in this.departments) {
//
//     }
//   }
// }