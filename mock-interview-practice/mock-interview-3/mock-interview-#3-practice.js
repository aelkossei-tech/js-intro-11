console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.

Examples:
findSumNumbers("abc$")              -> 0
findSumNumbers("a1b4c  6#")         -> 11
findSumNumbers("ab110c045d")        -> 155
findSumNumbers("525")               -> 525
findSumNumbers("3 for 10 dollars")  -> 13
*/
/*
What we need to do: 
1.) Somehow loop through out string 
2.) Filter out the whole numbers from the string (need to capture complete numbers)
--> leave the numbers (strings) and convert them to numbers [Number]
3.) Add the numbers up together --> return sum 
*/
const findSumNumbers = string => {
    let numbers = string.match(/\d+/g); // created a variable that will filter out all numbers within the string using a RegEx
    // .match() method ==> funciton to match all within RegEx --> returns an array if things are found + returns null is not 
    // g ==> global search flag; returns all that match the RegEx 
    // \d+ ==> a digit (character within the range [0-9]), + means one or more times 
    return numbers ? numbers.map(Number).reduce((accum, ele) => accum + ele, 0) : 0;
    // since our regex returns an array --> we could use array methods
    // if our numbers returns a null --> 0; 
    // we're converting our result into Numbers, using .map()
    // then we're using .reduce() to find our sum 
}
console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c  6#"));
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("525"));
console.log(findSumNumbers("3 for 10 dollars"));