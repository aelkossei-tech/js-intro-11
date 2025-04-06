console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named fizzBuzz1() which takes a number argument
and returns: 
"Fizz" if the given number is divisible by 3, 
"Buzz" if the number is divisible by 5, 
and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself.​

Examples:
fizzBuzz1(0) 		-> "FizzBuzz"
fizzBuzz1(1) 		-> 1
fizzBuzz1(3) 		-> "Fizz"
fizzBuzz1(5) 		-> "Buzz"
fizzBuzz1(30) 	    -> "FizzBuzz"
fizzBuzz1(10) 	    -> "Buzz"
fizzBuzz1(15) 	    -> "FizzBuzz"
fizzBuzz1(-15) 	    -> "FizzBuzz"
*/
const fizzBuzz1 = num => {
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'; 
    else if(num % 5 === 0) return 'Buzz'; 
    else if (num % 3 === 0) return 'Fizz'; 
    return num; 
}
console.log(fizzBuzz1(0)); 
console.log(fizzBuzz1(1)); 
console.log(fizzBuzz1(3)); 
console.log(fizzBuzz1(5)); 
console.log(fizzBuzz1(30)); 
console.log(fizzBuzz1(10)); 
console.log(fizzBuzz1(15)); 
console.log(fizzBuzz1(-15)); 


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named fizzBuzz2() which takes a number argument
and returns and array consist of numbers starting from 1 to given number. 
However, it will return "Fizz" for the numbers divided by 3, 
"Buzz" for the numbers divided by 5, 
and "FizzBuzz" for the numbers divided both by 3 and 5.

Examples:
fizzBuzz2(3) 		-> [ 1, 2, 'Fizz' ]
fizzBuzz2(5) 		-> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10) 	    -> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
fizzBuzz2(15) 	    -> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
fizzBuzz2(2) 		-> [ 1, 2 ]
*/
const fizzBuzz2 = num => {
    let finalArr = []; 
    
    for(let i = 1; i <= num; i++) { // our number parameter is our max in this case 
    // and we should start w/ 1 to keep iterating until our number 
        if(i % 3 === 0 && i % 5 === 0) finalArr.push('FizzBuzz'); 
        else if(i % 5 === 0) finalArr.push('Buzz'); 
        else if(i % 3 === 0) finalArr.push('Fizz'); 
        else finalArr.push(i); 
    }
    return finalArr; 
}
console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(2));


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
What we need to do: 
1.) Somehow loop through out string 
2.) Filter out the whole numbers from the string (need to capture complete numbers)
--> leave the numbers (strings) and convert them to numbers [Number]
3.) Add the numbers up together --> return sum 
*/
const findSumNumbers = string => {
    let numbers = string.match(/\d+/g); // created a variable that will filter out all numbers within the string using a RegEx
    // .match() method ==> funciton to match all within RegEx --> returns an array if things are found + returns null is not 
    // g ==> global search flag; returns all that match the RegEx 
    // \d+ ==> a digit (character within the range [0-9]), + means one or more times 
    return numbers ? numbers.map(Number).reduce((accum, ele) => accum + ele, 0) : 0;
    // since our regex returns an array --> we could use array methods
    // if our numbers returns a null --> 0; 
    // we're converting our result into Numbers, using .map()
    // then we're using .reduce() to find our sum 
}
console.log(findSumNumbers("abc$")); 
console.log(findSumNumbers("a1b4c  6#")); 
console.log(findSumNumbers("ab110c045d")); 
console.log(findSumNumbers("525")); 
console.log(findSumNumbers("3 for 10 dollars")); 


console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number appears in the string.

