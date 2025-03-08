const eat = true; 
const sleep = true; 

/*
 Before ES6 (2015)
const cat = {
    name: 'Silver', 
    eat: eat, 
    sleep: sleep
}; 
*/

// Improved & added after ES6
const cat = {
    name: 'Silver', 
    eat, 
    sleep
}; 
console.log(cat); // { name: 'Silver', eat: true, sleep: true }


const bacthNumber = 11; 
const program = 'SDET'; 

const student1 = {
    bacthNumber, 
    program, 
    fullname: "John Doe"
}; 

console.log(student1); 