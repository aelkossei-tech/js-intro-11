// Why we need try-catch 

try{
    console.log(fname); 
}
catch(error){
    console.log(`You have an error here: ${error}!!!`); // error is an object 
    console.log(`You have an issue here: ${error.message}!!!`); // message is an object property 
}


console.log('Rest of the program!'); // whenever there's an error --> stops the rest of the code
//  SO by using try/catch, it helps to prevent that 