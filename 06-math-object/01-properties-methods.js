// Properties
let pi = Math.PI; 

console.log(pi); 

console.log(Number.isFinite(Math.PI)); 

//Methods
console.log(Math.abs(5)); 
console.log(Math.abs(-5));

let a1 = Math.abs(3 - 5 ) - 3; 
console.log(a1); // -1 

let a2 = Math.abs((2 * 5 - 3) - 15); 
console.log(a2); // 8 

let userAge1 = 15; 
let userAge2 = 20; 
console.log(`The age differece is ${Math.abs(userAge1 - userAge2)}`); 

//ceil(), floor(), trunc(), round() methods ==> trunc() is not the most used 
console.log(Math.trunc(10.99)); //10
console.log(Math.trunc(10.01)); //10

console.log(Math.round(10.99)); // 11
console.log(Math.round(10.01)); // 10
console.log(Math.round(10.49)); // 10
console.log(Math.round(10.50)); //11
console.log(Math.round(10.51)); //11

console.log(Math.round(3.4923)); // 3
console.log(Math.round(3.4947)); // 3

// 0.4999999999999

console.log(Math.ceil(10.000001)) // 11
console.log(Math.ceil(10.99)) // 11

console.log(Math.floor(10.01)); // 10
console.log(Math.floor(10.99)); // 10

// pow () method
Math.pow(2, 3) // 2 ** 3
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25
console.log(Math.pow(5)); // NaN --> it's like saying 5 ** nothing [undefined] ==> NaN

// sqrt() method
console.log(Math.sqrt(64)); // 8 
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(5)); // 2.23606797749979
console.log(Math.sqrt(5).toFixed(1)); // 2.2

// max (), min () methods
console.log(Math.max(5)); // 5
console.log(Math.max(5, 3)); // 5
console.log(Math.max(5, 3, 10)); // 10

console.log(Math.max(3.119, 3.1191)); // 3.1191

console.log(Math.min(5)); // 5
console.log(Math.min(5, 3)); // 3
console.log(Math.min(5, 3, 10)); // 3
console.log(Math.min(3.119, 3.1191)); // 3.119


