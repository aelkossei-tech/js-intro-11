let num1 = 1; 

//Reassign the value of num1
num1 = 11; 

console.log(num1); 

//const variables cannot be re-assigned 
const num2 = 2; 
num2 =22; //TypeError: Assignment to constant variable.

console.log(num2); 

const firstMonth = 'January'; 
const pi = 3.14; 

//Declare let but not const 
let num10; //let can be declared 
const num11 = 11; //Must always be intialized with a value 

//var is not preferred in modern JavaScript after ES6
//var can be re-assigned [var is like let]
var price = 10.99 //is going to suggest to use either 'let' or 'const'

