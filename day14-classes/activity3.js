// Activity 3: Static Methods and Properties

// Task 5

class Person {
  static greeting() {
    return "Hello sir, nice to see you";
  }
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// calling person class static greeting method
console.log(Person.greeting());

// Task 6

class Student extends Person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount += 1;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am a ${this.age} years old and my student id is ${this.studentId}.`;
  }
}

console.log("Total number of students:", Student.studentCount);
const s1 = new Student("Goku", 100, 1);
const s2 = new Student("Luffy", 19, 2);
const s3 = new Student("Ichigo  ", 27, 3);
console.log("Total number of students:", Student.studentCount);
