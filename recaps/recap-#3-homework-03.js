/*
Requirement:
Write a function named as firstWord() which takes a string word as an argument and 
returns the first word(str) from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstWord("Hello World") 		-> "Hello"
firstWord("I like JavaScript") 	-> "I"
firstWord("Hello") 		        -> "Hello"
firstWord("") 		            -> ""
firstWord("    ") 		        -> ""
*/
const firstWord = str => {
    str = str.trim(); 
    const firstSpaceOfStr= str.indexOf(' '); 

    console.log(firstSpaceOfStr); 
    const firstWord =  str.slice(0, firstSpaceOfStr); 
    return firstWord; 
}
console.log(firstWord("     Hello World      "));  

const lastWord = str => {
    str = str.trim(); 
    const lastSpaceOfStr = str.lastIndexOf(' ');
    const lastWord = str.slice(lastSpaceOfStr); 
    return lastWord; 
}
console.log(lastWord("I like JavaScript")); 


/*
Requirement: 
Write a function named as swap4() which takes a string word as an argument and 
returns the string back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.

Examples:
swap4("abc") 	        -> ""
swap4("JavaScript") 	-> "riptScJava"
swap4("TechGlobal") 	-> "obalGlTech"
swap4("") 	         	-> ""
swap4("    ") 		    -> ""
swap4("Apple") 	        -> ""
*/
const swap4 = str1 => {
    str1 = str1.trim; 
    if(str1.length >= 8){
        const first4 = str1.slice(0, 3); 
        const middle = str1.slice(4, -4); 
        const last4 = str1.slice(-4); 
    
        return last4 + middle + first4; 
    }
    return ""; 
}
console.log(swap4('abc')); 


/*
Requirement: 
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World") 	-> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") 	-> "bar bar foo foo"
swapFirstLastWord("") 		-> ""
swapFirstLastWord("    ") 		-> ""
swapFirstLastWord("Hello") 	-> ""
swapFirstLastWord("Hello   ") 	-> ""
*/
// I like JavaScript 
const swapFirstLastWord = str2 => {
    str2 = str2.trim(); 

    const first = str2.slice(0, str2.indexOf(' ')); // I 
    const middle2 = str2.slice(str2.indexOf(' '), str2.lastIndexOf(' ') + 1); 
    const last = str2.slice(str2.lastIndexOf(' ') + 1); // JavaScript
    
    return last + middle2 + first; 
}