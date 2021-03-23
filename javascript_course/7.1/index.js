function bookBasicInfo(book){
    return `The book ${book.name} Published at: ${book.published} by the author: ${book.author}`;
  }
  
  const myBook= {
    name: `Poo Thee Bear`,
    author: `Winston Churchill`,
    published: `1st April 1987`,
    targe: `All`,
    length: `165 pages`,
  }
  
  console.log(bookBasicInfo(myBook));