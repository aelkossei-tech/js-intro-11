/*
FALSY VALUES: 0, ' ', undefined, null, NaN, false
let result = value1 \\ value2; 
if value1 is falsy, then the result is always value2
if value1 is truthy, then the result is always value1 
*/


/*
let result = value1 ?? value2; 
if value is undefined or null, then the result is always value2
if value1 is not undefined or null, then the result always value1
*/


let nameInServer = null; //undefined --> for ?? it's only for null/undefined 

nameInServer = nameInServer ?? 'customer'; 

console.log(`Dear ${nameInServer}`); 




