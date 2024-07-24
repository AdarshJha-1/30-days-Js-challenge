// Activity 2: Finally Block

// Task 3
let err = false;
try {
  if (err) {
    throw new Error("Error in try block");
  }
  console.log("Try executed");
} catch (error) {
  console.log(error.message);
} finally { // Always executes regardless of error or not
  console.log("Finally executed");
}
