let age = 25; 

//2026 
age++; 

//2027
age++; 

console.log(age); // 27 because used ++ twice, so +2 instead of +1 



let quantity = 10; 

quantity--; 
quantity--; 

console.log(quantity); 

// Difference between post and pre increment/decrement 
let i = 10; 

let j = i++; //POST (i++) increase i by 1 but not at this moment +  BUT with PRE (++i) it increases it NOW 

console.log(`I value is ${i} and J value is ${j}`); 


let multiplier = 5; 

console.log(10 * multiplier++); // 50
console.log(multiplier); //6 

let divisor = 4; 

console.log(10/ ++divisor); //2

let divisor2 = 4; 

console.log(9 / --divisor2); //3 


let counter = 5; 

let result = counter++;  // counter is STILL is 5, result = 5 

console.log(++counter * result); // result is still 5, counter is 7 here --> 35 

//post-increment or post-decrement  
// We'll use this with LOOPS 