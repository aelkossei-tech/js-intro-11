// Varirable Hoisting 
// let and const are NOT hoisted 
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x; 

console.log(y); 
var y = 5; // undefined 

// Function Hoisting 
//
sayHi()
sayHi(); 

var sayHi = function sayHi(){
    console.log('Hi'); 
}; 

