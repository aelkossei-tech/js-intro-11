let name = 'John'; 

const nameChars1 = name.split(''); 

console.log(nameChars1);  // [ 'J', 'o', 'h', 'n' ] --> same thing as Array.from 
const nameChars2 = Array.from(name); 
console.log(nameChars2); // [ 'J', 'o', 'h', 'n' ]


/*
Array.from()
TASK: it creates a new array from iterable object
ARGUMENTS: it takes an iterable object 
RETURN: a new array 
STATIC or INSTANCE: static 
DOES IT MODIFY ORIGINAL ITERABLE OBJECT: No 
*/

const arr1 = [1, 2, 3]; 
const arr2 = new Array('Berlin', 'Oslo', 'Toronto'); 
const arr3 = Array.of('John', 'Jane', 'Alex'); // --> another way of creating arrays 
const arr4 = Array.of('John', null, 5, 10.99); 

console.log(arr1, arr2); // [ 1, 2, 3 ] [ 'Berlin', 'Oslo', 'Toronto' ]

/*
Array.of()
TASK: creates a new array with the given items/elements
ARGUMENTS: items/elements
RETURN: a new array 
STATIC or INSTANCE: static 
DOES IT MODIFY ORIGINAL ITEMS: No 
*/