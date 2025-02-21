// Function Declaration 
function printHi() {
 console.log ('Hi'); 
   }

printHi(); // Hi
printHi(); // Hi

//Function declaration 
function runMyDaily() {
    console.log('Prepare coffee'); 
    console.log('Take a shower'); 
    console.log('Drink coffee'); 
    console.log('Head to school'); 
}

runMyDaily(); 


// Function Declaration with an argument 
function hiName(name) {
console.log(`Hi ${name}!`); 
}

hiName('John'); 
hiName('Adam'); 

let result = hiName('Max'); 

console.log(result); // undefined --> void methods will NOT return anything 

// Function declaration with 2 arguments 
// Take 2 arguments called as greet and name 
// Function Name = greetName 
// greetName('Hello', 'John') --> print 'Hello, John!' 
// greetName('Good morning', 'Jane') --> print 'Good morning, Jane!'

function greetName(greet, name) { // function is declared from they gave us + arguments as well 
console.log(`${greet}, ${name}!`) // should be more dynamic --> give flexibility to the user 
}

greetName('Good evening', 'Max');
greetName('Hi', 'Stefan');
greetName('Bye', 'Mariia');


function multiply (num1, num2) {
    let result = num1 * num2; 
    return result; 
 }

let r = multiply(2, 5); // you can declare this as a variable or print it with console.log() [console.log(multiple(2, 5); ]
console.log(r); // 10 

/* 
Create a function called as average
This function takes 2 parameters called as num1 and num2 
And it returns the average of these parameters 
*/ 

function average (num1, num2) {
    return (num1 + num2)/2 ;
}

console.log(average(3, 5)); 
console.log(average(5, -3)); 
