console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named repeatingX() which takes a string argument 
and returns true if the letter x is followed by another x. Otherwise, return false.

NOTE: This method should be case-insensitive.

Examples:
repeatingX("xTechxGlobalx") 	-> false
repeatingX("Hello Xx World") 	-> true
repeatingX("x x") 		        -> false
repeatingX("") 		            -> false
repeatingX("xxxxx") 	    	-> true
*/
/*
What we need to do: 
1.) Loop through our string + figure out a way to detect if there is 2 x's next to each other 
    - sounds similar to homeowork13's stars function --> there was a left/right variable and if there was a star, then forget the left/right chars
2.) SO --> similar to that ==> if the left = x & right char = x ==> TRUE, ELSE --> FALSE 
*/
const repeatingX = string => {
    let lowerCased = string.toLowerCase() 

    for(let i = 0; i < lowerCased.length; i++) {    
        if(lowerCased[i] === 'x' && lowerCased[i + 1] === 'x') return true; 
    }

    return false; 
}
console.log(repeatingX("xTechxGlobalx")); 
console.log(repeatingX("Hello Xx World")); 
console.log(repeatingX("x x")); 
console.log(repeatingX("")); 
console.log(repeatingX("xxxxx")); 


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named isPerfectSquare() which takes a number as an argument 
and checks if it is a perfect square. It returns true if the number is a perfect square and false otherwise.

NOTE: A perfect square is a number that can be expressed as the product of an integer by itself 
or as the second exponent of an integer. 

For example, 25 is a perfect square because it is the product of integer 5 by itself, 5 × 5 = 25. 
However, 21 is not a perfect square number because it cannot be expressed as the product of two same integers.

Examples:
isPerfectSquare(25) 	-> true
isPerfectSquare(24) 	-> false
isPerfectSquare(0) 	    -> true
isPerfectSquare(1) 	    -> true
isPerfectSquare(-1) 	-> false
isPerfectSquare(144) 	-> true
*/
/*
What we need to do: 
1.) Loop through all the numbers until our parameter (limit)
2.) Really understand what a perfect square entails --> so 0 is considered a perfect square [so loop could either start from 0 or 1]
    - obviously no negative numbers 
    - perfect square seems to be an integer that can be multiplied by itself ==> key word is the same integer (x * x)
    - SO, in our loop --> we find an integer that can be mutlipied by itself and equals to the number parameter + cut the loop 
        - maybe even include Math.sqrt()
*/
const isPerfectSquare = number => {
    if(number < 0) return false; 
    if(number === 0 || number === 1) return true; 
   
    for(let i = 1; i < number; i++) {
        if(i * i === number) return true;  
    }
    return false; 
}
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(24));
console.log(isPerfectSquare(0));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(-1));
console.log(isPerfectSquare(144));


console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named convertTemperature() which takes a number and a string arguments to be considered 
as a temperature value and a unit (either Celsius or Fahrenheit) as arguments 
and converts the temperature to the other unit.

NOTE: Use below formulas to convert temperature:

Celsius to Fahrenheit: temp * 9/5) + 32
Fahrenheit to Celsius: temp - 32) * 5/9

Examples:
convertTemperature(100, 'Celsius’) 		-> 212
convertTemperature(32, 'Fahrenheit’) 	-> 0
convertTemperature(0, 'Celsius’) 		-> 32
convertTemperature(212, 'Fahrenheit’) 	-> 100
convertTemperature(-40, 'Celsius’) 		-> -40
convertTemperature(-40, 'Fahrenheit’) 	-> -40
*/
/*
What we need to do: 
1.) Look at our string/temperature name [Celsius or Fahrenheit] --> based on this we can go about calculating the temp
*/
const convertTemperature = (number, temp) => {
    if(temp === 'Celsius') return (number * 9/5) + 32; 
    if(temp === 'Fahrenheit') return (number - 32) * 5/9; 
}
console.log(convertTemperature(100, 'Celsius'));
console.log(convertTemperature(32, 'Fahrenheit'));
console.log(convertTemperature(0, 'Celsius'));
console.log(convertTemperature(212, 'Fahrenheit'));
console.log(convertTemperature(-40, 'Celsius'));
console.log(convertTemperature(-40, 'Fahrenheit'));


console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named sumOfEvenNumbers() which takes an array as an argument 
and returns the sum of all the even numbers in an array.

Examples:
sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ) 		-> 30
sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ) 	-> 110
sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ) 	-> 0
sumOfEvenNumbers( [ ] ) 			                        -> 0
sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ) 			            -> 6
sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] ) 		            -> 150
*/
const sumOfEvenNumbers = array => array.reduce((accum, ele) => ele % 2 === 0 ? ele + accum : accum, 0); 
console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ));
console.log(sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ));
console.log(sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ));
console.log(sumOfEvenNumbers( [ ] ));
console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ));
console.log(sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] ));


console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a function named capsOdds() which takes an array argument 
and returns the array with all the odd index elements capitalized (converted to uppercase).

Examples:
capsOdds(["Hello", "World"]) 			                        -> ["Hello", "WORLD"]
capsOdds(["Jan", "Feb", "Mar", "Apr"]) 		                    -> ["Jan", "FEB", "Mar", "APR"]
capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]) 	-> ["Apple", "BANANA", "123", "456", "Peach", "KIWI"]
capsOdds([ ]) 			                                     	-> [ ]
capsOdds(["John !@#$%", "^&*() Doe"]) 		                    -> ["John !@#$%", "^&*() DOE"]
*/
/*
What we need to do: 
1.) Loop through our array and take note of our odd indexes --> .toUpperCase()
*/
const capsOdds = array => array.map((ele) => array.indexOf(ele) % 2 !== 0 ? ele.toUpperCase() : ele); 
console.log(capsOdds(["Hello", "World"])); 
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]) ); 
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])); 
console.log(capsOdds([ ])); 
console.log(capsOdds(["John !@#$%", "^&*() Doe"])); 