let str1 = 'Today is Sunday'; 

const words = str1.split(''); // usually with objects/arrays ==> const 

console.log(words); // ['Today', is]

console.log(words[0]); // 'Today'

console.log(words[2].slice(0,3)); // 'Sun'


let str2 = '+1 (312) 000 000'; 

str2.split(' ')
console.log(str2.split(' ')); // [ '+1', '(312)', '000', '000' ]
console.log(str2.split(' ').length);  // 4

console.log(str2.split(' ')[0] == '+1');  // true 

if (str2.split(' ')[0] == '+1') {
    console.log(`The number is a US number!`)
}
else{
    console.log(`The number is a NOT US number!`)
}


let str3 = 'C:\\Users\\techglobal\\Desktop\\MyFolder'; 
console.log(str3.split('\\')); // [ 'C:', 'Users', 'techglobal', 'Desktop', 'MyFolder' ]

let str4 = 'One word or two'; 
console.log(str4.split('word')); // [ 'One ', ' or two' ]

let str5 = 'Apple'; 
console.log(str5.split('')); // [ 'A', 'p', 'p', 'l', 'e' ] 

let countWords = 'I am at school and teaching JS String Split Method today!'.split(' ').length
console.log(countWords); // 11 

const actualDate = '2025-02-14'; 
const appDate = '2025-02-14'.split('-'); 
console.log(appDate); // [ '2025', '02', '14' ]

let expectedDate = `${appDate [1]}/${appDate [2]}/${appDate [0]}`; 

console.log(expectedDate); // 02/14/2025

console.log(expectedDate === '02/14/2025'); // true 

/*
split()
TASK: split the string with the given seperator
ARGUMENTS: Yes, a string or regex separator 
RETURN (what data type it gives when it runs): returns an Array of your splitted substrings 
DOES IT CHANGE ORIGINAL VALUE: No
IS IT STATIC or INSTANCE: Instance
*/

// EDGE Case 
let str6 = 'Hello'; 

console.log(str6.split('.')); // [ 'Hello' ] ==> if it doesn't exist, then it'll just return the whole string 
