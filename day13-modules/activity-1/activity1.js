// Activity 1: Creating and Exporting Modules

// Task 1
const addTwoNumber = (a, b) => a + b;

// Task 2
const Person = {
  name: "Goku",
  age: 25,

  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  },

  haveBirthday() {
    this.age += 1;
    return `Happy Birthday ${this.name}! You are now ${this.age} years old.`;
  },
};

module.exports = { addTwoNumber, Person };
