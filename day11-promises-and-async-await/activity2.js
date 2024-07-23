// Activity 2: Chaining Promises

// Task 3
const fetchData = (message, delay) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log(message);
      resolve(message);
    }, delay)
  );
};

fetchData("Date from server 1", 2000)
  .then(() => {
    fetchData("Data from server 2", 1000);
  })
  .then(() => {
    fetchData("Data from server 3", 4000);
  });
