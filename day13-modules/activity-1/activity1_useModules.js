// Using exported function from Activity 1

// Task 1 function used here
const {addTwoNumber} = require("./activity1")
const sum = addTwoNumber(23,45)
console.log("Sum:", sum);

// Task 2 object used here
const {Person} = require("./activity1")

console.log(Person);
console.log(Person.introduce());
console.log(Person.haveBirthday());