// Activity 3: Nested Objects

// Task 5
const library = {
    name: "Manga Mall",
    books: [
        {
            title: "One Piece",
            author: "Eiichiro Oda",
            year: 1997
        },
        {
            title: "Bleach",
            author: "Tite Kubo",
            year: 2001
        },
    ]
}
console.log(library);

// Task 6
console.log("Library name:", library.name);
library.books.forEach((manga) => console.log("Manga title:", manga.title))