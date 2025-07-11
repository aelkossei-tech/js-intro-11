/*
Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and returns a new
string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.

NOTE: Ignore extra spaces before and after the string.

Examples:
replaceFirstLast("")            -> ""
replaceFirstLast("Hello")       -> "oellH"
replaceFirstLast("Tech Global") -> "lech GlobaT"
replaceFirstLast("A")           -> ""
replaceFirstLast(" A ")         -> ""
*/
const replaceFirstLast = string => string.length > 2 ? string.slice(-1) + string.slice(1, -1) + string.slice(0, 1) : ''; 
console.log(replaceFirstLast('Tech Global')); 


/*
Swap First and Last Words
Write a function named swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked. 

NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World")             	-> "World Hello"
swapFirstLastWord("I like JavaScript")      	-> "JavaScript like I"
swapFirstLastWord("foo bar foo bar")        	-> "bar bar foo foo"
swapFirstLastWord("")                           -> ""
swapFirstLastWord("  ")                         -> ""
swapFirstLastWord("Hello")                      -> ""
swapFirstLastWord("Hello   ")                   -> ""
*/
const swapFirstLastWord = string => {
    let words = string.trim().split(/\s+/); 

    [words[0], words[words.length - 1]] = [words[words.length - 1], words[0]]; 

    return words.join(' '); 
}
console.log(swapFirstLastWord("I like JavaScript")); 


/*
Factorial
Write a function named as factorial() which takes a number as an argument 
and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.

Examples:
factorial(5) -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/
const factorial = number => {
    let product = 1; 
    for(let i = number; i >= 1; i--) {
        product *= i; 
    }
    return product; 
}
console.log(factorial(5)); 


/*
Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked.

Examples:
removeExtraSpaces("Hello")                                      -> "Hello"
removeExtraSpaces("        	Hello    World ")                 	-> "Hello World"
removeExtraSpaces("        	JavaScript is           	fun")   -> "JavaScript is fun”
removeExtraSpaces("")                                           -> "" 
*/
const removeExtraSpaces = string => string.trim().split(/\s+/).join(' '); 
console.log(removeExtraSpaces('        	JavaScript is           	fun')); 

const removeExtraSpaces1 = string => string.trim().split(' ').filter(word => word).map(word => word.trim()).join(' '); 
console.log(removeExtraSpaces1('        	JavaScript is           	fun')); 


/*
First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument 
and returns the first duplicated number in the array when invoked. 

NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be the same.

firstDuplicate([ 3, 7, 10, 0, 3, 10 ])              	-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])                	-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])                     -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])  	    -> 'abc'
firstDuplicate([ 1, 2, 3])                              -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar' ])      	-> -1
*/
const firstDuplicate = array => {
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++){ 
            if(array[i] === array[j]) return array[i]; 
        }
    }
    return -1; 
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])); 


/*
Find All Duplicate Elements
Write a function named as getDuplicates() which takes an array argument 
and returns all the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are no
duplicates in the array. For two elements to be considered as duplicated, value and data types
of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])                -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])                                 -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])  -> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])                  -> [ ]
*/
const getDuplicates = array => {
    let seen = new Set(); 
    let duplicates = new Set(); 

    for(const ele of array) {
        if(seen.has(ele)) duplicates.add(ele); 
        else seen.add(ele); 
    }
    return [...duplicates]; 
}
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])); 


/*
Reverse String Words
Write a function named as reverseStringWords() which takes a string as an argument 
and returns the string back with each word separately reversed when invoked. 

NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World")            	-> "olleH dlroW"
reverseStringWords("I like JavaScript")     	-> "I ekil tpircSavaJ"
reverseStringWords("Hello")                     -> "olleH"
reverseStringWords("")                          -> ""
reverseStringWords(" ")                         -> ""
*/
const reverseStringWords = string => string.split(' ').map(ele => ele.split('').reverse().join('')).join(' '); 
console.log(reverseStringWords("I like JavaScript")); 


/*
Add Two Arrays
Write a function named add() which takes two array of numbers as arguments 
and returns a new array with the sum of given array elements. 

NOTE: Be careful about the array sizes as they could be different.

Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2])                         -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])      	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]
add([-5, 6, -3, 11], [5, -6, 3, -11])                       -> [0, 0, 0, 0]
*/
const add = (arr1, arr2) => {
    let finalArr = []; 
    let maxArr = Math.max(arr1.length, arr2.length); 
    for(let i = 0; i < maxArr; i++) {
        let sum = (arr1[i] || 0) + (arr2[i] || 0); 
        finalArr.push(sum); 
    }
    return finalArr; 
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); 


