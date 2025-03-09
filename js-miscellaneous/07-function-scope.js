function any(){
    var var1 = 'Hello'; 
    let var2 = 'Hi'; 
    const var3 = 'Sunday'; 

    console.log(var1, var2, var3); 
}

any(); // Hello Hi Sunday
console.log(var1); // ReferenceError: var1 is not defined --> cannot acces the variable within the function 
console.log(var2); // ReferenceError: var2 is not defined --> cannot acces the variable within the function 
console.log(var3); // ReferenceError: var3 is not defined --> cannot acces the variable within the function 