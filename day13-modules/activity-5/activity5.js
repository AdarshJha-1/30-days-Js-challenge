// Activity 5: Module Bundling

// Task 8
import { Person } from "./person.js";
import {COUNT,PI,add,multiply,subtract} from "./maths_func.js"

console.log(Person);
console.log(Person.introduce());
console.log(Person.haveBirthday());

console.log("PI:", PI);
console.log("COUNT:", COUNT);

console.log("Added Value:", add(30, 4));
console.log("Subtracted Value:", subtract(30, 4));
console.log("Multiplied Value:", multiply(30, 4));