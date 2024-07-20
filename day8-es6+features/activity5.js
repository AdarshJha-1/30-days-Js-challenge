// Activity 5: Enhanced Object Literals

// Task 8
const employee = {
  name: "Goku",
  position: "Software Engineer",
  salary: 90000,
  department: "Engineering",
  joiningDate: new Date("2020-05-15"),

  getDetails() {
    return `${this.name} is a ${this.position} in the ${this.department} department with a salary of $${this.salary}.`;
  },

  giveRaise(percentage) {
    this.salary += this.salary * (percentage / 100);
    return `New salary after a ${percentage}% raise is $${this.salary}.`;
  },
};

console.log(employee.getDetails());

// Task 9
const key1 = "language"
const key2 = "isStudent"

const obj = {
  name: "Luffy",
  age: 19,
  [key1]: "javascript",
  [key2]: true
}

console.log(obj);