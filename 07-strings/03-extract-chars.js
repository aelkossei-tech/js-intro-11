let company = 'TechGlobal'

// Get char using property access
console.log(company[0]); // 'T'
console.log(company[8]); // 'a' 

// Get first and last chars 
let greeting = 'Good Morning'; 

let firstChar = greeting[0]; 
let lastChar = greeting[greeting.length - 1];  // length - 1

console.log(firstChar); 
console.log(lastChar); 

// charAt()
let city = 'Chicago'; 

city.charAt(2); // 'i' --> it's the same as city[2
console.log(city.charAt(city.length - 1)); // 'o'
console.log(city); // still chicago

// at()
let color = 'purple'; 
console.log(color.at(0)); // 'p' 
console.log(color.at(color.length - 1)); // 'e' 

// EDGE CASES [things that will push you into errors]
let name = 'Max'; 
console.log(name[-1]); // undefined
console.log(name[3]); // undefined 

console.log(name.charAt(-1)); // don't return anything --> empty line ('')
console.log(name.charAt(3)); // don't return anything --> empty line  ('')

console.log(name.at(-1)); // 'x'  
console.log(name.at(3)); // undefined 

console.log(name.at(-1)); // 'x' ==> with negative indexes --> .at() makes it goes BACKWARDS if they have enough 
console.log(name.at(-2)); // 'a' 
console.log(name.at(-3)); // 'M'
console.log(name.at(-4)); // undefined 

// Get first and last chars in a string
let brand = 'Apple'; 
let fChar = brand[0];
let lChar = brand.at(-1); // same thing as brand.length - 1]; + added to JS in 2022 

/*
charAt()
TASK: used to retrieve a character for string at specified index 
    Note: if the index is not valid for the string, it returns undefined 
ARGUMENTS: Yes, it takes an idex
RETURN (what data type it gives when it runs): returns a character as a string 
DOES IT CHANGE ORIGINAL VALUE: No, just fetches the value 
IS IT STATIC or INSTANCE: instance 
*/

/*
at()
TASK: used to retrieve a character for string at specified index 
    Note: index could be negative as well (counting backwards)
ARGUMENTS: Yes, it takes an index
RETURN (what data type it gives when it runs): returns a character,empty string 
    NoteL 
DOES IT CHANGE ORIGINAL VALUE: No, just fetches the value 
IS IT STATIC or INSTANCE: instance 
*/

let str = 'abcde'; 
console.log(str.charCodeAt(0)); // 97
console.log(str.charCodeAt(1));// 98
console.log(str.charCodeAt(2)); // 99

/*
charCodeAt()
TASK: used to retrieve a character's ASCII code 
ARGUMENTS: Yes, it takes an index
RETURN (what data type it gives when it runs): returns an integer 
DOES IT CHANGE ORIGINAL VALUE: No, just fetches the value according to its ASCII code 
IS IT STATIC or INSTANCE: instance 
*/