/*
Fizz Buzz
Write a function named fizzBuzz() which takes a number argument 
and returns an array consisting of numbers starting from 1 to the given number. 
However, it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.

Examples:
fizzBuzz(3)  	-> [ 1, 2, 'Fizz' ]
fizzBuzz(5)  	-> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz(10)	-> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ]
fizzBuzz(15)	-> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14,  'FizzBuzz' ]
fizzBuzz(2)  	-> [ 1, 2 ]
*/
const fizzBuzz = number => {
    let finalArr = []; 
    for(let i = 1; i <= number; i++) {
        if(i % 5 === 0 && i % 3 === 0) finalArr.push('FizzBuzz');
        else if (i % 5 === 0) finalArr.push('Buzz');
        else if (i % 3 === 0) finalArr.push('Fizz');
        else finalArr.push(i); 
    }
    return finalArr; 
}
console.log(fizzBuzz(5)); 


/*
Palindrome
Write a function named isPalindrome() which takes a string word as an argument 
and returns true if the word is palindrome or returns false otherwise when invoked. 

NOTE: Palindrome: It is a word that is read the same backward as forward 

Examples: kayak, civic, madam 
NOTE: your function should ignore case sensitivity

Examples:
isPalindrome("Hello")   	-> false
isPalindrome("Kayak")   	-> true
isPalindrome("civic")   	-> true
isPalindrome("abba")   		-> true
isPalindrome("ab  a")   	-> false
isPalindrome("123454321")   -> true
isPalindrome("A")   		-> true
isPalindrome("")   			-> true
*/
const isPalindrome = string => {
    let word = string.toLowerCase(); 
    let reversedWord = word.split('').reverse().join(''); 

    return reversedWord === word; 
}
console.log(isPalindrome('Kayak'));
console.log(isPalindrome('Hello'));


/*
Remove Duplicates
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.

Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])           	-> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3])                               -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])                       	-> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) 	-> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])                     -> ["1", "2", "3"]
*/
const removeDuplicates = array => [...new Set(array)]; 
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); 

const removeDuplicates1 = array => {
    let seenArr = []; 
    for(let i = 0; i < array.length; i++) {
        if(!seenArr.includes(array[i])) seenArr.push(array[i]); 
    }
    return seenArr; 
}
console.log(removeDuplicates1([10, 20, 35, 20, 35, 60, 70, 60])); 


/*
Prime Number
Write a function named as isPrime() which takes a number as an argument and 
returns true if the number is prime or returns false otherwise when invoked. 

NOTE: Mathematically, the Prime number is a number that can be divided only by itself and 1. 
It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number. 

Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31… 

NOTE: The smallest prime number is 2 and there are no negative prime numbers.

Examples:
isPrime(5)   -> true
isPrime(2)   -> true
isPrime(29)  -> true
isPrime(-5)  -> false
isPrime(0)   -> false
isPrime(1)   -> false
*/
const isPrime = number => {
    if(number < 2) return false; 
    if(number === 2 || number === 3) return true; 
    
    for(let i = 3; i * i <= number; i += 2) {
        if(number === i) return false; 
    }
    return true; 
}
console.log(isPrime(0));
console.log(isPrime(5));


/*
Array Factorial
Write a function named arrFactorial() which takes an array of numbers as argument 
and return the array with every number replaced with their factorials.

Examples:
arrFactorial([1, 2, 3 ,4])       	-> [1, 2, 6, 24]
arrFactorial([0, 5])               	-> [1,120]
arrFactorial([5 , 0, 6])          	-> [120, 1, 720]
arrFactorial([])                    -> []
*/
const arrFactorial = array => {
    const factorial = number => {
        let product = 1; 
        for(let i = number; i >= 1; i--) {
            product *= i; 
        }
        return product; 
    }
    return array.map(ele => factorial(ele)); 
}
console.log(arrFactorial([1, 2, 3 ,4])); 


