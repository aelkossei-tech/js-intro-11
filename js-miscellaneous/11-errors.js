
try {
    const pi = 3.14; 
    pi = 10; // TypeError: Assignment to constant variable. [got this from stack --> error details in output]
} catch(error) {
    console.log('An error occured!'); 
}

// you'd use try/catch if you feel like you know there's going to be an error in your code 
// --> a way to handle your code errors, especially when you have so many lines of code [your backup plan]
// same structure as do-while loop (in a way)

console.log(address); // ReferenceError: address is not defined

// Syntax Error 
console.log('Hello'); // SyntaxError: missing ) after argument list