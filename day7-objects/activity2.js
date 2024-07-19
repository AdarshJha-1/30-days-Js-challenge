// Activity 2: Object Methods

const manga = {
  title: "One Piece",
  author: "Eiichiro Oda",
  year: 1997,

  // Task 3
  getTitleAndAuthor: () => `Title: ${manga.title}, Author: ${manga.author}`,

  // Task 4
  updateYear: (year) => (manga.year = year),
};

console.log("Default manga object:", manga);

let titleAndAuthor = manga.getTitleAndAuthor();
console.log(titleAndAuthor);

manga.updateYear(2024);

console.log("Updated object:", manga);