/*
Find Biggest Number
Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number that appears in the string.

Examples:
findBiggestNumber("abc$")	        	    -> 0
findBiggestNumber("a1b4c 6#")    	        -> 6
findBiggestNumber("ab110c045d")	        	-> 110
findBiggestNumber("525")  	        	    -> 525
findBiggestNumber("3for 10 dollars")        -> 10
*/
const findBiggestNumber = string => {
    let numbers = string.match(/\d+/g); 
    return numbers ? numbers.map(Number).reduce((accum, ele) => ele > accum ? ele : accum, 0) : 0; 
}
console.log(findBiggestNumber("ab110c045d")); 


/*
Find Sum Numbers
Requirement:
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.

Examples:
findSumNumbers("abc$")              -> 0
findSumNumbers("a1b4c  6#")         -> 11
findSumNumbers("ab110c045d")        -> 155
findSumNumbers("525")               -> 525
findSumNumbers("3 for 10 dollars")  -> 13
*/
const findSumNumbers = string => {
    let numbers = string.match(/\d+/g); 
    return numbers ? numbers.map(Number).reduce((accum, ele) => ele + accum, 0) : 0; 
}
console.log(findSumNumbers("ab110c045d")); 


/*
Is Power of 3 
Write a function named isPowerOf3() which takes a number argument 
and returns true if the given number is equal to 3 power of the X. 

Otherwise, return false. 

NOTE: Numbers that are powers of 3 = 1, 3, 9, 27, 81, 243…. 
NOTE: Ignore negative scenarios.

Examples:
isPowerOf3(1)        	-> true
isPowerOf3(2)        	-> false
isPowerOf3(3)        	-> true
isPowerOf3(27)      	-> true
isPowerOf3(100)    	    -> false
isPowerOf3(81)      	-> true
isPowerOf3(9)        	-> true
*/
const isPowerOf3 = number => {
    if(number === 1) return true; 
    for(let i = 3; i <= number; i *= 3) {
        if(number === i) return true; 
    }
    return false; 
}
console.log(isPowerOf3(3));
console.log(isPowerOf3(2));


/*
Fibonacci Series 1
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array. 

REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21

Examples:
fibonacciSeries1(3) 	        	-> [0, 1, 1]
fibonacciSeries1(5) 	        	-> [0, 1, 1, 2, 3]
fibonacciSeries1(7) 	        	-> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8) 	        	-> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1) 	        	-> [0]
fibonacciSeries1(2) 	        	-> [0, 1]
*/
const fibonacciSeries1 = number => {
    let finalArr = [0, 1]; 
    if(number === 1) return [0]; 

    for(let i = 2; i < number; i++) { 
        finalArr.push(finalArr[i - 1] + finalArr[i - 2]); 
    }
    return finalArr; 
}
console.log(fibonacciSeries1(5)); 


/*
Fibonacci Series 2
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci numbers as a number. 

REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21

Examples:
fibonacciSeries2(2) 	    -> 1
fibonacciSeries2(4) 	    -> 2
fibonacciSeries2(8) 	    -> 13
fibonacciSeries2(9) 	    -> 21
fibonacciSeries2(1) 	    -> 0
*/
const fibonacciSeries2 = number => {
    let finalArr = [0, 1]; 
    for(let i = 2; i < number; i++) {
        finalArr.push(finalArr[i - 1] + finalArr[i - 2]); 
    }
    return finalArr[number - 1]; 
}
console.log(fibonacciSeries2(9)); 


/*
Find Uniques
Write a function named findUniques() which takes two array of number arguments 
and returns the array which has only the unique values from both given arrays. 

NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other array.

Examples:
findUniques([], [])    	        	        -> []
findUniques([], [1, 2, 3, 2])  	        	-> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5])	    -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9])	        	-> []
findUniques([-1, -2], [1, 2]) 	        	-> [-1, -2, 1, 2]
*/
const findUniques = (arr1, arr2) => {
    let concatArr = arr1.concat(arr2); 
    let filtereddArr = concatArr.filter(num => !(arr1.includes(num) && arr2.includes(num))); 
    let set = new Set(filtereddArr); 

    return [...set]; 
}
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); 


/*
Reverse Number
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String. 

NOTE: Do not convert numbers to string to complete the task.

Examples:
reverseNumber(371)		-> 173
reverseNumber(123)		-> 321
reverseNumber(12) 		-> 21
reverseNumber(0)		-> 0
reverseNumber(111) 		-> 111
*/
const reverseNumber = number => {
    let result = 0; 
    for(let i = number; i > 0; i = Math.floor(i / 10)) {
        result = (result * 10) + (i % 10); 
    }
    return result;
}
console.log(reverseNumber(371)); 


