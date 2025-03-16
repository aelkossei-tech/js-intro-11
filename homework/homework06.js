console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named noSpace() which takes a string as argument 
and returns a new string with all the spaces removed.

Examples:
noSpace("") 			    ->  ""
noSpace("Javascript") 		->  "Javascript"
noSpace("    Hello   ") 	-> "Hello"
noSpace(" Hello World   ") 	-> "HelloWorld”
noSpace("Tech Global") 		-> "TechGlobal"
*/
const noSpace = string => {
    return string.trim().split(/\s+/).join(' '); 
}
console.log(noSpace('')); 
console.log(noSpace('JavaScript')); 
console.log(noSpace('    Hello   ')); 
console.log(noSpace(' Hello World   ')); 
console.log(noSpace('Tech Global')); 


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named replaceFirstLast() which takes a string argument 
and returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.

NOTE: Ignore extra spaces before and after the string.

Examples:
replaceFirstLast("") 		       ->  ""
replaceFirstLast("Hello") 	       ->  "oellH"
replaceFirstLast("Tech Global")    -> "lech GlobaT"
replaceFirstLast("A") 		       -> ""
replaceFirstLast("    A      ")    -> ""
*/

const replaceFirstLast = string => {
    let trimmedStr = string.trim();  
    return trimmedStr.length < 2 ? '' : trimmedStr.slice(-1) + trimmedStr.slice(1, -1) + trimmedStr[0]; 
}
console.log(replaceFirstLast('')); 
console.log(replaceFirstLast('Hello')); 
console.log(replaceFirstLast('Tech Global')); 
console.log(replaceFirstLast('A')); 
console.log(replaceFirstLast('    A      ')); 


console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named hasVowel() which takes a string argument and 
returns true if the string has a vowel, 
returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.

Examples:
hasVowel("") 	       	 -> false
hasVowel("Javascript") 	 -> true
hasVowel("Tech Global")  -> true
hasVowel("1234") 		 -> false
hasVowel("ABC") 		 -> true
*/
const hasVowel = string => {
    let strArr = string.split(''); 
    let vowels = 'AEIOUaeiou'; 
    for(let i = 0; i < strArr.length; i++){
        if(vowels.includes(strArr[i])) return true;
    }
    return false; 
}
console.log(hasVowel('')); 
console.log(hasVowel('JavaScript')); 
console.log(hasVowel('Tech Global')); 
console.log(hasVowel('1234')); 
console.log(hasVowel('ABC')); 
/*
ANOTHER SOLUTION: 
const hasVowel = string => [...string].some(char => 'AEIOUaeiou'.includes(char));
*/


console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named checkAge() which takes a number argument to be considered 
as the yearOfBirth and returns a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"

If the age is 16 or more, then print "AGE IS ALLOWED"

If the age is more than 120 or a future year, print "AGE IS NOT VALID"

NOTE: Consider someone born in 2013 is 10 years old as of 2023.

Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
*/
const checkAge = num => {
    let currentYear = 2023; 
    let age = currentYear - num; 

    if (age > 120 || num > currentYear) return 'AGE IS NOT VALID'; 
    else if(age < 16) return 'AGE IS NOT ALLOWED'; 
    return 'AGE IS ALLOWED'
    
}
console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));


console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a function named averageOfEdges() which takes three number arguments 
and will return average of min and max numbers​.

Examples:
averageOfEdges(0, 0, 0) 		-> 0
averageOfEdges(0, 0, 6) 		-> 3
averageOfEdges(-2, -2, 10)  	-> 4
averageOfEdges(-3, 15, -3) 	    -> 6
averageOfEdges(10, 13, 20)  	-> 15
*/
const averageOfEdges = (num1, num2, num3) =>  ((Math.max(num1, num2, num3)) + Math.min(num1, num2, num3)) / 2; 

console.log(averageOfEdges(0, 0, 0)); 
console.log(averageOfEdges(0, 0, 6)); 
console.log(averageOfEdges(-2, -2, 10)); 
console.log(averageOfEdges(-3, 15, -3)); 
console.log(averageOfEdges(10, 13, 20)); 


console.log('\n ---------TASK06----------\n');
/*
Requirement:
Write a function named noA() which takes an array of strings as argument 
and will return a new array with all elements starting with "A" or "a" replaced with "###".

Examples:
noA(["javascript", "hello", "123", "xyz"]) 	->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) 	->  ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) 	-> ["###", "###", "###", "###", "###"]
*/
const noA = array => {
    let newArr = []; 
    for(let i = 0; i < array.length; i++){
      if(array[i].startsWith('a') || array[i].startsWith('A')) newArr.push('###'); 
      else newArr.push(array[i]); 
    }
    return newArr
}
console.log(noA(["javascript", "hello", "123", "xyz"])); 
console.log(noA(["apple", "123", "ABC", "javascript"])); 
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])); 
/*
Another method to solve this --> map() method [because you're returning the same size of the array]

const noA = array => array.map(ele => ele.startsWith('A') || else.startsWith('a') ? '###' : ele); 
*/

