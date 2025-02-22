// ** DEFINIELY an INTERVIEW QUESTION **
// How do you check if a variable is an array? 

const arr = []; 

console.log(typeof arr); // object 

// Array.isArray() --> Static Method 
/*
TASK: checks if a vairable is an an instance of Array or not 
ARGUMENTS: Yes (any types of argument) --> one variable to check 
RETURN: returns a boolean. True = variable is an array instance, False = otherwise
STATIC or INSTANCE: Static 
DOES IT MODIFY ORIGINAL ARRAY: No 
*/

console.log(Array.isArray(arr)); // True 