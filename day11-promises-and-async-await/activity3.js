// Activity 3: Using Async/Await

// Task 4
const waitForPromiseResolve = async () => {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise fulfilled");
    }, 3000);
  });
  console.log(result);
};

waitForPromiseResolve();

// Task 5
const waitForPromiseReject = async () => {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => reject("Promise failed"), 1400);
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
waitForPromiseReject();
