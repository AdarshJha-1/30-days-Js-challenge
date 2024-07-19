// Activity 4: This keyword

// Task 7
const manga = {
  title: "One Piece",
  author: "Eiichiro Oda",
  year: 1997,

  getTitleAndAuthor: function () {
    return `Title: ${this.title}, Author: ${this.author}`;
  },
};

console.log(manga.getTitleAndAuthor());
