// Activity 4: Function Parameters and Default Values

// Task 7
let a = 5;
let b = 3;
const productOfTwoNumber = (a, b = 2) => a * b;
console.log("Product is :", productOfTwoNumber(a, b));

// Task 8
let name = "Goku";
let age = 2000;
const greet = (name, age = 18) => {
  return `Thanks for signin up your name is ${name} and age is ${age}`;
};

console.log(greet(name, age));
