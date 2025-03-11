function validateAgeForDL(age) {
    if(age >= 16) return 'Valid';
    throw new Error(`${age} is not allowed for DL!`)
}

try {
    const result1 = validateAgeForDL(15); 
    console.log(result1); 
}
catch(error){
    console.log('Error:', error.message); 
}

console.log('Rest of the program!'); 



const numbers = [2, 3, 5, 6]; 
try {
    const max = Math.max(numbers); 
    console.log(max); // NaN

    if(!max) throw new Error('My first way did not work!'); // if not truthy 
}
catch(error){
    console.log('Error message:', error.message); // Error message: My first way did not work!
    console.log('Error name:', error.name); // Error name: Error
    console.log('Error stack:', error.stack); // Error stack: Error: My first way did not work! + all the lines 
    console.log('Error cause:', error.cause); // undefined 
    const max = numbers.reduce((accum, curr) => accum > curr ? acc : curr); 
    console.log(max); 
}


const anyError = new Error(); 
const date = new Date(); 
