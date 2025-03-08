const book = { 
    author: {
        fname: 'Stefan', 
        lname: 'Zweig'
    }, 
    title: 'Amok', 
    pages: 62
}; 

Object.freeze(book); // freeze() method makes it ---> Immutuable + ALL properties are frozen, even the nested object 
console.log(Object.isFrozen(book)); // true 

book.pages = 65; 

book.price = 10.99; 

delete book.author; 

console.log(book); 