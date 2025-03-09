// Varirable Hoisting 
// let and const are NOT hoisted 
// var hoisted 

console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x; 

console.log(y); 
var y = 5; // undefined 

/*
var y; // undefined 

console.log(y); // undefined b/c var is hoisted  --> let and const are NOT HOISTED (JS doesn't allow hoisting for them)

y = 5; 
*/

// Function Hoisting 
//
sayHi()
sayHi(); 

var sayHi = function sayHi(){
    console.log('Hi'); 
}; 

/*
only w/ the traditional way of creating a function --> then it can be hoisted 
- if arrow function or regular expression --> CAN'T be hoisted 
*/

// Hoisting can happen in a block or function body as well

function startProcess() {
    console.log(smth); // ReferenceError: Cannot access 'smth' before initialization

    let smth = 10;  
}

if(true){
    console.log(name); // ReferenceError: Cannot access 'name' before initialization
    let name = 'Alex'; // if var ---> undefined 
}


if(true){
    var name; 

    console.log(name); 
    var name = 'Alex'; // if var ---> undefined 
}