const Author = require("./Author");
const Book = require('./Book'); 

/*
We will write our actual program that we define an author and the books
In this program we will write the biography of George R. R. Martin, an American novelist.

Create 3 books object with the below information:
        BookName                            Genre           TotalPage
        A Game of Thrones                   Epic Fantasy    694
        A Clash of Kings                    Epic Fantasy    768
        A Storm of Swords                   Epic Fantasy    973

Create an Author object with the below information:
    First name: George R. R.
    Last name: Martin
    Country: United States
    Books: are given above

1. Get and print Author's full name
2. Get and print Author's books iterated with a loop

EXPECTED OUTPUT:
George R. R. Martin
Book { title: 'A Game of Thrones', genre: 'Epic Fantasy', page: 694 }
Book { title: 'A Clash of Kings', genre: 'Epic Fantasy', page: 768 }
Book { title: 'A Storm of Swords', genre: 'Epic Fantasy', page: 973 }
*/
const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694); 
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768); 
const book3 = new Book('A Storm of Swords', 'Epic Fantasy', 973); 

console.log(book1); 
console.log(book2); 
console.log(book3); 

const author = new Author('George R. R.', 'Martin', 'United States', [book1, book2, book3]); // [book1, book2, book3].forEach(x => console.log(x)); 
console.log(author); 
console.log(author.getFullName()); 

/*
 for...of loop
for(const book of author.getBooks()) {
    console.log(book); 
}
*/

// forEach() method
author.getBooks().forEach(book => console.log(book)); 

// Find and print the name of the Book which has the most pages --> Storm of Swords 
const bookWithMaxPages = author.getBooks().reduce((acc, curr) => curr.page > acc.page ? curr : acc); // we could use our object's properties within our reduce()
// author.getBooks().reduce((acc, curr) => curr.page > acc.page ? curr : acc).title;
console.log(bookWithMaxPages.title); 