Examples:
findBiggestNumber("abc$") 		        -> 0
findBiggestNumber("a1b4c  6#") 		    -> 6
findBiggestNumber("ab110c045d") 		-> 110
findBiggestNumber("525") 		        -> 525
findBiggestNumber("3 for 10 dollars") 	-> 10
*/
/*
What we need to do: 
1.) Filter out our complete numbers in our string [regex]
2.) Compare them to each other --> return the larger number [.filter() w/ num1 > num2 etc.]
*/
const findBiggestNumber = string => {
    let numbers = string.match(/\d+/g);
    // same reasoning from Task-03 --> using regex to keep the numbers found in an array (or null)
    return numbers ? numbers.map(Number).reduce((accum, ele) => ele > accum ? ele : accum, 0): 0;
    // again same reasoning, EXCEPT we're returning the largest number through our .reduce() method
}
console.log(findBiggestNumber("abc$")); 
console.log(findBiggestNumber("a1b4c  6#")); 
console.log(findBiggestNumber("ab110c045d")); 
console.log(findBiggestNumber("525")); 
console.log(findBiggestNumber("3 for 10 dollars")); 


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
/*
What we need to do: 
1.) Loop through our string by each CHARACTER  
2.) Find a way to return the count ==> once we encounter a character for the first time --> we start the count at 1 & everytime we see it we add to the count 
    - almost like key: value pairs --> maybe put it in an object and then somehow convert them to a string as our result [char(key): count (value)]
*/
const countOccurrencesOfCharacters = string => {
    let seen = {};  // SO --> we're trying to return a char and how many times it occurs in the string ==> sounds like key:value pairs to me 
    //  we're going to put our char: counts in this object
    let result = ''; // we want our result in string form, not object form 

    for(let i = 0; i < string.length; i++) { // obviously, we're looping through our string, by char
        let char = string[i]; // created a variable to look at every string's iteration --> char
        if(seen[char]) seen[char]++; // IF we've seen our char before in our object --> add to our count (value)
        else seen[char] = 1; // IF NOT --> start the count at 1
    }
    return seen; 
}
console.log(countOccurrencesOfCharacters(''));
console.log(countOccurrencesOfCharacters('abc'));
console.log(countOccurrencesOfCharacters('abbcca'));
console.log(countOccurrencesOfCharacters('aaAAa'));
console.log(countOccurrencesOfCharacters('www'));


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
/*
What we need to do: 
1.) Obviously use a loop to iterate every number in the fibonacci series until as many times as our parameter wants [so if it's 3 --> iterating 3 times]
    - for loop --> similar to factorial()?  OR a while loop? (ee=ven though we have )
2.) Return our result as an array 
*/
const fibonacciSeries1 = number => { 
    let finalArr = [0, 1]; // we're going to not only create a finalArr variable to return an array 
    // --> BUT also we're going to include 0, 1, since w/ every example we always start w/ 0, 1
    if(number === 1) return [0]; // addresses the edge case if number is 1 --> just return [0]
    for(let i = 2; i < number; i++) { 
        // we're starting here at 2 since we already included 0, 1 in our finalArr
        // since we're trying to reach our number paramter --> it should be our max/limit in our for loop [so then it can stop at that number]
        finalArr.push(finalArr[i - 1] + finalArr[i - 2]); 
        // obviously we're pushing our iterations within the terms of the fibonacci formula into the finalArr
    }
    return finalArr; 
}
console.log(fibonacciSeries1(3)); 
console.log(fibonacciSeries1(5)); 
console.log(fibonacciSeries1(7)); 
console.log(fibonacciSeries1(8)); 
console.log(fibonacciSeries1(1)); 
console.log(fibonacciSeries1(2)); 


console.log('\n ---------TASK07----------\n');
/*
Requirement:
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.

REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21

Examples:
fibonacciSeries2(2) 	-> 1
fibonacciSeries2(4) 	-> 2
fibonacciSeries2(8) 	-> 13
fibonacciSeries2(9) 	-> 21
fibonacciSeries2(1) 	-> 0
*/
/*
What we need to do: 
1.) Similar to Task06 --> using a for loop to do the same thing EXCEPT --> return the place of where it is (our number parameter) in the series 
    - fibonacciSeries2(4) --> 2 ==> the value of the 4th spot in the series is 2 
        - 4 = spot in the series
        - 2 = value at the spot 
2.) Maybe we look at our array's indexes? 
*/
const fibonacciSeries2 = number => {
    let finalArr = [0, 1]; 
    for(let i = 2; i < number; i++) {
        finalArr.push(finalArr[i - 1] + finalArr[i - 2]); 
    }
    return finalArr[number - 1]; 
}
console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(4));
console.log(fibonacciSeries2(8));
console.log(fibonacciSeries2(9));
console.log(fibonacciSeries2(1));


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
/*
What we need to do: 
1.) 
*/