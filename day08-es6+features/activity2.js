// Activity 2: Destructuring

// Task 3
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [firstEle, secondEle] = numArray;
console.log("First Element:", firstEle);
console.log("Second Element:", secondEle);

// Task 4
const manga = {
  title: "One Piece",
  author: "Eiichiro Oda",
  year: 1997,
};

const {title, author} = manga

console.log("Title:", title);
console.log("Author:", author);