console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8])  -> 3
firstPos([-2, 0, -7, 10, -5])  -> 10
firstPos([1, 2, 3, -2])  -> 1
*/
const firstPos = array => {
    for(const element of array){
        if(element > 0) return element; // good to know loop answer + SAFE option 
    }
}
console.log(firstPos([0, 3, -9,  5, 8])); 
console.log(firstPos([-2, 0, -7, 10, -5])); 
console.log(firstPos([1, 2, 3, -2])); 

/*
fiter() solution: 

const firstPos2 = arr => arr.filter((ele) => ele > 0)[0]  -> since it's differenet than the normal way (loop) + better for interviews 
*/

/*
find() solution 

const firstPos3 = arr => arr.find((ele) => ele > 0)
*/

console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2
*/
const lastNeg = array => array.findLast((num) => (num < 0)); 
console.log(lastNeg([0, 3, -9,  5, 8])); 
console.log(lastNeg([-2, 0, -7, 10, -5])); 
console.log(lastNeg([1, 2, 3, -2])); 

/*
filter() method: 

const lasNeg = arr.filter((ele) => ele < 0).at(-1);  
*/

/*
other find() method

const lastNeg = array => array.reverse.find((num) => (num < 0))
*/

/*
loop method: 

const lastNeg = arr => {
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] < 0) return arr[i]; 
    }
}
*/

console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named as firstLongest() which takes 
an array as an argument and returns the longest 
element when invoked.

NOTE: Assume you will not be given an empty array, 
and it contains only string elements.

NOTE: If there are 2 element having the longest count of 
characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> "yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> "Banana"
firstLongest(["purple", "yellow", "orange"])  -> "purple"
*/
const firstLongest = array => {
    let longest = array[0]; 

    for(const ele of array){
        if(ele.length > longest.length) longest = ele; 
    }
    return longest; 
}
console.log(firstLongest(["red", "blue", "yellow", "white"])); 
console.log(firstLongest(["Apple", "Banana", "Orange"])); 
console.log(firstLongest(["purple", "yellow", "orange"])); 

/*
reduce() method: 

const firstLongest = array => array.reduce((longest, ele) => ele.length > longest.length ? ele : longest);  

---> instance where you DON'T need to put initialValue
*/

/*
sort() function: 

const firstLonest = arr => arr.sort((a, b) => b.length - a.length)[0]; 
*/


console.log('\n ---------TASK06----------\n');
/*
Requirement:
Write a function named as min() which takes an array 
as an argument and returns the greatest element when 
invoked.

NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])  -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])                 -> 1
*/
const min = array => array.reduce((minimum, element) => element > minimum ? minimum : element); 
console.log(min([0, 3,  5, 8])); 
console.log(min([-2, 0, -7, 10, -5])); 
console.log(min([1, 2, 3, 15])); 

/*
for loop: 

const min = arr => {
    let min = arr[0]; 
    let iteration = 0; 
    for(let i =1; i < arr.length; i++){
        if(arr[i] < min) min = arr[i]
        iteration++; 
    }
    console.log(iteration)
    return min;  
}
*/

/*
sort() --> INTERVIEWERS will ask not to use this (so not the best method)

const min = arr => arr.sort((a, b) => a - b)[0]; 
*/

/*
Math.min()

const min = arr => Math.min(...arr)
*/

console.log('\n ---------TASK07----------\n');
/*
*** VERY COMMON QUESTION *** --> wanted to know diff ways of how to solve this question [diff. scenarios]
You'd want to perform in the way that the interviewer would want 

Requirement:
Write a function named as commonElements() which takes 2 arrays as arguments and returns the all the matching elements from the both arrays when invoked.
NOTE: Assume you will not be given an empty array.
 
Examples:
commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]) 	-> [ 20, 50, 70 ] 
commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]) 		-> [ ] 
commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]) 	-> ["abc" ] 
*/
const commonElements = (arr1, arr2) => arr1.filter(ele => arr2.includes(ele)); // filtering out everything in arr1 --> the condition if arr2 has that element 

/*
if you have multiple duplicates, like 2, 2, 3

const commonElements = (arr1, arr2) => arr1.reduce(common, ele) => arr2.includes(ele) && common.includes(ele) ? common.concat(ele) : common, []);  
*/



/*
nested for loop: [worst way to solve it/most common way]

const commonElements = (arr1, arr2) => {
 let result = []; 
 
 for(let i = 0; i < arr1.length; i++){
    for(let j = 0; i < arr2.length; j++){
        if(arr1[i] === arr2[j]) {
        result.push(arr1[i])
        break; 
    }
  }
    return result; 
}
*/

/*

*/