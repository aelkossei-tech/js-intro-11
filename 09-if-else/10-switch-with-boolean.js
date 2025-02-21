//This is something NOT available in Java, C#

const { getRandomNumber} = require('./../utils/MathHelper.js'); 

let ran1 = getRandomNumber(-100, 5); 
console.log(`Random number is ${ran1}`); 
 
switch (smth){  // Obviously more cumbersome than if-else
    case -100: 
     console.log('NEG'); 
     break; 
    case -99:
    console.log('NEG');
     break; 
}


if(ran1 > 0){
    console.log('POS'); 
}
else if(ran1 < 0){
    console.log('NEG'); 
}
else {
    console.log('NEUTRAL'); 
}