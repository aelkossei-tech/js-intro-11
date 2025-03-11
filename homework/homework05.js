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
Write a function named as countVowels() which takes a string word as an argument 
and returns the count of the vowel letters when invoked.

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
console.log(countConsonants('Hello World')); // 8 --> includes the spaces 
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
    let words = string.trim().split(/\s+/); // to addres the extra whitespaces before/after the string --> we're using a regex to address this 
    // AND we're using it within split('') to address it in the array
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
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1   --> every time split('') method is used ==> returns an empty space as empty string ==> SO, using trim() + split(/\s+/) will account for the spaces 
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					                            -> 0
*/

// What we need to do: 
// 1.) we're looping through the array elements 
// 2.) we're trying to find a way to have code recognize if an array contains an element that has more than 1 ( eleWord > 1) 
// 3.) we need to ignore the spaces
// 4.) we need to count the instances [reduce() method?]
const countMultipleWords = array => { // SO --> we can see which examples have words + we need to bear in mind the spaces ==> SO, should we trim the spaces first and use a regex
   return array.reduce((accum, ele) => ele.trim().split(/\s+/).length > 1 ? accum + 1 : accum, 0);  // reduce would loop through array and see if the array element iteration's length [after ignoring spaces] > 1 --> add to the counter (accum)
}
console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])); 
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])); 
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])); 
console.log(countMultipleWords([])); 


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

// What we need to do: 1.) loops through the string  2.) count how many words are 3 or less characters 
// --> we COULD either use a for loop OR convert the string to an array and then use reduce()
// IF we're going with string conversion to array method [using split(' ') --> we know our words will be indexed in the array, which means if the array.length <= 3  --> accum++
const count3OrLess = string => {
    let stringArr = string.trim().split(/\s+/); // converting our string --> array, so that we can index our elements 
    return stringArr.reduce((accum, ele) => ele.length <= 3 ? accum + 1 : accum, 0); 
}
console.log(count3OrLess("Hello")); 
console.log(count3OrLess("Hi John")); 
console.log(count3OrLess("JavaScript is fun")); 
console.log(count3OrLess("My name is John Doe")); 
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

// What we need to do: 1.) Understand prime numbers and how to not hard-code them 2.) figure out how to return true/false when given a number 
// If a prime number is a number that can only be divided by itself --> that means dividing by any other number won't produce a whole divible number
//  ==> we need to try to find a way where if the number that's given is able to divide by itself, BUT can't be divided by another number --> return true 
const isPrime = number => {
    if(number <= 1) return false; // with this condition --> trying to exclude: negative numbers + 0 + 1 
    
    for(let i = 2; i < number ; i++){ // according to the info above --> the smallest prime number is 2, so we're starting out for loop from 2
        if(number % i === 0) return false; // with this condition --> if our number we're inputting into our function is divisible by another number --> it's NOT a prime number, so FALSE
    }
    return true; // anything else --> PRIME (true)
}
console.log(isPrime(5)); 
console.log(isPrime(2)); 
console.log(isPrime(29)); 
console.log(isPrime(-5)); 
console.log(isPrime(0)); 
console.log(isPrime(1)); 


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

// What we need to do: 1.) Figure out a way how to add each arrays' elements to one another
//  2.) Figure out what to do when one array is larger/longer than the other 
// 3.) We need to return an array as our result (filter()? & reduce()? OR map()? & reduce()?)
// If the length of arr1 is bigger than arr2 --> we need to find a way to add the known elements and just keep the unadded elements as is 
const add = (arr1, arr2) => {
   let finalArr = []; // we're pushing our sum and whatever is left w/ array into the empty array 
   let maxArr = Math.max(arr1.length, arr2.length); // this is a way for us to figure out in a dynamic sense --> which array length is larger 
   
   for(let i = 0; i < maxArr; i++){ // Since i'm still trying to figure out to use map() + reduce() w/ this problem --> used for loop instead 
      let sum = (arr1[i] || 0) + (arr2[i] || 0); // created a variable that ensures that whichever array is the shorter one, it has the option to push 0 for the overall sum to make sure it doesn't come back undefined/NaN
      finalArr.push(sum); // we push our sum into our final array 
   }
   return finalArr; 
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); 
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); 
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); 


console.log('\n ---------TASK12----------\n');
/*
Requirement: 
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked.

Examples:
removeExtraSpaces("Hello") 		                        -> "Hello" 
removeExtraSpaces("      Hello    World     ") 	        -> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			                        -> "" 
*/
const removeExtraSpaces = string => {
    return string.trim().split(/\s+/).join(' '); 
}
console.log(removeExtraSpaces('Hello')); 
console.log(removeExtraSpaces(removeExtraSpaces("      Hello    World     "))); 
console.log(removeExtraSpaces("     JavaScript is          fun") ); 
console.log(removeExtraSpaces("")); 


console.log('\n ---------TASK13----------\n');
/*
Requirement: 
Write a function named findClosestTo10() which takes an array of numbers as argument 
and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.

NOTE: Ignore the 10 itself.

NOTE: If there are more than one numbers are close equally, return the smaller number.

Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) -> 8
findClosestTo10([0, -1, -2]) 		       -> 0
*/

