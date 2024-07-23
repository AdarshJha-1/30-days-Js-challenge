// Activity 4: Fetching Data from an API

// Task 6
fetch("https://api.github.com/users")
  .then((response) => {
    return response.json();
  })
  .then((parsedData) => console.log(parsedData))
  .catch((err) => console.error(err));

// Task 7
const fetchData = async () => {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
fetchData();
