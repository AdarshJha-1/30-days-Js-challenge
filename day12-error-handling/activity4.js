// Activity 4: Error Handling in Promises

// Task 6
new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise failed to resolve");
  }, 2000);
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err));

// Task 7
const errorInAsyncAwait = async () => {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Promise failed to resolve in async function");
      }, 2000);
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

errorInAsyncAwait();
