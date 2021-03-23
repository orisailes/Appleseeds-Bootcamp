// 1. create 2 book objects with properties: name, author, year.
// 2. create an empty object bookUtils (utils = short for utilities).
// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.
// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.
// 5. add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the languahe, or
// updates an existing one.
// 6. add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.
// 7. add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.
// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.

const book1 = {
    name: `The price who sold his ferari`,
    author: `Antoan De-Saint`,
    year: 1943, 
  };
  
  const book2 = {
    name: `Badolina`,
    author: `Gaby Nitzan`,
    year: 1999, 
  };
  
  const bookUtils = {
    getFirstPublished : function(book1,book2){
      const x = book1.year;
      const y = book2.year;
      return (x>y ? y : x);
    },
    setNewEdition : function(book,editionYear){
      book.lastEdition = editionYear;
    },
    setLanguage : function (book, language, translator){
      book.translation = {
        language : `${language}`,
        translator : `${translator}`,
      };
    },
    setPublisher : function(book,name,location){
      book.publisher = {
        name: `${name}`,
        location:`${location}`,
      };
    },
    isSamePublisher : function (book1,book2) {
      return (book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location ? true : false);
    },
  };
  
  console.log(bookUtils.getFirstPublished(book1,book2));
  bookUtils.setNewEdition(book1, 2015);
  console.log(book1);
  bookUtils.setLanguage(book2, `English` , `Ada Yonat`);
  console.log(book2);
  bookUtils.setPublisher(book2 , `Maariv`, `Tel Aviv`);
  bookUtils.setPublisher(book1 , `Maariv`, `Tel Aviv`);
  console.log(book2,book1);
  bookUtils.isSamePublisher(book1 , book2 );
  