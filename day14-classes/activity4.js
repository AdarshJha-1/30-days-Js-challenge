// Activity 4: Getters and Setters



class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  // Task 7
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set firstName(newFirstName) {
    if (newFirstName.trim() === "") {
      console.error("Please provide valid new first-name");
      return
    }
    this._firstName = newFirstName
    console.log("First-name updated successfully");
  }
  set lastName(newLastName) {
    if (newLastName.trim() === "") {
      console.error("Please provide valid new last-name");
      return
    }
    this._lastName = newLastName
    console.log("Last-name updated successfully");
  }
}

const p1 = new Person("Roronoa", "Zoro", 21);
console.log(p1.fullName);
p1.firstName =""
p1.lastName = "Sanji"
console.log(p1.fullName);