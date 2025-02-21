/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the average of the numbers and print it.
*/
const numbers = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10) + 1);
const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

console.log(numbers);
console.log(average);

/*
Write a program that generates a random number between 1 and 10 (both inclusive).
If the random number is even, print true.

Otherwise, print false.
*/

let rand = Math.floor(Math.random() * (10) +1); 

console.log(rand); 

if (rand % 2 === 0 ) {
    console.log(true); 
}
else {
    console.log(false); 
}

/*
Write a program that generates a random number between 1 and 10 (both inclusive).
If the random number is odd, print true.

Otherwise, print false.
*/

const random1 = Math.floor(Math.random() * 10 + 1); 

console.log(random1); 

console.log(random1 % 2 !== 0);


let b1 = 10; 

let sqr1 = b1 * b1 ; 

console.log(`The result of ${b1} multiplied by ${b1} is = ${sqr1}`); //trying to be as dynamic with coding --> think of user experience 


/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).

If the sum of the random numbers is even, print true.

Otherwise, print false.
*/

let ran1 = Math.floor(Math.random() * (10) + 1); // 1.) use the random number expression first 
let ran2 = Math.floor(Math.random() * (10) + 1);

let sum = ran1 + ran2  // 2.) create a variable for the sum of the 2 numbers 

console.log(sum);  // Optional: Print the sum of the numbers 
console.log(sum % 2 == 0); // 3.) create an expression that shows that if the outcome is even = true 
// In this case if the sum had a remainder that equaled (==) to 0 --> it would be even, so true 

/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).

Calculate the product of the numbers and print it.
*/

let rand1 = Math.floor(Math.random() * (10) + 1); 
let rand2 = Math.floor(Math.random() * (10) + 1); 

let product = rand1 * rand2; 

console.log(rand1, rand2); 
console.log(product); 

/*
 Calculate the absolute difference between 2 random numbers.

Write a program that generates 2 random numbers between 1 and 10 (both inclusive).

Calculate the absolute difference of the numbers and print it.
*/

let ran3 = Math.floor(Math.random () * 11);
let ran4 = Math.floor(Math.random () * 11);

let absDifference = Math.abs(ran3 - ran4); 
console.log(ran3, ran4); 
console.log(absDifference); 

/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).

Find the smallest of the numbers and print it.
*/

let ran5 = Math.floor(Math.random() * (10) + 1); // Math.random() generates a decimal between 0 and 1 
let ran6 = Math.floor(Math.random() * (10) + 1); // by multiplying by 11 --> it ensures that our range is between 0 and 10.9999
let ran7 = Math.floor(Math.random() * (10) + 1); // and by using Math.floor --> it ensures that my numbers rounds DOWN to either 0 or 10

console.log(ran5, ran6, ran7); 
console.log(Math.min(ran5, ran6, ran7)); 

/*
Write a program that generates a random number between -5 and 5 (both inclusive).

If the random number is positive, print true.

Otherwise, print false.
*/

let random2 = Math.floor(Math.random () * 11 - 5); 

console.log(random2); 

let positive = (random2 > 0); 

console.log(positive); 

/*
Write a program that generates a random number between 1 and 50 (both inclusive).

If the random number is divisible by 5, print true.

Otherwise, print false.
*/

let ranNum = Math.floor(Math.random() * (50) + 1); 

console.log(ranNum); 

let divideNum = (ranNum % 5 == 0); 

console.log(divideNum); 


/*
Find if a number is divisible by 7 or not.
Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number is divisible by 7, print true.
Otherwise, print false.
*/

let ranNum1 = Math.floor(Math.random() * (50) +1); 

console.log(ranNum1); 

let divideNum1 = (ranNum1 % 7 == 0); 

console.log(divideNum1); 

/*
Calculate the sum of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the sum of the numbers and print it.
*/

let randNum1 = Math.floor(Math.random()* (10) +1);
let randNum2 = Math.floor(Math.random()* (10) +1);

console.log(randNum1, randNum2); 

let sum1 = randNum1 + randNum2; 

console.log(sum1); 

/*
Write a program that generates a random number between 1 and 10 (both inclusive).
Calculate the square of the number and print it.
*/

let randomNum1 = Math.floor(Math.random() * (10) +1); 
console.log(randomNum1); 
let sqr2 = randomNum1 * randomNum1; 
console.log(sqr2); 

/*
Write a program that generates a random number between 1 and 10 (both inclusive).
Calculate the square of the number and print it.
*/

const randoNum = Math.floor(Math.random() * (10) +1); 
console.log(randoNum); 
let cubeNum = Math.pow(randoNum, 3); // Same thing as randoNum ** 3
console.log(cubeNum); 


/*
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered
as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
*/

let miles = Math.floor(Math.random() * (10) +1); 
console.log(miles); 
let kilometers = miles * 1.6 
console.log(`This amount of ${miles} miles is the same as ${kilometers} kilometers`); 

/*
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered
as a kilogram unit.
Convert kilogram unit to pounds and print it.
Please assume that 1 kilogram equals 2.2 pounds.
*/

let kilogram = Math.floor(Math.random() * (100) +1); 
let pounds = kilogram * 2.2 
console.log(`This amount of ${kilogram} kilograms is the same as ${pounds} pounds.`); 

/*
Write a program that generates 2 random numbers between 1 and 3 (both inclusive).
If the numbers are equal, print true.
Otherwise, print false.
*/

let randNumb1 = Math.floor(Math.random() * (3) +1); 
let randNumb2 = Math.floor(Math.random() * (3) +1); 
console.log(randNumb1, randNumb2); 
let equalNum = (randNumb1 == randNumb2); 
console.log(equalNum);

/*
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered
as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
*/

let randomNumber = Math.floor(Math.random() * (100) + 1); 
console.log(randomNumber); 

let driverAge = (randomNumber >= 16); 
console.log(driverAge); 


/*
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked.

NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y
*/
function rectangleArea(x , y ){
    let area = x * y
    return area
}; 
console.log(rectangleArea(8, 17)); 


/*
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when
invoked.

NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Perimeter = 2 * (x + y)
*/
function rectanglePerimeter(x, y){
    return perimeter = 2 * (x * y); 
}
console.log(rectanglePerimeter(10, 14)); 

/*
Write a function named as squareArea() which calculates the area of a square when invoked.

NOTE: Assume the side of the square is x.
Conversion Formula:Area = x * x

Examples:
squareArea(5) -> 25
squareArea(3) -> 9
squareArea(6) -> 36
*/

function squareArea(x, x){
    return area = x * x; 
}
console.log(squareArea(7, 7)); 

