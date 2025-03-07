console.log('\n ---------TASK15----------\n');
/*
Requirement:
Write a function named as firstDuplicate() which takes an array argument and
returns the first duplicated number in the array when invoked. --> const firstDuplicate()

NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1
*/
// How would a kid/normal person solve this problem --> like pesudo code 

/*
Nested Loop Solution: 
const firstDuplicate = arr => {
    for(let i = 0; i < arr.length;  i++){ // i = 0
        for(let j = i + 1; j < arr.length; j++){ // j = 1
            if(arr[i] === arr[j]) return arr[i]; 
        }
    }
    return - 1; 
}
*/

// includes method
const firstDuplicate = arr => {
    for(let i = 0; i < arr.length; i++ ){
        if(arr.includes(arr[i] + 1)); 
    }
    return -1; 
}

/*
indexOf method

const firstDuplicate = arr => {
    for(let i = 0; i < arr.length;  i++){ 
    if (!(arr.indexOf(arr[i]) === arr.lastIndex(arr[i])) --> if it's NOT the same as one another --> it's a DUPLICATE
}
*/


console.log('\n ---------TASK16----------\n');
/*
Requirement:
Write a function named as getDuplicates() which takes an array argument and returns all 
the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are 
no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]
*/
const getDuplicates = arr => {
    for(let i = 0; i < arr.length; i++ ){
        let duplicates = []; 
        if(arr.includes(arr[i] + 1) && !duplicates.includes(arr[i])) duplicates.push(arr); 
    }
    return -1; 
}

console.log('\n ---------TASK17----------\n');
/*
Requirement:
Write a function named as reverseStringWords() which takes a string as an argument and returns string back with each word 
separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> ""
*/
const reverseStringWords = str => {
    let words = str.trim().split(' ');  // --> for RegEx = split(/\s+/)
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].split('').reverse()
    }
    return words.join(' '); 
}

/*
Array Function 

const reverseStringWords = str => {
    let words = str.trim().split(' '); 

    words.map((ele => ele.split('').reverse().join('')))
}
*/

/*
WITHOUT REVERSE: 

const reverseStringWords = str => {
    return words.map(word => {
        let reverseWord = ''; 
        for(let i = word.length - 1; i >= 0; i--){
            reversedWord += word[i];        
        }
}
        return reversedWord; 
   }).join(' ')
*/


console.log('\n ---------TASK19----------\n');
/*
Requirement:
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match when invoked.

NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 

Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17)	-> [ 5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ]
*/
const getMultipleOf5 = (num1, num2) => {
    let multiplesof5 = []; 
    if(num1 <= num2){
        for(let i = num1; i <= num2; i++){
            if(i % 5 === 0) multiplesof5.push(i); 
        }
    }
    else {
        for(let i = num1; i >= num2; i--){
            if(i % 5 === 0) multiplesof5.push(i); 
        }
    }
    return multiplesof5; 
}

/*
Bilal's answer for this task: 

const getMultipleOf5 = (num1, num2) => {
    let min = Math.min(num1, num2);
    let max = Math.min(num1, num2); 
    let multiplesof5 = [];

        for(let i = min; i <= max; i++){
            if(i % 5 === 0) multiplesof5.push(i); 
        }
    return num2 > num1 ? multipleof5 : multipleof5.reverse()
}
*/

console.log('\n ---------TASK20----------\n');
/*
Requirement: [BREAK IT DOWN for EVERY STEP]
Write a function named as fizzBuzz() which takes 2 number arguments and 
returns a string composed with below requirements when invoked.

You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each number.

You will need to convert numbers divisible by 3 to 'Fizz'

You will need to convert numbers divisible by 5 to 'Buzz'

You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’

The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz"
*/ 
const fizzBuzz = (num1, num2) => {
   let min = Math.min(num1, num2); 
   let max = Math.max(num1, num2); 
   let results = []; 
    for(let i = min; i <= max; i++){
       if(i % 3 === 0 && i % 5 === 0) results.push('FizzBuzz')
       else if(i % 3 === 0) results.push('Fizz')
       else if(i % 5 === 0) results.push('Buzz')
       else results.push(i)
    }

    return results.join(' | '); 
}
