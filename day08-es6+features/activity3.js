// Activity 3: Spread and Rest Operator

// Task 5
const fruitsArray = ["apple", "banana", "cherry"];
const newFruitsArray = [...fruitsArray, "orange", "grape"];
console.log("New array of fruits with additional fruits");
console.log(newFruitsArray);

// Task 6
const sumOfArbitraryNumberOfArgs = (... nums) => {
    return nums.reduce((accumulator, num) => accumulator + num, 0 )
}
let result = sumOfArbitraryNumberOfArgs(4,454,545,5,3)
console.log(result);