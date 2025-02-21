const { getRandomNumber } = require ('./../utils/MathHelper.js'); // Only added this later on when we first learned functions 

console.log('\n ---------TASK01----------\n');
/*
Convert given Strings below to number data types and find their sum, 
product, division, subtraction, remainder and exponentiation.

let str1 = "5", str2 = "2";
*/
let str1 ='5';
let str2 = '2'; 

let str1Num = parseInt(str1); // also Number(string)
let str2Num = parseInt(str2);

console.log(`The sum of ${str1Num} and ${str2Num} is = ${str1Num + str2Num}.`); 
console.log(`The product of ${str1Num} and ${str2Num} is = ${str1Num * str2Num}.`); 
console.log(`The division of ${str1Num} and ${str2Num} is = ${str1Num / str2Num}.`); 
console.log(`The substraction of ${str1Num} and ${str2Num} is = ${str1Num - str2Num}.`); 
console.log(`The remainder of ${str1Num} and ${str2Num} is = ${str1Num % str2Num}.`); 
console.log(`The exponentiation of ${str1Num} and ${str2Num} is = ${str1Num ** str2Num}.`); 


/*
let str1 ='5';
let str2 = '2';

console.log(`)
*/


console.log('\n ---------TASK02----------\n');
/*
Convert given Strings below to number data types and find the greatest and smallest values and 
find the average and absolute difference of them.
*/
let s1 = '200'; 
let s2 = '-50'; 

let s1Num = parseInt(s1); 
let s2Num = parseInt(s2); 

let greatestValue = Math.max(s1Num, s2Num);
let smallestValue = Math.min(s1Num, s2Num);
let average = (s1Num + s2Num) / 2; 
let absDiff = Math.abs(s1Num - s2Num); 

console.log(`The greatest value is = ${greatestValue}`); 
console.log(`The smallest value is = ${smallestValue} `); 
console.log(`The average is = ${average}`); 
console.log(`The absolute difference is = ${absDiff}`); 


console.log('\n ---------TASK03----------\n');
/*
Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included). 
Then, find the absolute difference of these numbers.
*/
let randNum1 = Math.floor(Math.random() * (50) +1); 
let randNum2 = Math.floor(Math.random() * (50) +1); 

let absDifference = Math.abs(randNum1 - randNum2); 

console.log(`The absolute difference between ${randNum1} and ${randNum2} is ${absDifference}`); 


console.log('\n ---------TASK04----------\n');
/*
Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included). 
Then, find the max and min of these numbers.
*/
let ran1 = Math.floor(Math.random() * (50) +1);
let ran2 = Math.floor(Math.random() * (50) +1);
let ran3 = Math.floor(Math.random() * (50) +1);
let ran4 = Math.floor(Math.random() * (50) +1);
let ran5 = Math.floor(Math.random() * (50) +1);
console.log(ran1, ran2, ran3, ran4, ran5); 

let ranMax = Math.max(ran1, ran2, ran3, ran4, ran5); 
let ranMin = Math.min(ran1, ran2, ran3, ran4, ran5); 

console.log(`The max value = ${ranMax}`); 
console.log(`The min value = ${ranMin}`); 


console.log('\n ---------TASK05----------\n');
/*
Write a program that generates 3 random numbers between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
*/

let randomNumber1 = Math.floor(Math.random() * (51) + 50);
let randomNumber2 = Math.floor(Math.random() * (51) + 50);
let randomNumber3 = Math.floor(Math.random() * (51) + 50);

let sum = randomNumber1 + randomNumber2 + randomNumber3; 

console.log(`The number 1 = ${randomNumber1}`); 
console.log(`The number 2 = ${randomNumber2}`); 
console.log(`The number 3 = ${randomNumber3}`); 
console.log(`The sum of the numbers is = ${sum}`); 


console.log('\n ---------TASK06----------\n');
/*
Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) 
and find if all the numbers are more than 25.
*/
let rand1 = Math.floor(Math.random() * (100) +1); 
let rand2 = Math.floor(Math.random() * (100) +1); 
let rand3 = Math.floor(Math.random() * (100) +1); 

console.log(rand1, rand2, rand3); 

let value1 = (rand1 > 25); 
let value2 = (rand2 > 25);
let value3 = (rand3 > 25);

console.log(value1, value2, value3); 

/*
We're dealing with a condition => True or False 

(rand1 > 25) && (rand2 > 25) && (rand3 > 25)


*/

console.log('\n ---------TASK07----------\n');
/*
Assume you are given a name let name = "David"; 

Print out the length of the name
Find the first character in the name and print it
Find the last character in the name and print it
Find the first 3 characters in the name and print them
Find the last 3 characters in the name and print them
*/

let name = 'David'; 
let nameLength = name.length;// you don't need to declare the values
let firstChar = name[0]; // try to not hard-coding it 
let lastChar = name.at(-1); 
let firstThree = name.slice(0, 3); 
let lastThree = name.slice(-3); 

console.log(`The length of the name is = ${name.length}`); 
console.log(`The first character in the name = ${firstChar}`); //${name[0]}
console.log(`The last character in the name = ${lastChar}`); //${name[name.length -1]} OR ${name.at(-1)}
console.log(`The first 3 characters in the name are = ${firstThree}`); // ${name.slice(0, 3)}
console.log(`The last 3 characters in the name are = ${lastThree}`); // ${name.slice(-3)}; 


// SDET tries to find bugs within codes 