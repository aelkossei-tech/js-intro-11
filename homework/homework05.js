console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive​ when invoked. 

Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
*/
const countPos = array => array.reduce((accum, curr) => curr > 0 ? accum + 1 : curr, 0); 
console.log(countPos([-45, 0, 0, 34, 5, 67])); 
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); 
console.log(countPos([0, -1, -2, -3])); 


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named countA() which takes a string argument and 
returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 	
*/
const countA = array => array.reduce((accum, curr) => curr.includes('a') )
console.log(countA("TechGlobal is a QA bootcamp")); 