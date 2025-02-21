//String 

let fullname = 'John Doe';

console.log(fullname); //John Doe

console.log(typeof fullname); //string


console.log(typeof ''); //string
console.log(typeof 'Hello'); //string


//Number 
let numberofStudents = 10;
let subPrice = 15.99; 

console.log(numberofStudents);//10
console.log(subPrice); //15.99

console.log(typeof numberofStudents); //number
console.log(typeof subPrice); //number


console.log (typeof '25'); //string 

console.log ('5' + '5'); // '55' string
console.log('5'+ 5); //'55' string
console.log (5 + 5); // 10 


//bigint

let biggestNumber = Number.MAX_SAFE_INTEGER; 
let smallestNumber = Number.MIN_SAFE_INTEGER

console.log(biggestNumber); 9007199254740991
console.log(smallestNumber); -9007199254740991

let number1 = 90071992547409917; 
let number2 = 90071992547409917n; // n = BigInt 
let number3 = BigInt('90071992547409917'); 

console.log(number1);
console.log(number2); 
console.log(number3);

console.log(typeof number1); //number
console.log(typeof number2); // bigint
console.log(typeof number3); //bigint

console.log(90071992547409917n + 5n); //bigint requires bigint to be used

//BigInt has the same functions as Number, however it just can handle using larger numbers 

//boolean 
let b1 = true; 
let b2 = false; 

console.log(b1); 
console.log(b2); 

console.log(typeof b1); 
console.log(typeof b2); 

/*
if you want to copy the function --> 
1.) highlight the firt point 
2.) press "Option 
3.) then you click the other spot and type it out  
4.) Press ecape button when you're done
*/

//for Boolean, we always need a question that equates to true or false 
let age = 14; 
let allowed = age >= 16; // false 

console.log(allowed); // one way to do this ==> false  

if (age >= 16) { 
    console.log('You are allowed to get DL!'); 
}
else {
    console.log('You are not allowed to get DL!'); 
}


console.log(typeof (5 == 5)); // == and === is used for comparison / boolean
console.log(typeof ('Hi' == 'hi')); //boolean

//undefined 
let today; 
console.log(today); //undefined 
console.log(typeof today); //undefined

let tomorrow = undefined; 

//null [always in interview question]
let SSN = null; 
console.log(SSN); //null
console.log(typeof SSN); //object 

//Symbol 
let s1 = Symbol('Foo'); 
let s2 = Symbol('SOS'); 
let s3 = Symbol('XOX')

console.log(s1);
console.log(s2);
console.log(s3);

console.log(typeof s1);
console.log(typeof s2);
console.log(typeof s3); 
