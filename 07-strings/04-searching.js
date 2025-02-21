// startsWith() vs endsWith()

let company = 'TechGlobal'
console.log(company.startsWith('T')); // True --> it should give a Boolean value (true or false)
console.log(company.startsWith('Tech')); // True

console.log(company.startsWith('t')); // False --> t is the not same as T
console.log(company.toLowerCase().startsWith('t')); // True 

console.log(company.endsWith('l')); // true
console.log(company.endsWith('Global')); // true
console.log(company.endsWith('TechGlobal')); // true

console.log(company.startsWith('') && company.endsWith('')); // every string starts/ends with empty string 

console.log(company.toUpperCase().startsWith('TECH') && company.toLowerCase().endsWith('l')); // true 

/*
startsWith()
TASK: used to check if string starts with another substring
ARGUMENTS: Yes, it takes a string to check 
RETURN (what data type it gives when it runs): returns a Boolean (true if string starts with substring or false otherwise)
DOES IT CHANGE ORIGINAL VALUE: No
IS IT STATIC or INSTANCE: instance 
*/

/*
endsWith()
TASK: used to check if string ends with another substring
ARGUMENTS: Yes, it takes a string to check 
RETURN (what data type it gives when it runs): returns a Boolean (true if string ends with substring or false otherwise)
DOES IT CHANGE ORIGINAL VALUE: No
IS IT STATIC or INSTANCE: instance 
*/

// includes() method
let quote = `Let's do it`; 

console.log(quote.includes('')); // true 
console.log(quote.includes(' ')); // true 
console.log(quote.includes('do')); // true 
console.log(quote.includes('let')); // false --> looking for an exact method
console.log(quote.includes('it ')); // false 

/*
includes() method
TASK: checks if the string contains another substring 
ARGUMENTS: it takes another substring to check 
RETURN (what data type it gives when it runs): returns a Boolean (true if string ends with substring or false otherwise)
DOES IT CHANGE ORIGINAL VALUE: No
IS IT STATIC or INSTANCE: instance 
*/


let address = '123 Street Chicago IL 12345'; 

console.log(address.includes('Chicago')); // true 
console.log(address.includes('Chicago', 20)); // false 

console.log(address.startsWith('123')); //true
console.log(address.startsWith('123', 1)); // false


// search()
let str = 'abcde';

console.log(str.search('a')); // 0 
console.log(str.search('d')); // 3
console.log(str.search('x')); // -1 ==> when it can't find what you're looking for = -1 
console.log(str.search('bc')); // 1 (always left first)


// indexOf() and lastIndexOf() methods [introduced in ES6/ES2015]
let today = 'saturday';  // opposite of charAt(), bec it returns a Letter(string), while indexOf is more with the index of the letter 
console.log(today.indexOf('a')); // 1
console.log(today.lastIndexOf('a')); // 6

console.log(today.indexOf('r')); // 4
console.log(today.lastIndexOf('r')); // 4 --> still reading from left to right 

// if there is only one match of the searched string, then indexOf() and lastIndexOf()
// will always return the same index 

let myAddress = '123 Street Chicago'

// Make sure the address has Street keyword [without the includes() methods]
console.log(myAddress.indexOf('Street') !== -1); // -1, true 
console.log(myAddress.indexOf('12345') !== -1); // -1, false 


/*
indexOf()
TASK: check if the original string has a substring 
ARGUMENTS: Yes, a substring 
RETURN (what data type it gives when it runs): returns the first found index of the matching substring within original string 
    Note: if it cannot find the substring, then it returns -1 
DOES IT CHANGE ORIGINAL VALUE: No
IS IT STATIC or INSTANCE: instance 
*/


/*
lastIndexOf()
TASK: check if the original string has a substring 
ARGUMENTS: Yes, a substring 
RETURN (what data type it gives when it runs): returns the last found index of the matching substring within original string 
    Note: if it cannot find the substring, then it returns -1 
DOES IT CHANGE ORIGINAL VALUE: No
IS IT STATIC or INSTANCE: instance 
*/

console.log('can i can a can'.indexOf('can')); // 0 
console.log('can i can a can'.lastIndexOf('can')); // 12 