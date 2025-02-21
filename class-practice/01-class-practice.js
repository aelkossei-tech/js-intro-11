/*
Task 01: 
Write a program that generates random number between 0 and 50 (both 0 and 50 are included)
Multiply number with 5 and print the result with below message: 
Expected result: the random number * 5 = {result}
*/

// you might use one of these equations to find a random number [use these everytime you see "generate random number"]
/*
    let result = Math.floor(Math.random() * (max - min + 1)) + min; [only if you're using floor, not ceil] --> recommended 
    let result = Math.ceil(Math.random() * (max - min + 1 )) + min - 1;
    let result = Math.round(Math.random() * (max - min + 1 )) + min ;
*/

console.log("====Task 01====\n");  

let rand = Math.floor(Math.random() * (50 - 0 + 1)) + 0; // 1.) use one of the equations to input values and generate random numbers

console.log(rand); // 2.) Run the code w/ the variable that you created that equaled to the equation 

console.log(`The random number * 5 = ${rand *5}`); // 3.) Create the intended statement and multiple it (rand) by 5 


/*
Task 02: 
Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)

Find the min number
Find the max number
Find the absolute difference of the numbers

Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}
*/

console.log("====Task 02====\n");  

let randomNumber1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // since it's required to have 2, we did the equation twice
let randomNumber2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 

const randMax = Math.max(randomNumber1,randomNumber2);  //
const randMin = Math.min(randomNumber1,randomNumber2); 

const absDiff1 = Math.abs(randomNumber1 - randomNumber2); 
const absDiff2 = Math.abs(randomNumber1 - randomNumber2); 

console.log(`min number = ${randMin}`); 
console.log(`max number = ${randMax}`); 
console.log(`absolute difference = ${absDiff1}`); 
console.log(`absolute difference = ${absDiff2}`); 


/*
Task 03: 
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

Find the remainder of the number by 10

Expected result:
The random number % 10 = {result}
*/

console.log("====Task 03====\n");  

const rand3 = Math.round(Math.random() * (100 - 50 + 1 )) + 50 ; // 100 = max ; 50 = min 

console.log(rand3);

console.log(`The random number %10 = ${rand3 % 10}`); 


/*
Task 04: 
Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)

Calculate some points based on numbers generated. So, the points will be calculated as below: 

1st number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points

Test data:
3 7 2 1 8

Expected result:
59
*/

console.log("====Task 04====\n");  

let score = 0; 

const r1 = Math.round(Math.random() * (10 - 1 + 1 )) + 1 // 10 = max ; 1 = min
score += r1 * 5 
const r2 = Math.round(Math.random() * (10 - 1 + 1 )) + 1
score += r2 * 4
const r3 = Math.round(Math.random() * (10 - 1 + 1 )) + 1 
score += r3 * 3
const r4 = Math.round(Math.random() * (10 - 1 + 1 )) + 1 
score += r4 * 2
const r5 = Math.round(Math.random() * (10 - 1 + 1 )) + 1 
score += r5

console.log(r1, r2, r3, r4, r5); 
console.log(score); 


/* MY ANSWER: 
console.log("====Task 04====\n");  

const result1 = Math.round(Math.random() * (10 - 1 + 1 )) + 1 // 10 = max ; 1 = min 
const result2 = Math.round(Math.random() * (10 - 1 + 1 )) + 1 
const result3 = Math.round(Math.random() * (10 - 1 + 1 )) + 1 
const result4 = Math.round(Math.random() * (10 - 1 + 1 )) + 1 
const result5 = Math.round(Math.random() * (10 - 1 + 1 )) + 1 

console.log(`Test data:`); 

console.log(result1, result2, result3, result4, result5); 

console.log(`Expected Result:`); 

console.log(`1st number will be ${(result1 * 5) + result1}`)
console.log(`2nd number will be ${(result2 * 5) + result2 }`)
console.log(`3rd number will be ${(result3 * 5) + result3 }`) 
console.log(`4th number will be ${(result4 * 5) + result4 }`)
console.log(`5th number will be ${(result5 * 5) + result5 }`)
*/


/*
Task 05: 
Requirement:
Write a program that generates 4 random numbers as below;
1st number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)
Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers
Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/

console.log("====Task 05====\n");  // Less functions ==> less code --> THIS IS WHAT THEY WANT 

const _1_25 = Math.floor (Math.random()) * (25 - 1 +1) + 1 ;
const _26_50 = Math.floor(Math.random()) *(50 - 26 +1) + 26;
const _51_75 = Math.floor(Math.random()) * (75 - 51 +1) + 51;
const _76_100 = Math.floor(Math.random())* (100 - 76 +1) + 76;
console.log(_1_25, _26_50 , _51_75 , _76_100); 

const diffMaxMin = _76_100 - _1_25; 
const diff2_3 = _51_75 - _26_50; 



/* MY ANSWER: 
const firstNumber = Math.round(Math.random() * (25 - 1 + 1 )) + 1; // max = 25; min = 1
const secondNumber = Math.round(Math.random() * (50 - 26 + 1 )) + 26; // max = 26; min = 50 
const thirdNumber = Math.round(Math.random() * (75 - 51 + 1 )) + 51; // max = 75; min = 51
const fourthNumber = Math.round(Math.random() * (100 - 76 + 1 )) + 76; // max = 100; min = 76

console.log(firstNumber, secondNumber, thirdNumber, fourthNumber); 

const randomMax = Math.max(firstNumber,secondNumber, thirdNumber, fourthNumber);
const randomMin = Math.max(firstNumber,secondNumber, thirdNumber, fourthNumber);

console.log(`Difference of max and min = ${Math.abs(randomMax - randomMin)}`); 
console.log(`Difference of second and third = ${secondNumber - thirdNumber}`); 
console.log(`Average of all = ${(firstNumber + secondNumber + thirdNumber + fourthNumber)/4}`); 
*/


