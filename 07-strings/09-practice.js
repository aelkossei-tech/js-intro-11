/*

Assume that you are given a string of any length

Get the last 5 characters from it

Morning     -> rning
Saturday    -> urday
Hello       -> Hello
*/

let str = 'Tuesday'; 
let last5 = str.slice(-5); // with negative numbers, we will count BACKWARDS --> ALSO str.slice(str1.length - 5); 
console.log(last5); // esday

// Best solution is using slice(-x); 


/*
Assume that you are given a string of any length

Get the first 3 characters and the last 3 characters
Then, concatenate these in a new string

JavaScript      -> Javipt
Hello           -> Helllo
123             -> 123123
*/

let str2 = 'Saturday'; 
let res2 = str2.slice(0, 3) + str2.slice(-3); 

console.log(res2); 


