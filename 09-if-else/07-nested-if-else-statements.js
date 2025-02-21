const{ getRandomNumber} = require('./../utils/MathHelper.js'); 
/*
Get a random number between -5 and 5
Find if the number is POS, NEG, NEUTRAL 
*/
let ran1 = getRandomNumber(-5, 5); 
console.log(`The random num1 = ${ran1}`); 

// ladder statements - solutions ==> PREFERRED in work environment 
if (ran1 > 0){
    console.log('POS'); 
}
else if(ran1 < 0){
    console.log('NEG'); 
}
else { // all the aboce conditions are false 
    console.log('NEUTRAL'); 
}

// Nested if-else statements
if (ran1 > 0){
    console.log('POS'); 
}
else {
    if (ran1 < 0) {
        console.log('NEG'); 
    }
    else {
        console.log('NEUTRAL'); 
    }
}

if(ran1 === 0){
    console.log('NEUTRAL'); 
}
else {
    if (ran1 < 0 ) {
        console.log('NEG'); 
    }
    else {
        console.log('POS'); 
    }
}