console.log('\n ---------TASK07----------\n');
/*
Requirement:
Write a function named no3and5() which takes an array of integer numbers as argument 
and will return a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99​

If element can be divided by 3, replace it with 100​

If element can be divided by both 3 and 5, replace it with 101

Examples:
no3and5([7, 4, 11, 23, 17])      	-> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6]) 		        -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) 	-> [99, 11, 100, 13, 14, 101]
*/
const no3and5 = array => { // COME BACK HERE 
    let newArr = []; 
    for(let i = 0; i < array.length; i++){
        if(array[i] % 3 == 0 && array[i] % 5 === 0) newArr.push(101); 
        else if(array[i] % 5 === 0)  newArr.push(99); 
        else if(array[i] % 3 === 0)  newArr.push(100); 
        else newArr.push(array[i]); 
    }
    return newArr; 
}
console.log(no3and5([7, 4, 11, 23, 17])); 
console.log(no3and5([3, 4, 5, 6])); 
console.log(no3and5([10, 11, 12, 13, 14, 15])); 
/*
Another way to solve this --> map() method

const no3and5 = array => array.map(ele => 
ele % 3 === 0 && ele % 5 === 0  ? 101 : 
ele % 5 === 0 ? 99 : 
ele % 3 === 0 ? 100 : 
ele 
)
*/


console.log('\n ---------TASK08----------\n');
/*
Requirement:
Write a function named countPrimes() which takes an array of integer numbers as argument 
and will return the number of the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.

NOTE: Negative numbers cannot be prime​.

Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​

NOTE: Smallest prime number is 2.

Examples:
countPrimes([-10, -3, 0, 1]) 	    -> 0
countPrimes([7, 4, 11, 23, 17]) 	-> 4
countPrimes([41, 53, 19, 47, 67]) 	-> 5
*/
// What we need to do: 1.) find a way to loop through our array 
// 2.) Check if our current element is --> divisible by itself AND not any other number 
// 3.) Count those instances --> could either use for loop OR reduce() in this case 
const countPrimes = array => { // COME BACK HERE 
    let count = 0; 
    for(let i = 0; i < array.length; i++) {
        if(i < 1 && i % 2 === 0) count; 
        if(array[i] % i === 0) count; 
        else count++; 
    }
    return count; 
}
console.log(countPrimes([-10, -3, 0, 1])); 
console.log(countPrimes([7, 4, 11, 23, 17])); 
console.log(countPrimes([41, 53, 19, 47, 67])); 


console.log('\n ---------TASK09----------\n');
/*
Requirement:
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.

Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) 	         	-> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) 		                       	-> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) 		                 	-> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) 	-> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) 	              	-> ["1", "2", "3"]
*/

// Either could use for loop OR filter method 
const removeDuplicates = array => {
    let seenArr = []; // this is where our non-duplicates will be pushed into 
    
    for(let i = 0; i < array.length; i++) {  // we're looping through each element in the array 
        if(!seenArr.includes(array[i])) seenArr.push(array[i]); // if our seenArray DOES NOT have a duplicate element --> we get to push our element into our seenArray    
    }
    return seenArr; // returns the array that has NO duplicated elements 
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); 
console.log(removeDuplicates([1, 2, 5, 2, 3])); 
console.log(removeDuplicates([0, -1, -2, -2, -1])); 
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); 
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); 

/*
using filter() method: [more concise]

array.filter((callbackFunction(element, index?, array?))) --> SO filter method obviously takes a callback function that we usuaully use an element in 
BUT --> there are other optional parameters we can use ==> INDEX [index of the current element] + ARR [can return the filtered array]

const removeDuplicates = array => array.filter((item, index) => array.indexOf(item) === index); 
*/

/*
using Set() method: [more concise and just easier]
    - stores unique collection of items  --> NO DUPLICATES ALLOWED 
    - converting an array --> Set 
    - could be used to remove duplicates from an array 

const removeDuplicates = array => [... new Set(array)]

*/

console.log('\n ---------TASK10----------\n');
/*
Requirement: 
Write a method named isDateFormatValid() that takes a string as an argument 
and returns true if the given date is valid or returns false otherwise.

Expected Format: nn/nn/nnnn
So, it must be presented as <2digits> / <2digits> / <4digits>

Examples:
isDateFormatValid("") 			        -> false
isDateFormatValid("15/30/2020") 		-> false
isDateFormatValid("10-30-2020 ") 		-> false
isDateFormatValid("10.30.2020") 		-> false
isDateFormatValid("5/30/2020") 		    -> false
isDateFormatValid("05/30/2020 ") 		-> true
isDateFormatValid("10/2/2020") 		    -> false
isDateFormatValid("10/02/2020 ") 		-> true
*/
const isDateFormatValid = string => {
    let strArr = string.trim().split('/'); 

    let before1stDash = strArr[0]; 
    let middleDash = strArr[1]; 
    let lastDash = strArr[2];

    if(before1stDash.length !== 2) return false; 
    if(middleDash.length !== 2) return false; 
    if(lastDash.length !== 4) return false;
    return true; 
}
console.log(isDateFormatValid('')); // false 
console.log(isDateFormatValid("15/30/2020")); //true --> try to fix this one
console.log(isDateFormatValid("10-30-2020")); // false
console.log(isDateFormatValid("10.30.2020")); // false
console.log(isDateFormatValid("5/30/2020")); // false
console.log(isDateFormatValid("05/30/2020")); // true 
console.log(isDateFormatValid("10/2/2020")); // false 
console.log(isDateFormatValid("10/02/2020")); //true 


console.log('\n ---------TASK11----------\n');
/*
Requirement: 
Write a method named secondMax() takes an array argument 
and returns the second max number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.

Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])    -> 7
secondMax([3, 4, 5, 6]) 		       -> 5
secondMax([10]) 		               -> 10
*/

// What we're trying to do: 1.) Loop through our array [either using filter(), reduce(), or for loop] 2.) Find the max 3.) Find the second max 
// SO, we know how to find the Max [Math.max()] --> but HOW do we 
const secondMax = array => {
    let max = Math.max(...array); 
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); 
console.log(secondMax([3, 4, 5, 6])); 
console.log(secondMax([10])); 