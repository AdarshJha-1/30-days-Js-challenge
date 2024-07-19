// Activity 3: Arrays Methods (Intermediate)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Default array:", array);

// Task 7
const arrayWithMapFunc = array.map((v) => v * 2);
console.log("created with map:", arrayWithMapFunc);

// Task 8
const arrayWithFilterFun = array.filter((v) => v % 2 === 0);
console.log("created with filter:", arrayWithFilterFun);

// Task 9
const sum = array.reduce((accumulator, currentValue) => {
  // console.log(accumulator, currentValue);
  return accumulator + currentValue;
}, 0);
console.log("Sum :", sum);
