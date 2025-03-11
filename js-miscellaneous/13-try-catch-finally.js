try {
    // your code goes here --> code that you're trying to execute 
    // runtime will always attempt to run this block 
}
catch(error){ // err/ error/ er
    // your code to handle the error + will be executed ONLY if there is an error in the try block 
} // but in case you get an error --> CATCH IT
finally {
    // your code to run regardless if there is an error or not 
}



try {
   // console.log('Hello', fname); 
/*
Caught an error!!!
Goodbye!
*/
   console.log('Welcome!')
}
catch(err){
    console.log('Caught an error!!!'); // runs catch 
}
finally{
    console.log('Goodbye!'); // ALWAYS runs --> don't really use because it's repetitive 
}
/*
Welcome!
Goodbye!
*/


try {
    console.log('Hello', fname); // RefereceError

    const firstMonth = 'January'; 
    firstMonth = 'John'; //TypeError 
}
catch(error){
    // can't have multiple catch statements 
}
