let num1 = 10.4551; 


console.log(num1.toFixed(2)); //10.46
console.log(num1.toPrecision(2)); //10 -- only gives 2 digits, no decimals 

console.log((22.25).toFixed(2)); // 22.25
console.log((22.25).toFixed(1)); // 22.3
console.log((2.225).toFixed(2)); //2.23
console.log((2.225).toFixed(1)); //2.2 

let num2 = 5; 
let num3 = 10;

console.log(num2 + num3); //15
console.log(num2.toString() + num3.toString()); //'510' 

console.log(Number.isFinite(5)); //true
console.log(Number.isFinite(Infinity)); //false
console.log(Number.isFinite('Hello')); //false

Number.isInteger(5); 
console.log(Number.isInteger(5)); //true
console.log(Number.isInteger(5.5)); //false 

console.log(Number.isNaN(5)); //false
console.log(isNaN(5)); //false

console.log(Number.parseInt('10')); // 10 --> makes strings into numbers
console.log(Number.parseInt('10') + 5); // 15 
console.log(Number.parseInt('10.5') + 5); // 15, because it wants integers 
console.log(Number.parseFloat('10.5') + 5); //15.5; Float can handle decimals and Int can't 
console.log(Number.parseFloat('10') + 5); //15 

console.log(parseInt('100')+ 1); //101
console.log(parseInt('100.99')+ 1); //101
console.log(parseFloat('100.99')+ 1); //101

parseFloat()
parseInt()


let num4 = 25; 

