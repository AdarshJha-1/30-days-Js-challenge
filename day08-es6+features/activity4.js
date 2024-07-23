// Activity 4: Default Parameters

// Task 7
const productOfTwoNUmbers = (a, b = 1) => a * b;

const resultWithBothParams = productOfTwoNUmbers(10, 4);
console.log("With both parameters:", resultWithBothParams);

const resultWithOneParam = productOfTwoNUmbers(10);
console.log("With only one parameters:", resultWithOneParam);