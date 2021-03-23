// Write a JavaScript function that receives the following library object as an
// input and displays the books that can be read (the reading status is true).
// Log the book name, author name and reading status 

var library = [{
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];

const readable = library.filter(function (book) {
    return book.readingStatus ? true : false;
})

readable.forEach(function (element, index, array) {
    console.log(`Author: ${element.author}, Name: ${element.title}, Reading status: Available`)
})