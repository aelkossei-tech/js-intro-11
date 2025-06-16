console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named findMedian() which takes two arrays of numbers as its arguments 
and return the median of the two sorted arrays. 

NOTE: The median is the middle number of a sorted array. 
So the median of [1,3], [2] would be 2. 
If the array has an even length, you are to find the average of the 2 middle numbers

findMedian([1, 3], [2]) 		-> 2
findMedian([1, 2], [3, 4]) 		-> 2.5
findMedian([4], [3]) 		    -> 3.5
findMedian([4], [])  		    -> 4
findMedian([0], [0,1])  		​-> 0
*/
/*
What we need to do: 
1.) Think of how a human would look at these two number array parameters 
    --> we'd organize it in numerical order after COMBINING/MERGING THEM [i.e. 1, 2, 3]     
            - we'd do this to combine them ==> let combinedArray = array1.concat(array2); 
            - then, sort them ==> combinedArray.sort((a, b) => a - b)
        - see the LENGTH of the array of numbers 
            - combinedArray.length 
        - IF number array has an ODD length --> then divide the length by 2 to get the middle number in the index
        - IF number array has an EVEN length --> you're taking the LEFT and RIGHT middle (if that makes sense) and divide those by 2
*/
const findMedian = (array1, array2) => {
    let combinedArray = array1.concat(array2).sort((a, b) => a - b); 
    let middle = Math.floor(combinedArray.length / 2); // this is the middle of the array based on the INDEX, b/c we're dividing the length of the new combined array by 2 

    return combinedArray.length % 2 === 0 ? (combinedArray[middle - 1] + combinedArray[middle]) / 2 : combinedArray[middle]; 
    // SO similar to slice even-lengthed & odd-lengthed strings --> this is the same concept 
    // 
}
console.log(findMedian([1, 3], [2]));
console.log(findMedian([1, 2], [3, 4]));
console.log(findMedian([4], [3]));
console.log(findMedian([4], []));
console.log(findMedian([0], [0 , 1]));


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named calculateFactorial() which takes a number as an argument 
and returns the factorial of that number.

Note: Factorial is the product of all positive integers less than or equal to a given positive integer 
and denoted by that integer and an exclamation point. 

Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is defined as equal to 1.

calculateFactorial(0) 	-> 1
calculateFactorial(1) 	-> 1
calculateFactorial(5) 	-> 120
calculateFactorial(6) 	-> 720
calculateFactorial(10) 	-> 3628800
calculateFactorial(4) 	-> 24
*/
/*
What we need to do: 
1.) Loop through our given number parameter as our limit [SO, range is from 1 - number parameter]
2.) Take our number parameter, take note of each iteration and then return the product 
*/
const calculateFactorial = number => {
    let product = 1; 
    for(let i = number; i >= 1; i--) {
        product *= i; 
    }
    return product; 
}
console.log(calculateFactorial(0)); 
console.log(calculateFactorial(1)); 
console.log(calculateFactorial(5)); 
console.log(calculateFactorial(6)); 
console.log(calculateFactorial(10)); 
console.log(calculateFactorial(4)); 


console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named calculateGCD() which takes two numbers as arguments 
and returns the greatest common divisor of the two numbers.

NOTE: GCD is a mathematical concept used to describe the largest number 
that divides two or more integers without leaving a remainder. 

In other words, it is the largest number that is a common factor of two or more numbers.

Examples:
calculateGCD(8, 12) 	-> 4
calculateGCD(17, 5) 	-> 1
calculateGCD(48, 18) 	-> 6
calculateGCD(0, 5)    	-> 5
calculateGCD(21, 14) 	-> 7
calculateGCD(60, 48) 	-> 12
*/
/*
What we need to do: 
1.) Take note of our number parameters --> we have to loop through them 
    - In that case ==> we need to find the min of the two to set the limits of our for loop ---> BECAUSE we need to really take note of the smallest number parameter 
        - when comparing 2 numbers for their GCD --> we line them up and see the numbers that can be multipled to be the final number (it ALWAYS starts from 1)
            - EX: 4 --> 1, 2, 4
                  8 --> 1, 2, 4, 8 
                ==> as we can see here, the smallest number out of the two [4] cuts off early, SO it's our limit 
2.) Now with our for loop --> we set our limits [1, min]
    - we know that we have to loop through every iteration for both our numbers to see the greatest number from them that has 0 as a remainder 
        - SO --> num1 % i === 0 && num2 % 2 === 0 
*/
const calculateGCD = (num1, num2) => {
    let product = 1; // since it's the GCD, it's a PRODUCT, so we start at 1 
    for(let i = 1; i <= Math.min(num1, num2); i++) { // we start at 1, and our limit is going to be the mininum number of the two because that's where we can find GCD
        if(num1 % i === 0 && num2 % i === 0) product = i; // NOW if both our number parameters has a remainder of 0 --> then re-assign our product to that iteration 
        // SO in the above example: 
        // if (4 % (iteration = 4) % === 0 && 8 % (iteration = 4) === 0) product = 4; 
    }
    return product; // then the loop will stop when we get to the limit [the smaller number of the 2 parameters]
}
console.log(calculateGCD(8, 12));
console.log(calculateGCD(17, 5));
console.log(calculateGCD(48, 18));
console.log(calculateGCD(0, 5));
console.log(calculateGCD(21, 14));
console.log(calculateGCD(60, 48));


console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named calculateLCM() which takes two numbers as arguments 
and returns the least common multiple of the two numbers.

NOTE: LCM is a mathematical concept used to describe the largest number 
that divides two or more integers without leaving a remainder. 

In other words, it is the largest number that is a common factor of two or more numbers.
    - It's the smallest integer that is divisible by both number parameters 
        - EX: 4 --> 4, 8, 12, 16, 20, 24, etc. 
              6 -->  6, 12, 18, 24, etc. 
              the LCM of the two numbers (4 & 6 ) ==> 12 

        - also the formula for calculating LCM would be --> LCM(num1, num2) = (num1 * num2)/ GCD(num1, num2); 
        - SO ==> since we already have a function(or method) that calculates GCD --> let's use it within our LCM function 

Examples:
calculateLCM(8, 12) 	-> 24
calculateLCM(17, 5) 	-> 85
calculateLCM(48, 18) 	-> 144
calculateLCM(0, 5) 	    -> 0
calculateLCM(21, 14) 	-> 42
calculateLCM(60, 48) 	-> 240
*/
const calculateLCM = (num1, num2) => {
    const gcd = (num1, num2) => {
        let product = 1; 
           for(let i = 1; i <= Math.min(num1, num2); i++) {
              if(num1 % i === 0 && num2 % i === 0) product = i;
    }
        return product;
    }
    return (num1 * num2) / gcd(num1, num2); 
} 
console.log(calculateLCM(8, 12));
console.log(calculateLCM(17, 5));
console.log(calculateLCM(48, 18));
console.log(calculateLCM(0, 5));
console.log(calculateLCM(21, 14));
console.log(calculateLCM(60, 48));