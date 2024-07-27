// Activity 3: Closures in Loops

// Task 5
const arrayOfFunctions = []
for(let i=0; i<=5; i++){
    arrayOfFunctions.push(
        () => {
            console.log(i);
        }
    )
}

arrayOfFunctions.forEach(func => func())