let v1 = 3; 
let v2 = '3'; 
let v3 = 5;
let v4 = '5'; 

console.log(v1 < v3); //true 
console.log(v1<= v3); //true 

console.log(v1 == v3); //false --> compare the numbers 
console.log(v1 === v3); //false  ---> compare the numbers 

console.log(v1 == v2); //true because they're both 3
console.log(v1 === v2); //false because one is a string and the other is a number 

console.log('5' == 5); //true 
console.log('5' === 5); //false 
console.log(true == 1); //true 
console.log(true === 1); //false 

console.log('Hello' != 'HELLO'); //true 
console.log('Hello' != 'hELLO'); //true 

console.log(3 != '3'); //false
console.log(3 !== '3'); //true


console.log(10 >= 10); //true; 10 greater than OR equal 10 

console.log(10 >= 10); //true 
console.log(true < 20); //true 

