console.log('\n ---------TASK03----------\n');
/*
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
/*
WHat we want: 
1.) loop through our string
2.) find 
*/
const findSumNumbers = string => {
    let sum = 0; 
    let numberContainer = ''; 

    for(let char of str) {
        if(char >= '0' && char <='9') numberContainer += char; 
        else {
            sum += Number(numberContainer)
            numberContainer = ''; 
        }
    }
    return sum; 
}

console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a function named countOccurrencesOfCharacters() which takes a string argument 
and returns the count of repeated characters in the String.​

NOTE: If given String is empty, then return empty String.​

NOTE: It is case sensitive.

Examples:
countOccurrencesOfCharacters("") 		-> ""
countOccurrencesOfCharacters("abc") 	-> "1a1b1c"
countOccurrencesOfCharacters("abbcca") 	-> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa") 	-> "2a2A1a”
countOccurrencesOfCharacters("www" ) 	-> "3w"
*/
const countOccurrencesOfCharacters = str => {
    if(str === '') return ''; 
    let result = ''; 
    let currentChar = str[0]; 
    let currentCharCount = 1; 

    for(let i = 1; i < str.length; i++) {
        if(str[i] === currentChar) currentCharCount += 1; 
        else {
            result += currentCharCount + currentChar; 
            currentChar = str[i]; 
            currentCharCount = 1; 
        }
    }
    result += currentCharCount + currentChar; 
    return result; 
}

console.log('\n ---------TASK06----------\n');
/*
Requirement:
Write a function named fibonacciSeries1() which takes a number "n" argument 
and returns the n series of Fibonacci numbers as an array. ​

REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21

Examples:
fibonacciSeries1(3) 	-> [0, 1, 1]
fibonacciSeries1(5) 	-> [0, 1, 1, 2, 3]
fibonacciSeries1(7) 	-> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8) 	-> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1) 	-> [0]
fibonacciSeries1(2) 	-> [0, 1]
*/

// ** Recursions ***

const fib = n => { // Recursion of fibonacciSeries2
    if (n === 1) return 0; 
    if (n === 2) return 1; 

    return fib(n-1) + fib(n-2); 
}


console.log('\n ---------TASK08----------\n');
/*
Requirement:
Write a function named findUniques() which takes two array of number arguments 
and returns the array which has only the unique values from both given arrays.

NOTE: If both arrays are empty, then return an empty array.​

NOTE: If one of the array is empty, then return unique values from the other array.

Examples:
findUniques([], []) 		                -> []
findUniques([], [1, 2, 3, 2]) 	            -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5]) 	-> [1, 2, 5]
findUniques([8, 9], [9, 8, 9]) 	            -> []
findUniques([-1, -2], [1, 2]) 	            -> [-1, -2, 1, 2]
*/
const findUniques = (arr1, arr2) => {
    let uniques = [];
    let combinedArr = arr1.concat(arr2); 

    for(let num of combinedArr) {
        if(!(arr1.includes(num)&& arr2.includes(num)) && !uniques.includes(num)) uniques.push(num); 
    }
}