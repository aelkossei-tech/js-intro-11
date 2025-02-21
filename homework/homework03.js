const { getRandomNumber} = require('../utils/MathHelper.js'); 
console.log('\n ---------TASK01----------\n');
/*
Requirement:

Write a  program that generates 3 random numbers 
between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is 
greater or equals 50. 
Print false if the average of the random numbers is less 
than 50.

Test data 1:
20, 70, 25

Expected Output 1: 
*/
let randomNum1 = getRandomNumber(1, 100); 
let randomNum2 = getRandomNumber(1, 100); 
let randomNum3 = getRandomNumber(1, 100); 
console.log(randomNum1, randomNum2, randomNum3); 

let randomAvg = ((randomNum1 + randomNum2 + randomNum3)/ 3).toFixed(2); 
console.log(randomAvg >= 50); 

console.log('\n ---------TASK02----------\n');
/*
Requirement:

Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print 
“DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”

Test data 1:
3, 3, 3
Expected Output 1: 
TRIPLE MATCH

Test data 2:
1, 3, 3
Expected Output 2: 
DOUBLE MATCH

Test data 3:
1, 2, 3
Expected Output 3: 
NO MATCH

Test data 4:
1, 1, 2
Expected Output 4: 
DOUBLE MATCH
*/
let randNum1 = getRandomNumber(1,3); 
let randNum2 = getRandomNumber(1,3); 
let randNum3 = getRandomNumber(1,3); 
console.log(randNum1, randNum2, randNum3); 

if (randNum1 !== randNum2 && randNum2 !== randNum3 && randNum1 !== randNum3) {
    console.log('NO MATCH'); 
}
else if (randNum1 === randNum2 || randNum2 === randNum3 || randNum1 === randNum3) {
    console.log('DOUBLE MATCH'); 
}
else {
    console.log('TRIPLE MATCH')
}


console.log('\n ---------TASK03----------\n');
/*
Requirement:

Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked.
NOTE: Assume you will not be given an empty word.

Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true
*/
const hasA = word => {
    return word.includes('A') || word.includes('a'); 
}
console.log(hasA('Tech'));
console.log(hasA('Global'));
console.log(hasA(''));
console.log(hasA('Apple'));

console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled 
if the string length is odd when invoked.

Examples:
doubleOrTripleWord("Tech") 	-> "TechTechTech"
doubleOrTripleWord("Apple") 	-> "AppleApple”
doubleOrTripleWord("") 		-> ""
doubleOrTripleWord(" ") 		-> " "
doubleOrTripleWord("1") 	-> "11"
doubleOrTripleWord("22") 	-> "222222"
*/
const doubleOrTripleWord = word => {
    if (word.length % 2 === 0) return word + word + word; 
    else return word + word; 
}
console.log(doubleOrTripleWord('Tech')); 
console.log(doubleOrTripleWord('Apple')); 
console.log(doubleOrTripleWord('')); 
console.log(doubleOrTripleWord(' ')); 
console.log(doubleOrTripleWord('1')); 
console.log(doubleOrTripleWord('22')); 


console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a function named as firstWord() which takes a string word as an argument and 
returns the first word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstWord("Hello World") 		-> "Hello"
firstWord("I like JavaScript") 	-> "I"
firstWord("Hello") 		        -> "Hello"
firstWord("") 		            -> ""
firstWord("    ") 		        -> ""
*/
const firstWord = word => {
    let wordSpaces = word.split(' '); 
    return wordSpaces[0]; 
}
console.log(firstWord('Hello World'));
console.log(firstWord('I like JavaScript'));
console.log(firstWord('Hello'));
console.log(firstWord(''));
console.log(firstWord('     '));


console.log('\n ---------TASK06----------\n');
/*
Requirement:
Write a function named as lastWord() which takes a string word 
as an argument and returns the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
lastWord("Hello World") 		-> "World"
lastWord("I like JavaScript") 	-> "JavaScript”
lastWord("Hello") 	          	-> "Hello"
lastWord("") 	             	-> ""
lastWord("    ") 		        -> " "
*/
const lastWord = word => {
    let stringSpaces = word.split(' '); 
    return stringSpaces[stringSpaces.length - 1]; 
}
console.log(lastWord('Hello World'));
console.log(lastWord('I like JavaScript')); 
console.log(lastWord('Hello')); 
console.log(lastWord('  ')); 

console.log('\n ---------TASK07----------\n');
/*
Requirement: 
Write a function named as firstlastWord() which takes a 
string word as an argument and returns the first and last words 
from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World") 	    -> "HelloWorld"
firstLastWord("I like JavaScript") 	-> "IJavaScript”
firstLastWord("Hello") 	         	-> "HelloHello"
firstLastWord("") 		            -> ""
firstLastWord("    ") 		        -> ""
*/
const firstLastWord = word => {
    let spaces = word.split(' '); 
    return spaces[0] + spaces[spaces.length - 1]; 
}
console.log(firstLastWord('Hello World')); 
console.log(firstLastWord('I like JavaScript')); 
console.log(firstLastWord('Hello')); 
console.log(firstLastWord('')); 
console.log(firstLastWord('  ')); 


console.log('\n ---------TASK08----------\n');
/*
Requirement:
Write a function named as startVowel() which takes a string word as an argument 
and returns true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello") 	-> false
startVowel("Apple") 	-> true
startVowel("orange") 	-> true
startVowel("") 	-> false
startVowel("    ") 	-> false
startVowel("123") 	-> false

*/
const startsVowel = word => {
    const vowels = 'AEIOUaeiou'; 
    return vowels.includes(word[0]); 
}
console.log(startsVowel('Hello'));
console.log(startsVowel('Apple'));
console.log(startsVowel('orange'));
console.log(startsVowel(''));
console.log(startsVowel('  '));
console.log(startsVowel('123'));


console.log('\n ---------TASK09----------\n');
/*
Requirement: 
Write a function named as swap4() which takes a string word as an argument and 
returns the string back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.

Examples:
swap4("abc") 	        -> ""
swap4("JavaScript") 	-> "riptScJava"
swap4("TechGlobal") 	-> "obalGlTech"
swap4("") 	         	-> ""
swap4("    ") 		    -> ""
swap4("Apple") 	        -> ""
*/
const swap4 = word =>{
    if (word.length < 8) return ""; 
    let first4 = word.slice(0, 4);
    let last4 = word.slice(-4);
    let middle = word.slice(4, -4); 
    return last4 + middle + first4; 
}
console.log(swap4('abc')); 
console.log(swap4('JavaScript')); 
console.log(swap4('TechGlobal')); 
console.log(swap4('')); 


console.log('\n ---------TASK10----------\n');
/*
Requirement: 
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World") 	-> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") 	-> "bar bar foo foo"
swapFirstLastWord("") 		-> ""
swapFirstLastWord("    ") 		-> ""
swapFirstLastWord("Hello") 	-> ""
swapFirstLastWord("Hello   ") 	-> ""
*/
const swapFirstLastWord = string => { 
    if(string.split(' ').length < 2) return ''; 
    let firstWord = string.slice(0, string.indexOf(' ')); 
    let lastWord = string.slice(string.lastIndexOf(' ') + 1); 
    let middleWord = string.slice(string.indexOf(' '), string.lastIndexOf(' ') + 1); 
    return lastWord + middleWord + firstWord; 
}
console.log(swapFirstLastWord('Hello World')); 
console.log(swapFirstLastWord('I like JavaScript')); 
console.log(swapFirstLastWord('foo bar foo bar')); 
console.log(swapFirstLastWord('  ')); 