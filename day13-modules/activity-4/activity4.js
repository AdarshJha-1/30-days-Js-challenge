// Activity 4: Using Third-Party Modules

// Task 6
import _ from "lodash";
const arr = [31, 21, 23, 43, 34, 4];
console.log("Arrays:", arr);
console.log("Arrays last value:", _.last(arr));
console.log("Arrays first value:", _.head(arr));
console.log("Reveres of array:", _.reverse(arr));

console.log("Max in array:", _.max(arr));
console.log("Min in array:", _.min(arr));
console.log("Sum of all elements in array:", _.sum(arr));

// Task 7
import axios from "axios";
const fetchGitHubUsers = async () => {
  const response = await axios.get("https://api.github.com/users");
  const users = response.data
  console.log(users);
};

fetchGitHubUsers()