/*
Is Armstrong
Write a function named isArmstrong() which takes a number argument 
and returns true if given number is armstrong, return false otherwise.

NOTE: An armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits. 
In other words, an n-digit number is an Armstrong number if the sum of its digits, each raised to the nth power, is equal to the number itself.

Let's take an example to understand it better. Consider the number 153.
To determine if 153 is an armstrong number, we need to check if the sum of its digits, each raised to the power of the number of digits, 
equals the original number.

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

In this case, the sum of the individual digits raised to the power of 3 (the number of digits in 153) is equal to the original number, 
which means 153 is an armstrong number.

Examples:
isArmstrong(153) 	-> true
isArmstrong(123)	-> false
isArmstrong(1634)	-> true
isArmstrong(153) 	-> true
isArmstrong(1111) 	-> false
*/
const isArmstrong = number => {
    let numStrLength = number.toString().length; 
    let digits = number.toString().split('').map(Number); 
    let sum = 0; 

    for(let i = 0; i < numStrLength; i++) {
        sum += Math.pow(digits[i], numStrLength); 
    }

    return number === sum; 
}
console.log(isArmstrong(153));


/*
Is Anagram
Write a function named isAnagram() which takes two string arguments 
and returns true if the given strings are anagram. Return false otherwise. 

NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase. 

In the context of strings, checking if two strings are anagrams of each other means verifying 
if they contain the same characters in the same quantities, regardless of the order of those characters. 

NOTE: This method is case-insensitive and ignore the white spaces.

Examples:
isAnagram("Apple", "Peach")				-> false
isAnagram("listen", "silent")			-> true
isAnagram("astronomer", "moon starer")  -> true
isAnagram("CINEMA", "iceman")			-> true
isAnagram("123", "1234")				-> false
*/
const isAnagram = (str1, str2) => {
    let modifiedStr1 = str1.toLowerCase().replaceAll(' ', '').split('').sort().join(''); 
    let modifiedStr2 = str2.toLowerCase().replaceAll(' ', '').split('').sort().join(''); 

    return modifiedStr1 === modifiedStr2; 
}
console.log(isAnagram("Apple", "Peach")); 
console.log(isAnagram("astronomer", "moon starer")); 

const isAnagram1 = (str1, str2) => {
    let modifiedStr1 = str1.toLowerCase().split(/\s+/).sort().join('');
    let modifiedStr2 = str2.toLowerCase().split(/\s+/).sort().join('');

    return modifiedStr1 === modifiedStr2; 
}
console.log(isAnagram1("Apple", "Peach")); 
console.log(isAnagram1("astronomer", "moon starer")); 


/*
Count Palindrome
Write a function named countPalindrome() which takes a string 
and returns the number of palindrome words. 

Note: A palindrome word is a word that reads the same forwards and backwards.

Example: level, radar, deed, refer.

Examples:
countPalindrome("Mom and Dad")								-> 2
countPalindrome("See you at noon")							-> 1
countPalindrome("Kayak races attracts racecar drivers")		-> 2
countPalindrome("")											-> 0
countPalindrome("No palindrome here")						-> 0
*/
const countPalindrome = string => {
    const palindrome = string => {
        let word = string.toLowerCase(); 
        let reversedWord = word.split('').reverse().join(''); 

        return reversedWord === word; 
    }
    return string.split(' ').reduce((accum, ele) => palindrome(ele) ? accum + 1 : accum, 0); 
}
console.log(countPalindrome("Mom and Dad")); 


/*
Count Occurrence
Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string. 

NOTE: This method is case-insensitive and ignore the white spaces.

Examples:
countOccurrence("Javascript", "Java")		-> 1
countOccurrence("Hello", "World")			-> 0
countOccurrence("Can I can a can", "anc")	-> 3
countOccurrence("Hello", "l")				-> 2
countOccurrence("IT conversations", "IT")	-> 2
*/ 
const countOccurrence = (str1, str2) => {
    let arrOfOccurrences = []; 

    for(const char of str2) {
        arrOfOccurrences.push(str1.split('').filter(ele => ele.toLowerCase() === char.toLowerCase()).length); 
    }
    return arrOfOccurrences.sort()[0]
}