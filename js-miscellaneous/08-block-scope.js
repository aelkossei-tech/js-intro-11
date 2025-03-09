// Before ES6 - there was only var 

if(true){
    var name = 'John'; 
}

console.log(name); // John


// After ES6 - let and const added 
if(true) {
    let num = 10; 
}

console.log(num); // ReferenceError: num is not defined

// if-else, switch, loop