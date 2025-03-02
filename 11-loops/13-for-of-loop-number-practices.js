console.log(`\n ---- Task01-----\n`); 
const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
// Count how many positive numbers you have in the array -> 4

let countPos = 0; 
for(const number of numbers){
    if(number > 0) countPos++; 
}
console.log(countPos); 

/*
FOR LOOP: 

for(let = 0; i < numbers.length; i++){
    if(numbers[i] > 0) countPos++; 
}
*/

console.log(`\n ---- Task02-----\n`); 
// Count how many negative numbers you have in the array 
let countNeg = 0; 
for(const number of numbers){
    if(number < 0) countNeg++; 
}
console.log(countNeg); 


console.log(`\n ---- Task03-----\n`); 
// -7, -2, 0, -2, 0, 5, 5, 10, 100, 0
// Count how many even numbers you have in the array --> 7
let countEven = 0; 
for(const number of numbers){
    if(number % 2 === 0) countEven++; 
}
console.log(countEven); 

console.log(`\n ---- Task04-----\n`); 
// -7, -2, 0, -2, 0, 5, 5, 10, 100, 0
// Count how many positive odd numbers you have in the array --> 2
let countPosOdd = 0; 
for(const number of numbers){
    if(number % 2 !== 0 && number > 0) countPosOdd++; 
}
console.log(countPosOdd); 


