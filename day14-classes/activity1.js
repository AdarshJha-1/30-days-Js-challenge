// Activity 1: Class Definition

// Task 1
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    greet() {
        return `Hello, my name is ${this.name} and my age is ${this.age}.`
    }

    // Task 2
    updateAge(newAge) {
        if (newAge <= 0 || newAge < this.age){
            console.error("new age should be correct")
            return
        }
        this.age = newAge
        console.log("Age updated successfully");
    }
}

const p1 = new Person("Luffy", 19)
console.log(p1.greet());

console.log("Previous Age:", p1.age);
p1.updateAge(0)
console.log("Updated Age:", p1.age);

