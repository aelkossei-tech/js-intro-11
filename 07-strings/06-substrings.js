let school = 'TechGlobal School'; 

let s1 = school.slice(0, 3); // 'Tech'
let s2= school.slice(4, 10); // 'Global' --> space is not included for slice()
let s3 = school.slice(0, 10); // 'TechGlobal'
let s4 = school.slice(11); // 'School' --> you can stop using this (11, 17) and use only 11 to keep going 

console.log(s1); 
console.log(s2); 
console.log(s3); 
console.log(s4); 

console.log(school.slice(4)); // 'Global School' 

let city = 'Los Angeles'; 
console.log(city.substring(0, 3)); 
console.log(city.substring(4)); 

console.log('Apple'.slice(2, 10)); // 'ple'
console.log('Apple'.substring(2, 10)); // 'ple'
console.log('Orange'.slice(-10, 10)); // 'Orange'
console.log('Orange'.substring(-10, 10)); // 'Orange' 

console.log('Banana'.slice(1, -1)); // 'anan'
console.log('Banana'.slice(1, -2)); // 'ana'
console.log('Banana'.slice(0, -5)); // 'B'
console.log('Banana'.slice(0, -6)); // '' --> same 0, 0 

console.log('Banana'.substring(1, -1)); // 'B' ==> any negative number = 0 
console.log('Banana'.substring(0, -2)); // '' 
console.log('Banana'.substring(3, -1)); // 'Ban' 

/*
slice()
TASK: used to extract substrings from a string
ARGUMENTS: takes 1 or 2 index arguments
RETURN (what data type it gives when it runs): substring including startIndex, excluding endIndex
    Note: also allows negative indexes, and count backwards in this case 
DOES IT CHANGE ORIGINAL VALUE: No
IS IT STATIC or INSTANCE: Instance 
*/

