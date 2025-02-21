const{ getRandomNumber} = require('./../utils/MathHelper.js'); 
/*
Get a random number between -5 and 5
Find if the number is POS, NEG, NEUTRAL 
*/
let ran1 = getRandomNumber(-5, 5); 
console.log(`The random num1 = ${ran1}`); 

if (ran1 > 0){
    console.log('POS'); 
}
else if(ran1 < 0){
    console.log('NEG'); 
}
else { // all the aboce conditions are false 
    console.log('NEUTRAL'); 
}

// OR 

/*
if (ran1 > 0) console.log('POS'); -->  all the above conditions are false
else if(ran1 < 0) console.log('NEG'); 
else console.log('NEUTRAL'); 

console.log(result1); 
let result1 ran1 > 0 ? 'POS' : ran1 < 0 ? 'NEG' : 'NEUTRAL'; 
*/

console.log('End of the program!'); 