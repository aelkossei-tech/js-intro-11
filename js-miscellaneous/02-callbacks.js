function funcA(callbackFunc) {
    console.log('This is A!'); 
    callbackFunc(); 
}
funcA(funcB); // This is A! This is B!


function funcB() {
    console.log('This is B!'); 
}

// *** INTERVIEW QUESTION: What are Higher Order Function and Callback Function? ***
// funcA takes another function as an argument/parameter --> Higher Order Fucntion 
// funcB is passed as an argument to another function --> Callback Function 

