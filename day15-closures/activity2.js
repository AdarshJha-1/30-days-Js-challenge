// Activity 2: Practical Closures

// Task 3
const generateUniqueId = () => {
    let lastId = 0;
    const getId = () => {
        lastId++;
        return lastId
    }
    return getId
}

let id = generateUniqueId()
console.log("Generated ID:",id());
console.log("Generated ID:",id());
console.log("Generated ID:",id());
console.log("Generated ID:",id());

// Task 4

const greetUser = (name) => {
    return () => `Hello, ${name}! Welcome to our platform.`
}

const greet = greetUser("Light Yagami")
// const greet = greetUser("Light Yagami")()   // can be written as this as well but i find it complicated
console.log(greet());