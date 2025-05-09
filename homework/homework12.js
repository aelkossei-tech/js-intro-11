console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named makeNegative() that takes a number 
and returns its negative value.

NOTE: The number can be negative already, in which case no change is required.

NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. 
So, zero will stay as zero.

Examples
makeNegative(10)      	-> -10
makeNegative( -7)     	-> -7
makeNegative( 0)       	-> 0
makeNegative(0.45)   	-> -0.45
*/
/*
What we need to do: 
1.) Find a way to make almost any number [except 0] --> negative (so like the opposite of absolute value [Math.abs()])
*/
const makeNegative = number => {
   if(number === 0) return 0; 
   return -Math.abs(number); 
}
console.log(makeNegative(10));
console.log(makeNegative(-7));
console.log(makeNegative(0));
console.log(makeNegative(0.45));


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function isSumEvenOrOdd() which takes three numbers as arguments 
and determines if the sum of these numbers is odd or even.

Examples:
isSumEvenOrOdd(0, 1, 4) 	-> "odd"
isSumEvenOrOdd(0, -1, -5)   -> "even"
isSumEvenOrOdd(0, 0, 0) 	-> "even"
isSumEvenOrOdd(7, 1, 9)     -> "odd"
isSumEvenOrOdd(1, 1, 1)     -> "odd"
*/
/*
What we need to do: 
1.) Add all the number paramters together 
2.) create 2 conditional statements for both even/odd results --> return that 
*/
const isSumEvenOrOdd = (num1, num2, num3) => {
    let sum = num1 + num2 + num3
    return sum % 2 === 0 ? 'even' : 'odd'; 
}; 
console.log(isSumEvenOrOdd(0, 1, 4));
console.log(isSumEvenOrOdd(0, -1, -5));
console.log(isSumEvenOrOdd(0, 0, 0));
console.log(isSumEvenOrOdd(7, 1, 9));
console.log(isSumEvenOrOdd(1, 1, 1));


console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named decimal2() which takes an array of numbers as an argument 
and returns the array with the same numbers rounded up or down and represented with only two decimals.

Examples:
decimal2( [94.356, 8.9752] ) 	        	-> [ 94.36, 8.98 ]
decimal2( [76.62, 128.4, 84] ) 		        -> [ 76.62, 128.4, 84 ]
decimal2( [20987, 3.53245, 12.345, 32.9] ) 	-> [ 20987, 3.53, 12.35, 32.90 ]
decimal2( [ ] ) 			                -> [  ]
decimal2( [4.35623, 8.9742] ) 		        -> [ 4.36, 8.97 ]
*/
/*
What we need to do: 
1.) Loop through our array w/ .map() --> return each .toFixed(2); 
*/
const decimal2 = array => array.map(ele => Number((ele).toFixed(2))); 
console.log(decimal2( [94.356, 8.9752] ));
console.log(decimal2( [76.62, 128.4, 84] ));
console.log(decimal2( [20987, 3.53245, 12.345, 32.9] ));
console.log(decimal2( [ ] ));
console.log(decimal2( [4.35623, 8.9742] ));


console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named myPow() which takes two numbers, x and n, as its arguments 
and returns x to the power of n without using Math.pow(). 3 to the power of 3 is 3*3*3 = 27. 

NOTE: Any number to the power of 0 equals 1. Any number to the power of 1 equals the number itself.

Examples: 
myPow(3, 3) 	-> 27
myPow(10, 1) 	-> 10
myPow(100, 0) 	-> 1
myPow(1, 1) 	-> 1
myPow(4, 2)  ​	-> 16
myPow(0, 0)  	​-> 1
myPow(5, 3)  ​	-> 125
*/
/*
What we need to do: 
1.) Look at num1 = x & num2 = n --> x to the power of n [w/o using Math.pow()]
    - we know that a power is the number of how many times a number multiplies itself 
        - EX: 3^3 === 3 * 3 * 3 = 27 
2.) Maybe find a way to have a loop multiple num1 by num2 how may times 
*/
const myPow = (x, n) => {
    let num = 1; // since we're MULTIPLYING --> we're going to have a container that will help us return our final product
    for(let i = 0; i < n; i++){ // we're using a for loop to do the repetitive multiplication in one place 
       num = x * num;  // everytime we loop --> our first number parameter (x) is multiplied by our num variable 
       // UNTIL we reach our loop limit [n = (our second number paramter)]
    }
    return num; // we return our final product here 
}; 
console.log(myPow(3, 3));
console.log(myPow(10, 1));
console.log(myPow(100, 0));
console.log(myPow(1, 1));
console.log(myPow(4, 2));
console.log(myPow(0, 0));
console.log(myPow(5, 3));


console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a function named findLongestWord() which takes a string as input 
and returns the longest word in the string.

NOTE: If the string is empty or consists of spaces only, then return empty string.
NOTE: If the string consists of multiple words having the longest word, then return the first occurrence.

findLongestWord("The quick brown fox jumped over the lazy dog") 	->"jumped"
findLongestWord("This is a sample string for testing") 		        ->"testing" 
findLongestWord("One two ten") 			                        	-> "One"
findLongestWord("") 			                            		-> ""
findLongestWord("      ") 			                         		-> ""
*/
/*
What we need to do: 
1.) Obviously we're looping through the string [definitely going to convert it into an array]
2.) As we loop through our array --> we're trying to see which word has the largest length (ele.length)
*/
const findLongestWord = string => {
    let strArr = string.trim().split(/\s+/); 
    if(strArr === "") return ""; 
    return strArr.reduce((accum, ele) => ele.length > accum.length ? ele : accum, "");  
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("This is a sample string for testing"));
console.log(findLongestWord("One two ten"));
console.log(findLongestWord(""));
console.log(findLongestWord("   "));