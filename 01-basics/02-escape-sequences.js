console.log('Hello');// This ia single line comment 
//Below line just prints Hello
console.log('hi')

// Escape Sequences
// I like 'Apple' and "Banana".
console.log('I like \'Apple\' and "Banana".'); //had to use \' because it was within a single-quote line 
console.log("I like 'Apples' and \"Bananas\"."); //had to use \" because it was within a double-quote line 
console.log(`I like 'Apple' and "Bananas"`);//ES6 Feature

console.log('\tHello, today is a good day.\n\nI enjoy it so far'); //this is the way to use escape sequences when trying to replicate paragraph structure
console.log(`   Hello, today is a good day.
    
I enjoy it so far`); //However with ` ` you dont't need to use escape sequences 

//My file can be found at My file can be found at C:\Users\John\Documents\Project
console.log('C:\\Users\\John\\Documents\\Project'); //Need to use \\ escape sequence to make sure that \ shows up in code
console.log("C:\\Users\\John\\Documents\\Project"); 
console.log('Hello\\\\\\World'); //Hello\\\World

