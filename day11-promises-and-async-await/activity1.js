// Activity 1: Understanding Promises

// Task 1

/*
new Promise((resolve) => {
    setTimeout(() => resolve("Message after 2 seconds"), 2000)
}).then((result) => console.log(result))
*/
const messageAfter2Second = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Message after 2 seconds"), 2000);
});
messageAfter2Second.then((message) => console.log(message));

// Task 2
const errMessageAfter2Second = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error Message after 2 seconds"), 2000);
});
errMessageAfter2Second.catch((err) => console.log(err));
