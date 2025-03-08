console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive​ when invoked. 

Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
*/
const countPos = array => array.reduce((accum, curr) => curr > 0 ? accum + 1 : accum, 0); 
console.log(countPos([-45, 0, 0, 34, 5, 67])); 
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); 
console.log(countPos([0, -1, -2, -3])); 


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named countA() which takes a string argument and 
returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	    -> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 	                        -> 0 
*/
const countA = string => {
    let counter = 0; 

    for(let i = 0; i < string.length; i++){
        if(string[i].toLowerCase().includes('a')) counter++;
    }
    return counter; 
}
console.log(countA("TechGlobal is a QA bootcamp")); 
console.log(countA("QA stands for Quality Assurance")); 
console.log(countA("Cypress")); 


console.log('\n ---------TASK03----------\n');
/*
Requirement: 
Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i

Examples:
countVowels("Hello") 		            -> 2
countVowels("Hello World") 		        -> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 		             	-> 0
*/
const countVowels = string => {
    let count = 0; 
    let vowels = 'AEIOUaeiou';
    for(let i = 0; i < string.length; i++){
        if(vowels.includes(string[i])) count++
    }
    return count; 
}
console.log(countVowels('Hello'));
console.log(countVowels('Hello World'));
console.log(countVowels('JavaScript is fun'));
console.log(countVowels(''));



console.log('\n ---------TASK04----------\n');
/*
Requirement: 
Write a function named as countNonVowels() [countConsonants()] which takes a string word as an argument and 
returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.
NOTE: Count characters that are not vowels, but whitespaces can be included 

Examples:
countConsonants("Hello") 		       -> 3
countConsonants("Hello World") 		   -> 8 
countConsonants("JavaScript is fun")   -> 12
countConsonants("") 			       -> 0
*/
const countConsonants = string => {
    let counter = 0; 
    let vowels = 'AEIOUaeiou'; 
    for(let i = 0; i < string.length; i++){
        if(!vowels.includes(string[i])) counter++;
    }
    return counter; 
}
console.log(countConsonants('Hello')); // 3
console.log(countConsonants('Hello World')); // 8
console.log(countConsonants('JavaScript is fun')); // 12 
console.log(countConsonants('')); // 0 


console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.

Examples:
countWords("     Javascript is fun       ") 		    -> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 
countWords("1 2 3 4") 				                    -> 4
*/
const countWords = string => {
    let words = string.trim().split(/\s+/); // to addres the extra whitespaces before/after the string --> we're using a regex to addres this 
    // AND we're using it within the our split('') to address it in the array
    return words.reduce((accum, curr) => curr[0] ? accum + 1 : accum, 0); // since we have an array --> we can use the reduce method 
}
console.log(countWords("     Javascript is fun       ")); 
console.log(countWords("Cypress is an UI automation tool.    ")); 
console.log(countWords("1 2 3 4")); 


console.log('\n ---------TASK06----------\n');
/*
Requirement:
Write a function named as factorial() which takes a number as an argument 
and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1
*/
const factorial = num => { 
    let product = 1; 
    for(let i = num; i >= 1; i--){ 
        product *= i; 
    }
    return product; 
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));


console.log('\n ---------TASK07----------\n');
/*
Requirement: 
Write a function named as isPalindrome() which takes a string word as an argument 
and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity


Examples:
isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		    -> true
isPalindrome("") 	     	-> true
*/
const isPalindrome = string => {   // SO --> we know that in order to identify if a word is a palindrome or not ==> word has to be equal to reversed word 
    let word = string.toLowerCase();  // we're addressing the diff. cases now by using .toLowerCase() + we're making a variable for word to make it more readable
    let reversedWord = word.split('').reverse().join(''); // we're comparing a reversed word with the original word --> SO, we have to make another variable that contains the reversedWord 
    // split('') --> splitting word characters into array of characters + reverse() --> since it's an array now, we can reverse it  + join('') --> to transform our array back into a string 
    if(word === reversedWord) return true; // Easy part --> comparing the original word with our reversed one 
    return false; 
}

console.log(isPalindrome('Hello')); 
console.log(isPalindrome('Kayak')); 
console.log(isPalindrome('civic')); 
console.log(isPalindrome('abba')); 
console.log(isPalindrome('ab  a')); 
console.log(isPalindrome('123454321')); 
console.log(isPalindrome('A')); 
console.log(isPalindrome('')); 


console.log('\n ---------TASK08----------\n');
/*
Requirement: 
Write a function named as countMultipleWords() which takes an array as an argument 
and returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.

Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					                            -> 0
*/
const countMultipleWords = array => {
    for(const ele of array){
        array.reduce((accum, curr) => curr[ele] ? accum +1 : accum, 0); 
    }
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])); 

console.log('\n ---------TASK09----------\n');
/*
Requirement: 
Write a function named as count3OrLess() which takes a string word as an argument 
and returns the count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") 			        -> 0
count3OrLess("Hi John") 		    	-> 1
count3OrLess("JavaScript is fun") 		-> 2
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 		             	-> 0
*/
const count3OrLess = string => {
    let stringArr = string.split(' '); 
    for(const word of stringArr){
        if(stringArr[word] <= 3) return stringArr.reduce((accum, curr) => curr.length <= 3 ? accum + 1 : accum, 0); 
    }
}
console.log(count3OrLess("Hello")); 
console.log(count3OrLess("Hi John")); 
console.log(count3OrLess("JavaScript is fun")); 
console.log(count3OrLess("Many name is John Doe")); 
console.log(count3OrLess("")); 


console.log('\n ---------TASK10----------\n');
/*
Requirement:
Write a function named as isPrime() which takes a number as an argument
and returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. 
It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.

Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…

NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 	-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false
*/


console.log('\n ---------TASK11----------\n');
/*
Requirement:
Write a function named add() which takes two array of numbers as argument 
and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.

Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		             -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 	             	-> [0, 0, 0, 0]
*/
const add = (arr1, arr2) => {
    arr1
}