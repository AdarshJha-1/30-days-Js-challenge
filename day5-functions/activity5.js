// Activity 5: Higher-Order Functions

// Task 9
let numOfTime = 10;
const greet = () => {
  console.log("Hello Sir!👋");
};

const repeatNTimes = (func, n = 2) => {
  while (n != 0) {
    greet();
    n--;
  }
};

repeatNTimes(greet, numOfTime);

// Task 10
let number = 6;
const square = (number) => number * number;
const oddOrEven = (result) => {
  result & 1
    ? console.log(`${result} is odd`)
    : console.log(`${result} is even`);
};

const performSquareAndFindOddAndEven = (squareFunc, oddEvenFunc, number) => {
  const result = squareFunc(number);
  console.log(`Square of ${number} is:`, result);
  oddEvenFunc(result);
};

performSquareAndFindOddAndEven(square, oddOrEven, number);
