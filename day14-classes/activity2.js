// Activity 2: Class Inheritance

// from activity 1
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    greet() {
        return `Hello, my name is ${this.name} and my age is ${this.age}.`
    }
}


// Task 3
class Student extends Person {
    constructor(name, age, studentId){
        super(name, age)
        this.studentId = studentId
    }

    // Task 4
    greet() {
        return `Hello, my name is ${this.name} and I am a ${this.age} years old and my student id is ${this.studentId}.`
    }
}

const s1 = new Student("Goku", 100, 19)
console.log("Student ID:", s1.studentId);

console.log(s1.greet());