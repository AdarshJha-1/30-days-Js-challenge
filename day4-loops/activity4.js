// Activity 4: Nested Loops

// Task 7

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < i; j++) {
//        console.log("*")
//     }
//     console.log();
// }

for (let i = 0; i < 5; i++) {
  let pattern = "";
  for (let j = 0; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
