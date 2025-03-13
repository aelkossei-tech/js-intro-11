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

function greet(name, callback) { // this function [greet() has two parameters (name, callbackFunc)] --> Higher Order Function 
    console.log("Hello, " + name);  // it will print out 'Hello' and whatever name we give it 
    callback();
  }
  
  function sayBye() { // Callback Function
    console.log("Goodbye!"); // will print 'Goodbye!' once you invoke it as the callback 
  }
  
  greet("Ayah", sayBye); // firstFunc(name, secondFunc) --> It will print both Hello, Ayah + Goodbye!
  // since we console.log()'ed in the function, you don't need to put the function in a console.log
  