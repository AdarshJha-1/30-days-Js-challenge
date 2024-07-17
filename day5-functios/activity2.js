// Activity 2: Function Expression

// Task 3
let a = 3,
  b = 222;
const maxOfTwoNumber = function (a, b) {
  a > b
    ? console.log(`${a} is maximum number`)
    : console.log(`${b} is maximum number`);
};
maxOfTwoNumber(a, b);

// Task 4
const firstName = "Adarsh";
const lastName = "Jha";

const concatString = function (str1, str2) {
  return str1 + " " + str2;
};

const fullName = concatString(firstName, lastName);
console.log(fullName);
