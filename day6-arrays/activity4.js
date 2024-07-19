// Activity 4: Array Iteration

const fruits = [
    "Apple",    // A
    "Banana",   // B
    "Cherry",   // C
    "Date",     // D
    "Elderberry", // E
    "Fig",      // F
    "Grape",    // G
    "Honeydew", // H
    "Indian Fig" // I
  ];

// Task 10
for(let i=0; i<fruits.length; i++) {
    console.log(`Fruit ${i + 1}:`, fruits[i]);
}

// Task 11
fruits.forEach((fruit, index) => console.log(`Fruit ${index + 1}:`, fruit))