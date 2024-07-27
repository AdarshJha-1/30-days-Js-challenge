// // Activity 1: Understanding Closures

// // Task 1
function outer() {
  let name = "Adarsh";
  function mySelf() {
    return `my name is ${name}`;
  }
  return mySelf;
}

const mySelfFromOuter = outer();
const result = mySelfFromOuter();
console.log(result);

// Task 2
const counter = () => {
  let count = 0;

  const increment = () => {
    count++;
  };
  const getCount = () => {
    return count;
  };

  return {increment, getCount}
};

let count = counter();
console.log(count.getCount());  // starting value
count.increment()
count.increment()
count.increment()
count.increment()
console.log(count.getCount());  // after incrementing
