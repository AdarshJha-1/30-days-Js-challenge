// Activity 3: Arrow Functions

// Task 5
let a = 101,
  b = 33;
const sumOfTwoNumber = (a, b) => a + b;
const sum = sumOfTwoNumber(a, b);
console.log(`${a} + ${b} =`, sum);

// Task 6
let str = "Some random string";
let char = "s";

const isContains = (str, char) => {
  return str.includes(char);
};

const isContaining = isContains(str, char);
isContaining
  ? console.log("This string does contain that specific character")
  : console.log("This string does not contain that specific character");
