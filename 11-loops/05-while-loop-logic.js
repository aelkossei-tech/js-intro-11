const { getRandomNumber } = require('./../utils/MathHelper.js'); 

let gameNumber = 5; 
let attempts = 0; 
let randomNumber; // undefined 

//for(; ;){
    //let randomNumber = getRandomNumber(1, 10); 
   // console.log(randomNumber); 
// attempts++; 

   // if(randomNumber === gameNumber){
       // break; 
   // }
//}
//let time = attempts === 1 ? 'time' : 'times';
//console.log(`Game is over after ${attempts} times.`); 

while (randomNumber !== gameNumber){
    randomNumber = getRandomNumber(1, 10); 
    attempts++; 
}
let time = attempts === 1 ? 'time' : 'times';
console.log(`Game is over after ${attempts} times.`); 


// Keep generating a random number between 1 and 15 (inclusive) 
// until you get lucky number = 13; 

let ran; // undefined 
let countAt = 0; 

do {
 ran = getRandomNumber(1,15); 
 countAt++; 
} while(ran !== 13); 

console.log(`We got 13 after ${countAt} times.`); 

// INTERVIEW QUESTION: 
// Do-while first runs the block and checks the condition; while checks the condition runs the block 


