console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and
return true if there is an uppercase letter and false otherwise.

Examples:
hasUpperCase("javascript") 	-> false
hasUpperCase("John") 		-> true
hasUpperCase("$125.0") 	    -> false
hasUpperCase("") 		    -> false
*/

const hasUpperCase = string => /[A-Z]/.test(string); 

console.log(hasUpperCase("javascript")); 
console.log(hasUpperCase("John")); 
console.log(hasUpperCase("$125.0")); 
console.log(hasUpperCase("")); 
/*
Solution W/O RegEx: 

const hasUpperCase = string => {
    for(let i = 0; i < string.length; i++) {
        if(string[i] >= 'A' && string[i] <= 'Z') return true; 
    }
    return false; 
 }
 console.log(hasUpperCase("javascript")); 
 console.log(hasUpperCase("John")); 
 console.log(hasUpperCase("$125.0")); 
 console.log(hasUpperCase("")); 
*/


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named noDigit() which takes a string argument and 
returns a new string with all digits removed from the original string​.

Examples:
noDigit("") 			           -> ""
noDigit("Javascript") 	           -> "Javascript"
noDigit("123Hello") 		       -> "Hello"
noDigit("123Hello World149") 	   -> "Hello World”
noDigit("123Tech456Global149") 	   -> "TechGlobal"
*/
/*
What we need to do: 
1.) Obviously we need to loop through the string 
2.) Figure out a way to FILTER out the numbers from the string itself 
    --> maybe convert the string to an array and use filter() to take away numbers 
*/
const noDigit = string => {
    let strArr = string.split(''); 
    return strArr.filter(ele => /[A-Za-z]/.test(ele)).join(''); 
}
console.log(noDigit('')); 
console.log(noDigit('Javacript'));  
console.log(noDigit('123Hello')); 
console.log(noDigit('123Hello World149')); 
console.log(noDigit("123Tech456Global149")); 

// char => (char < 'a' && char > 'z') && (char => char < 'A' && char > 'Z')

console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named noVowel() which takes a string argument 
and returns a new string with all vowels removed from the original string​.

Examples:
noVowel("TechGlobal") 	 -> "TchGlbl"
noVowel("AEOxyz") 	     -> "xyz"
noVowel("Javascript") 	 -> "Jvscrpt"
noVowel("") 	         -> ""
noVowel("125$") 	     -> "125$"
*/
const noVowel = string => {
    let strArr = string.split('');
    let vowels = 'AEIOUaeiou'; 
    return strArr.filter(ele => !vowels.includes(ele)).join(''); 
}
console.log(noVowel('TechGlobal')); 
console.log(noVowel('AEOxyz')); 
console.log(noVowel('Javascript')); 
console.log(noVowel('')); 
console.log(noVowel('125$')); 


console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s. ​

Examples:
no13([1, 2, 3 ,4]) 		        -> [1, 2, 3 ,4] 
no13([13, 2, 3]) 		        -> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) 	-> [0, 0, 0, 0, 0]
no13([]) 	                    -> []
*/
const no13 = array => {
    let finalArr = []; 
    
    for(const ele of array) {
        if(ele === 13) finalArr.push(0); 
        else finalArr.push(ele); 
    }

    return finalArr; 
}
console.log(no13([1, 2, 3, 4])); 
console.log(no13([13, 2, 3])); 
console.log(no13([13, 13, 13 , 13, 13])); 
console.log(no13([])); 


console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a function named middleInt() which takes three number arguments 
and return the middle number. ​

Examples:
middleInt(1, 2, 2) 	-> 2
middleInt(5, 5, 8) 	-> 5
middleInt(5, 3, 5) 	-> 5
middleInt(1, 1, 1) 	-> 1
middleInt(-1, 25, 10) 	-> 10
*/
/*
What we need to do: 
1.) Figure out what is the min and max of those three numbers
2.) Figure out a way to write this condition: If one of our numbers is neither the max nor the min --> it's our middle 
*/
const middleInt = (num1, num2, num3) => {
    return [num1, num2, num3].sort((a, b) => a-b)[1]; // made our numbers into an array, so that we can sort() them in asceding order 
    // since we knows it's alway going to be 3 numbers in our parameter, it's safe to say that our middle integer in our sorted array will be the MIDDLE [1]
}
console.log(middleInt(1, 2, 2)); 
console.log(middleInt(5, 5, 8)); 
console.log(middleInt(5, 3, 5)); 
console.log(middleInt(1, 1, 1)); 


console.log('\n ---------TASK06----------\n');
/*
Requirement:
Write a function named sumOfDigits() which takes a string argument 
and returns sum of all digits from the original string. ​

Examples:
sumOfDigits("Javascript") 	        -> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		        -> 8
sumOfDigits("") 		            -> 0
*/
/*
What we need to do: 
1.) we're looping through our string 
2.) if we detect a digit in the string --> we can somehow extract it/store it into an empty object
3.) once we're done looping through string/array --> we look at our numbers in our new array and return its sums 
*/
const sumOfDigits = string => {
    let strArr = string.split(''); 
    let finalArr = []; 

    for(const ele of strArr) {
        if(ele >= '0' && ele <= '9') finalArr.push(Number(ele));
    }
    return finalArr.reduce((accum, ele) => ele + accum, 0); 
}
console.log(sumOfDigits('Javascript')); 
console.log(sumOfDigits(`John's age is 29`)); 
console.log(sumOfDigits('$125.0')); 
console.log(sumOfDigits('')); 


console.log('\n ---------TASK07----------\n');
/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as argument 
and return the array with every number replaced with their factorials.

Examples:
arrFactorial([1, 2, 3 ,4]) 		  -> [1, 2, 6, 24]
arrFactorial([0, 5]) 		      -> [1,120]
arrFactorial([5 , 0, 6]) 	      -> [120, 1, 720]
arrFactorial([]) 		          -> []
*/
/*
What we need to do: 
1.) Obviously loop through our array 
2.) Look at each element --> figure out how to implement the factorial equation  
    - maybe even using .map() within the return statement (since we're returning the same-sized array)
*/
const arrFactorial = array => {

}
console.log(arrFactorial([1, 2, 3 ,4])); 
console.log(arrFactorial([0, 5])); 
console.log(arrFactorial([5, 0, 6])); 
console.log(arrFactorial([])); 

//return array.map(ele => ele); // reduce((accum, ele) => accum * ele, 1).


console.log('\n ---------TASK08----------\n');
/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as argument 
and return an array as:
1.) letters at index of 0, 
2.) digits at index of 1  
3.) specials at index of 2 

Examples:
categorizeCharacters("1234") 	    -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]
*/
const categorizeCharacters = string => {
    let strArr = string.split(''); // created my array --> where each element's characters are seperated 
    let finalArr = ['', '', '']; // now usually, we would have an empty array to push our wanted elements int0
    // HOWEVER in this case --> since we know the set amount of indexes we need to return [0 = letters, 1 = digits, 2 = special characters]

    for(const char of strArr) { // used a for...of loop to loop through the array 
        if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') finalArr[0] += char; // if our char is in the range of a-z or A-Z -->  then add it to the first index of finalArr
        else if(char >= '0' && char <= '9') finalArr[1] += char; // if our char is within the range of 0-9 --> then add it to the finalArr's 2nd index [1]
        else finalArr[2] += char; // if our char is NOT within both of those ranges --> add it to our last index within our final array 
    }
    return finalArr; 
}
console.log(categorizeCharacters('1234')); 
console.log(categorizeCharacters('abc123$#%')); 
console.log(categorizeCharacters('12ab$%3c%')); 
