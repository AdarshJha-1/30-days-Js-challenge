// Activity 5: Object Iteration

const manga = {
    title: "One Piece",
    author: "Eiichiro Oda",
    year: 1997,
  
    getTitleAndAuthor: function () {
      return `Title: ${this.title}, Author: ${this.author}`;
    },
  };

// Task 8
for(const property in manga){
    console.log(`${property}: ${manga[property]}`);
}

// Task 9
console.log("All key/properties in manga object:", Object.keys(manga));
console.log("All values in manga object:", Object.values(manga));