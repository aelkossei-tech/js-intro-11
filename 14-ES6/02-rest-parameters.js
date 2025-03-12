Math.max(2, 3); // 3
Math.max(3, 10, 6); // 10
Math.max(7, 2, 10, 15, 3, 2); // 15  

function sum(...values) { // rest parameters collects all the arguments and stores in an array 
    return values.length; 
}
console.log(sum())

// not spread operator --> Rest parameter 
function printArgs(...values) { // values = ['John', 3, null, undefined]
    for(const value of values) {
        console.log(value); 
    }
    // values.forEach((x) => console.log(x)); 
}
printArgs('John', 3, null, undefined); 


function greet(greet, ...values){
    console.log(`${greet}, ${values}!`); 
}

greet('Hi', 'John'); 
greet('Good morning', 'John', 'Jane'); 
greet('Hi', 'John', 'Mariia'); 


// Before ES6 --> arguments object (array-like object)  + AFTER ES6 --> Rest Parameters 
function anyFunc() {
    console.log(arguments); 
}

anyFunc('Hello', 5); // [Arguments] { '0': 'Hello', '1': 5 }

function product(){
    if(arguments.length === 0) return 0; // arguments is NOT directly like an array --> so can't use reduce() b/c not fully an array 
    let result = 1; 
    for(const value of arguments){
        result *= value
    }
}
console.log(product()); 
console.log(product(5)); 
console.log(product(5, 2)); 
console.log(product(5, 2, 4)); 
console.log(product(3, 5, 2, 4)); 