// What we need to do: 
// 1.) Loop through out array of numbers 
// 2.) Find a way to compare each element [SUBTRACT THE DIFFERENCE of each element in an array to each other] and see which ONE is the closest to 10 (ignoring 10 itself) 
// 3.) Have a possible if statement --> one ele > 2nd ele => return 2nd ele (smaller #)
// filter() method? OR reduce()? 
const findClosestTo10 = array => {
    let closeTo10 = Infinity; // placeholder for the closest number
    let minDiff = Infinity; // placeholder for the minimum diff. 
    
    for(let i = 0; i < array.length; i++){ // we're looping through our array w/ a  for loop
        let currNum = array[i]; 
        
        if(currNum === 10) continue; // if our current number is equal to 10 --> we're going to "ignore" it by using continue --> moving onto the next statement 

        let diff = Math.abs(currNum - 10); // in order to compare our minDiff and the diff. --> we need to first see our CURRENT difference ->  currentNum and 10 [everything is in reference to 10], within Math.abs() to ensure no negative nums 

        if(diff < minDiff) { // if our current difference is LESS than our minDiff(Infinity) --> then we're going to reassign our variables and return that output 
            minDiff = diff; 
            closeTo10 = currNum;
        }

        else if (diff === minDiff) // adddress the condition is both differences are equal to each other --> return the smaller one w/ Math.min()
            return Math.min(diff, currNum); 
    }
    return closeTo10; // we want to return the number closest 
}
console.log(findClosestTo10([10, -13, 5, 70, 15, 57])); 
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])); 
console.log(findClosestTo10([0, -1, -2])); 


console.log('\n ---------TASK14----------\n');
/*
Requirement: 
Write a function named as isEmailValid() which takes a string email as an argument 
and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars> @ <2+chars> . <2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

Examples:
isEmailValid("") 			        -> false
isEmailValid("@gmail.com") 		    -> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 	-> true
*/

// What we need to do: 1.) Check if the email is valid by testing mutliple conditions:
// a.) no spaces  b.) shouldn't have more 1 @ symbol [includes()] 
// c.) email should be given in a format that has at least -->  2 characters + @ + 2 characters  + . + 2 characters 
const isEmailValid = email => {
    if(email.includes(' ')) return false; // this checks if the email we have has a space --> if it does, it returns false; 
    
    let emailParts = email.split('@');  // this is a variable that splits the string/email by the at symbol (@) --> ex: johndoe@gmail.com --> [ 'johndoe', 'gmail.com' ]
    if(emailParts.length !== 2) return false; // this is where we test if the email array has more than 2 @ --> should return false 

    if(emailParts[0].length < 2) return false; // I'm trying to say if the first index's length BEFORE @ symbol is less than 2 --> return false 
    if(emailParts[1].length < 2) return false; 

    let secondHalfEmail = emailParts[1].split('.'); // NOW --> we're doing the same thing above, but we're splitting w/ "."" --> [ 'gmail', 'com' ]
    if(secondHalfEmail.length !== 2) return false; 
    if(secondHalfEmail[0].length < 2) return false; // if the 1st index of this array (so like gmail for example - before the period) is less than 2 --> return false 

    return true; 
}
console.log(isEmailValid('')); 
console.log(isEmailValid('@gmail.com')); 
console.log(isEmailValid('johndoe@yahoo')); 
console.log(isEmailValid('johndoe@.com')); 
console.log(isEmailValid('a@outlook.com')); 
console.log(isEmailValid('johndoe@a.com')); 
console.log(isEmailValid('johndoe@@gmail.com')); 
console.log(isEmailValid('johndoe@gmail.com')); 

/*
Googled geekforgeeks --> this was another method to solve this problem (w/ RegEx): 

const isEmailValid = string => {
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regexEmail.test(string)) return true;  
    return false; 
}
*/ 


console.log('\n ---------TASK15----------\n');
/*
Requirement: 
Write a function named as isPasswordValid() which takes a string email as an argument 
and returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

Examples:
isPasswordValid("") 			        -> false
isPasswordValid("abcd") 			    -> false
isPasswordValid("abcd1234") 		    -> false
isPasswordValid("Abcd1234") 		    -> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 	     	-> true
isPasswordValid("Chicago123$") 	    	-> true
isPasswordValid("Test1234#") 		    -> true
*/
const isPasswordValid = password => {
    if(password.includes(' ')) return false; // if our given password includes a space --> return false
    if(password.length > 16 || password.length < 8) return false; // if our given password is MORE than 16 characters OR LESS than 8 characters --> return false

    // I know there's a more efficient/concise way to solve this task w/ regex, but this is how I used them
    let regexDigit = /[0-9]/; 
    if(!regexDigit.test(password)) return false; // if the password DOES NOT have at least 1 digit --> returns false

    let regexUpperCase = /[A-Z]/; 
    if(!regexUpperCase.test(password)); // if the passowrd DOES NOT have at least 1 uppercase letter --> return false

    let regexLowerCase = /[a-z]/; // if the passowrd DOES NOT have at least 1 lowercase letter --> return false
    if(!regexLowerCase.test(password)); 

    let regexSpecialChar = /[$!#%-+*/]/; // if the passowrd DOES NOT have at least 1 symbol given in the regex --> return false
    if(!regexSpecialChar.test(password)); 

    return true; //  if all conditions are passed --> TRUE 
}

console.log(isPasswordValid('')); 
console.log(isPasswordValid('abcd')); 
console.log(isPasswordValid('abcd1234')); 
console.log(isPasswordValid('Abcd1234')); 
console.log(isPasswordValid('Chicago12345US!#$%')); 
console.log(isPasswordValid('Abcd1234$')); 
console.log(isPasswordValid('Chicago123$')); 
console.log(isPasswordValid('Test1234#')); 