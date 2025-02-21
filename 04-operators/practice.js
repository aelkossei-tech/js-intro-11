
//Arithmetic Operators 
let num1 = 6; 
let num2 = 4; 

console.log(num1 + num2); //Addition [10]
console.log(num1 - num2); //Substraction [2]
console.log(num1 * num2); //Multiplication [24]
console.log(num1/num2); //Division [1.5]
console.log(num1%num2); //Remainder(modulus) [2]
console.log(num1 ** num2) //Exponentional [1296]

//Create variables if you will refer it more than once 
let price = 10; 
let quantity = 5; 

//first calculate the total 
//then provide 20 percent discount 


let side1 = 5
let side2 = 8

//Area of the Rectangle
console.log(side1 * side2); //Area of the Rectangle [a*b] = 40

//Perimeter of the Rectangle 
console.log(2*(side1 + side2)); //Perimeter of the Rectangle (2(a*b)) = 26

console.log(`The area of the rectangle is = ${side1 * side2}`); 
console.log(`The perimenter of the rectangle is ${2 * (side1 + side2)}`); 


//Monthly Payments 
let year = 120000
console.log(`The monthly payment would be equal to $${year/12}`);//10000 per month 

//Weekly Payments
console.log(`The weekly payment would be $${(year/52).toFixed(2)}`);//2307.6923076923076 per week --> .toFixed(whatever number) is a great thing to help reduce numbers

//Bi-Weekly Payments 
console.log(`The bi-weekly payment would be $${(year/26)}`); //4615.384615384615 bi-weekly


//Practice with Comparison Operators

let x = 10;
let y = 20; 
let z = "10"; 

console.log(x == z); //True 
console.log(x === z); //False 
console.log(y < z ); //False 
console.log(x <= y); //True 
console.log(x >= z); //True 
console.log(y > x); //True 
console.log(x >= y); //False 
console.log((x >= z) < y); //True 
