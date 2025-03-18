console.log('\n ---------TASK15----------\n');
/*
Requirement: 
Write a function named as isPasswordValid() which takes a string email as an argument 
and returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

Examples:
isPasswordValid("") 			        -> false
isPasswordValid("abcd") 			    -> false
isPasswordValid("abcd1234") 		    -> false
isPasswordValid("Abcd1234") 		    -> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 	     	-> true
isPasswordValid("Chicago123$") 	    	-> true
isPasswordValid("Test1234#") 		    -> true
*/
// We're going one by one 

const isPasswordValid = password => {
    if(password.length < 8 || password.length > 16) return false; 
    if(password.includes(' ')) return false; 

  // at least 1 digit, 1 uppercase, 1 lowercase and 1 special char
  let hasDigit = hasLowercase = hasUppercase = hasSpecial = false; 
  
  for(let char of password){
    if(char >= '0' && char <= '9') hasDigit = true; 
    else if(char >= 'a' && char <= 'z') hasLowercase = true; 
    else if(char >= 'A' && char <= 'Z') hasUppercase = true; 
    else hasSpecial = true; 
  }

  return hasDigit && hasLowercase && hasUppercase && hasSpecial; 
}
/*
It depends on your interviewer 

filter() solution: 

const isPasswordValid = password => {
   if(password.length < 8 || password.length > 16 || password.includes(' ')) return false;
   
    if(password.split('').filter(char => char >= '0' && char <= '9').length < 1) return false; 
    if(password.split('').filter(char => char >= 'a' && char <= 'z').length < 1) return false; 
    if(password.split('').filter(char => char >= 'A' && char <= 'Z').length < 1) return false; 
    if(password.split('').filter((char => char <= '0' || char >= '9') && (char => char < 'a' && char > 'z') && (char => char < 'A' && char > 'Z')).length < 1) return false;  ---> OR just copying & pasting the statements above with !()


    return true; 
}

*/

console.log(isPasswordValid('')); 
console.log(isPasswordValid('abcd')); 
console.log(isPasswordValid('abcd1234')); 
console.log(isPasswordValid('Abcd1234')); 
console.log(isPasswordValid('Chicago12345US!#$%')); 
console.log(isPasswordValid('Abcd1234$')); 
console.log(isPasswordValid('Chicago123$')); 
console.log(isPasswordValid('Test1234#')); 


console.log('\n ---------TASK14----------\n');
/*
Requirement: 
Write a function named as isEmailValid() which takes a string email as an argument 
and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars> @ <2+chars> . <2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

Examples:
isEmailValid("") 			        -> false
isEmailValid("@gmail.com") 		    -> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 	-> true
*/

// <2+chars> @ <2+chars> . <2+chars> --> ab@gmail.com 
// ab@gmail.com.split('@') --> [ab, gmail.com]
// gmail.com.split('.')  --> [gmail, com]

const isEmailValid = email => {
    if(email.includes(' ')) return false;

    let beforeAt = email.split('@')[0]; 
    let beforeDot = email.split('@')[1].split('.')[0]; 
    let afterDot =  email.split('@')[1].split('.')[1]; 

    if(!beforeAt || !afterDot || !beforeDot) return false; 
    return (beforeAt.length >= 2) && (beforeDot.length >= 2) && (afterDot.length >= 2); 
}


console.log('\n ---------TASK13----------\n');
/*
Requirement: 
Write a function named findClosestTo10() which takes an array of numbers as argument 
and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.

NOTE: Ignore the 10 itself.

NOTE: If there are more than one numbers are close equally, return the smaller number.

Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) -> 8
findClosestTo10([0, -1, -2]) 		       -> 0
*/

// 10, -13, 5, 70, 15, 57]​
const findClosestTo10 = arr => {
    let closestTo10 = Number.MAX_VALUE; // -13 
    let closestDiff = Number.MAX_VALUE; // 23 

    for(let num of arr){ // -13
        if(num === 10) continue;

        let currDiff = Math.abs(num - 10) // 23 
        
        if(currDiff < closestDiff || (currDiff === closestDiff) && num < closestTo10){
            closestTo10 = num; 
            closestDiff = currDiff; 
        }
    }
    return closestTo10; 
}


console.log('\n ---------TASK10----------\n');
/*
Requirement:
Write a function named as isPrime() which takes a number as an argument
and returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. 
It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.

Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…

NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 	-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false
*/

const isPrime = num => {
    if(num < 2) return false; 
    if(num === 2) return true; 
    for(let i = 2; i < num; i++){ // let i = 3; i < num; i+=3 ---> weeds out the even numbers and makes the loop runs faster 
        if(num % i === 0) return false; 
    }
    return true; 
}
console.log(isPrime(5)); 
console.log(isPrime(2)); 
console.log(isPrime(29)); 
console.log(isPrime(-5)); 
console.log(isPrime(0)); 
console.log(isPrime(1)); 

console.log('\n ---------TASK06----------\n');
/*
Requirement:
Write a function named as factorial() which takes a number as an argument 
and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1
*/
const factorial = num => {
    let total = num;
    
    for(let i = num - 1; i > 1; i--){
        total *= i; 
    }
    return total; 
}
console.log(factorial(5)); 
console.log(factorial(4)); 
console.log(factorial(0)); 
console.log(factorial(1)); 