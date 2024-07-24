// Activity 1: Basic Error Handling with Try-Catch

// Task 1
try {
  functionThatNOtExist(); // not created, will give error
} catch (error) {
  console.log(
    "Error while executing given function, check for it's availability"
  );
}

// Task 2
const divideTwoNumbers = (numerator, denominator) => {
  if (denominator === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return numerator / denominator;
};

try {
  const result = divideTwoNumbers(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error(error.message);
}
