const objects = ['Remote', 'Watch', 'Pen', 'PC', 'Mouse']; 

objects.slice(0, 2); // ['Remote', 'Watch']
objects.slice(1, 4); // ['Watch', 'Pen', 'PC']; 
objects.slice(2); // ['Pen', 'PC', 'Mouse']; 

objects.slice(-2); // ['PC', 'Mouse']
objects.slice(-5, -3); // ['Remote', 'Watch']

// Tricky point 
objects.slice(-4, -5); // [] ==> empty arrays
objects.slice(1, 0); // [] ==> empty arrays

/*
slice()
TASK: retrieves partial arrays using indexes
ARGUMENTS: take one or more index (start index inclusive, end index index exclusive)
RETURN: a new array 
STATIC or INSTANCE: instance 
DOES IT MODIFY ORIGINAL ARRAY: No 
*/
console.log([1, 2, 3, 10, 50].slice(undefined, 3)); // if start index is undefined --> will start at index 0 
console.log([1, 2, 3, 10, 50].slice(0, 25)); // will return the same array since there is no 25 indexes 


// splice() --> it can do everything we did with pop() + push() + shift() + unshift()
const names = ['John', 'Jane', 'Alex', 'Max', 'Mariia']; 

// names.splice(0, 1)
//console.log(names.splice(0, 1)); // if you print it --> [ 'John' ]

//console.log(names); // [ 'Jane', 'Alex', 'Max', 'Mariia' ]

//names.splice(0, 3); // this will remove first 3 elements 

// names.splice(2, 0, 'Adam'); // if you want to add 'Adam' between 'Jane' and 'Alex'

names.splice(1, 2, 'Adam'); // [ 'Jane', 'Adam', 'Max', 'Mariia' ]
console.log(names); 

/*
splice()
TASK: used to add/remove elements anywhere within the array
ARGUMENTS: 2 or more arguments
    1st argument is the start position-index
    2nd argument is the number of elements you want to remove including 
    3rd argument is 
RETURN: returns the removed elements as an array
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: 
*/