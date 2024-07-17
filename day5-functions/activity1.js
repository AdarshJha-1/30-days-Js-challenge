// Activity 1: Function Declaration

// Task 1
let number = 9;

function evenOrOdd(number) {
  if (number % 2) {
    console.log(`Number ${number} is an odd number`);
  } else {
    console.log(`Number ${number} is an even number`);
  }
}
function evenOrOddWithAndOperator(number) {
  if (number & 1) {
    console.log(`Number ${number} is an odd number`);
  } else {
    console.log(`Number ${number} is an even number`);
  }
}

evenOrOdd(number);
evenOrOddWithAndOperator(number);

// Task 2
function squareOfNumber(number) {
  return number * number;
}

const ans = squareOfNumber(number);
console.log(`Square of number ${number}:`, ans);
