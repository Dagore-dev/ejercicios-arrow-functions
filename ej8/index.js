class Employee {
  constructor (name, salary) {
    this.name = name
    this.salary = salary
  }
}

const getMaxSalaryEmployee = (employees) => {
  let maxSalaryEmployee = new Employee('', 0)

  for (const employee of employees) {
    if (employee.salary > maxSalaryEmployee.salary) {
      maxSalaryEmployee = employee
    }
  }

  return maxSalaryEmployee
}

const employees = [new Employee('Francisco', 20000), new Employee('María', 23000), new Employee('José Juan', 18000), new Employee('Natalia', 18000), new Employee('Alberto', 22000)]
const maxSalaryEmployee = getMaxSalaryEmployee(employees)

console.log(maxSalaryEmployee)
