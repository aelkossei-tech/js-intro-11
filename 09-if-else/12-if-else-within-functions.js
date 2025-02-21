function evenOdd(number) {
    if(number % 2 === 0){
        return 'EVEN'; 
    }
    else {    // REMEMBER can't only have IF --> JS wants less ambiguity, so always include ELSE
        return 'ODD'; 
    }
}
console.log(evenOdd(2));
console.log(evenOdd(3)); 

/*
function evenOdd(number) {
  return number % 2 === 0 ? 'EVEN' : 'ODD'; 
}

console.log(evenOdd(2));
console.log(evenOdd(3));


function posNegZero(number) {
if(number > 0) return 'POS'
else if (number < 0) return 'NEG'
return 'ZERO'
}

*/
function posNegZero(number) {
    return number > 0 ? 'POS' : number < 0 ?'NEG': 'ZERO';
}
console.log(posNegZero(0)); 


/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
startE('John') -> false

OTHER ANSWERS:
function startE(name){
return name.toUpperCase(). startsWith('E');
}

const startE = name => name.toUpperCase(). startsWith('E');
*/

const startsE = word => {  // use .at() method for LAST characters  --> NEVER use charAt methods
    const vowel = 'Ee'; // better if you don't need to make a variable unless you'll be using it a lot 
    return vowel.includes(word[0]); 
}
console.log(startsE('Emily'));
console.log(startsE('emily'));
console.log(startsE('Alex'));
console.log(startsE(''));


/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/
const divisible5 = (number) => number % 5 === 0;   
console.log(divisible5(7)); 
console.log(divisible5(0)); 
console.log(divisible5(10)); 


/*
**** INTERVIEW QUESTION **** 

Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'


const fooBar = number => {
    return number % 5 === 0 && number % 7 === 0 ? 'foobar'
    : number % 5 === 0 ? 'foo'
    : number % 7 === 0 ? 'bar'
    : number; 
*/
const fooBar = number => { // most readable way 
    if (number % 5 === 0 && number % 7 === 0) return 'foobar'; // it matters where our if-else statements are ==> OR number % 35 === 0 since they have that in common
    else if (number % 5 === 0) return 'foo'; 
    else if (number % 7 === 0) return 'bar'; 
    return number; 
}
console.log(fooBar(2)); 
console.log(fooBar(3)); 
console.log(fooBar(5)); 
console.log(fooBar(10)); 
console.log(fooBar(14)); 
console.log(fooBar(0)); 
console.log(fooBar(35)); 
console.log(fooBar(70)); 

