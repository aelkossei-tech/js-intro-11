// Send it to Bilal on Slack (NOT TechGlobal Slack)
/*
Task01

Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1: 34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

Test data 2: 76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/
let num = 54; 
if (num <= 50) {
    console.log('1st half'); 
} 
else {
    console.log('2nd half'); 
}

if (num <= 25) {
     console.log('1st quarter'); 
}
else if (num <= 50) {
     console.log('2nd quarter'); 
}
else if (num <= 75) {
     console.log('3rd quarter'); 
}
else  console.log('4th quarter'); 

/*
BILAL'S ANSWER: 

num = 24; 
if(num <=25) {
console.log(`${num} is in the 1st half)
console.log(`${num} is in the 1st quarter)
}
else if(num <=50){
console.log(`${num} is in the 1st half)
console.log(`${num} is in the 2nd quarter)
}
else if(num <= 75){
console.log(`${num} is in the 2nd half)
console.log(`${num} is in the 2nd quarter)
}
else {
console.log(`${num} is in the 2nd half)
console.log(`${num} is in the 4th quarter)
}

OR  (watch the recording to go over switch statements)

if(num < 51)    
    console.log('First half')
    if (num <=25) console.log('First Quarter')
    else console.log('Second Quarter')
}
else {
    console.log('Second half')
    if (num <= 75) console.log('Third Quarter')
    else console.log('Forth Quarter')
}
*/

/*
Task02
Requirement:
Assume you are given 3 numbers between 1 and 100
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false

Test data 1: 2, 4, 6
Expected result 1: true

Test data 2: 68, 44, 2
Expected result 2: true

Test data 3: 10, 20, 25
Expected result 3: false

Test data 4: 51, 67, 99
Expected result 4: false
*/
const num1 = 68; 
const num2 = 44; 
const num3 = 2; 

console.log(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0); 


/*
Task03

Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace 
or special.

Test data 1: "a"
Expected result 1:
"a"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 2: "$"
Expected result 1: 
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is a whitespace
*/ 
let char = "";

if (/[a-zA-z]/.test(char)) console.log(`${char} is a letter!`); 
else if (/[0-9]/.test(char)) console.log(`${char} is a number!`); 
else if (char === " ") console.log(`${char} is a whitespace!`); 
else console.log(`${char} is a special character!`); 

let char1 = "$"; 
let char1Code = char1.charCodeAt(char1); // console.log(a.charCodeAt() === 97) --> how Bilal does it
if((char1 >= 'a' && char1 <= 'z')|| (char1 >= 'A' && char1 <= 'Z')) console.log(`"${char1}" is a letter`); 
else if (char1 >= '0' && char1 <= '9') console.log(`"${char1}" is a digit`); 
else if (char1 === " ") console.log(`${char1} is a whitespace`); 
else console.log(`${char1} is a special character`); 


/*
Task04

Write a function named hasBlue() which takes a string argument
and returns true if the string has an occurrence of blue word,
returns false otherwise.
NOTE: Ignore upper/lower cases.

Examples:
hasBlue("Hello World")    -> false
hasBlue("Javabluescript")    -> true
hasBlue("Tech Blue Global")    -> true
hasBlue("1234")    -> false
hasBlue("ABLUEC")    -> true
*/

const hasBlue = (string) => string.toLowerCase().includes("blue"); 
console.log(hasBlue('Hello Word')); 
console.log(hasBlue('Tech Blue Global')); 


/*
Task05

Write a function named startT() which takes a string argument 
and returns true if the string start with letter T, returns false 
otherwise.
NOTE: Ignore upper/lower cases.

Examples:
startT("Hello World")    -> false
startT("typescript")     -> true
startT("TechGlobal")     -> true
startT("1234")           -> false
startT("ABC")            -> false
*/
const startT = word => {
    return word.toLowerCase().startsWith('')
}
/*
const startT = word => {
    return word.toLowerCase().startsWith('t') || word.startsWith('T'); 

OR 

REGEX: 
const startT = word => {
   return /^[t]/i.test(word) 
    }
*/