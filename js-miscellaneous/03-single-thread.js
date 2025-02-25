// Synchronous code 
console.log('Hello'); 
console.log('Monday'); // all executed in one single code 

//Asynchronous code 
setTimeout(() => {
    console.log('John');
}, 2000); // callback function within this function

console.log('Batch-11'); // John comes AFTER this 


// Call Stack - Web APIs - Callback Queue 
function connectToDB() {
    console.log('Conencted to DB!'); 
}

function getData(){
    console.log('Data...'); 
}

function processData() {
    console.log('Data processed...'); 
}

function runDB() {
    connectToDB(); 
    getData(); 
    processData(); 
}

runDB(); // will print all three statements 

/*
now if it's being delayed --> JS used Web APIs to take the delayed function as a temporary area until
 all other functions [waits until the 1 sec. we set]
 it goes from Web API --> Event Log --> Callback Queue (checks if it's done) --> back to Callstack 
*/