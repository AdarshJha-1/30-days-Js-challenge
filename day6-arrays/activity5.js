// Activity 5: Multi-dimensional Arrays

// Task 12
const multiDimensionalArray = [[1, 2, 3], [4, 5, 6]]
console.log(multiDimensionalArray);

// Task 13
for(let i = 0; i<multiDimensionalArray.length; i++){
    for (let j = 0; j < multiDimensionalArray[i].length; j++) {
        console.log(`Element at index ${i},${j}:`, multiDimensionalArray[i][j]);       
    }
}