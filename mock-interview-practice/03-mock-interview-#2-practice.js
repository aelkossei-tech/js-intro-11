/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument and
returns the given word back tripled if the string length is even or doubled if the string length is odd when
invoked.

Examples:
doubleOrTripleWord("Tech") -> "TechTechTech"
doubleOrTripleWord("Apple") -> "AppleApple”
doubleOrTripleWord("") -> ""
doubleOrTripleWord(" ") -> " "
doubleOrTripleWord("1") -> "11"
doubleOrTripleWord("22") -> "222222"
*/
const doubleOrTripleWord = word => {
    if(word.length % 2 === 0){
        return word + word + word
    }
    else if(word.length % 2 !== 0){
        return word + word; 
    }
}
console.log(doubleOrTripleWord('Tech')); 
console.log(doubleOrTripleWord('Apple')); 

/*
First and Last Word
Write a function named as firstlastWord() which takes a string word as an argument and returns the
first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World") -> "HelloWorld"
firstLastWord("I like JavaScript") -> "IJavaScript”
firstLastWord("Hello") -> "HelloHello"
firstLastWord("") -> ""
firstLastWord(" ") ->
*/




/*
Has Vowel
Write a function named hasVowel() which takes a string argument and returns true if the string has a
vowel, returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.

NOTE: Ignore upper/lower cases.

Examples:
hasVowel("") -> false
hasVowel("Javascript") -> true
hasVowel("Tech Global") -> true
hasVowel("1234") -> false
hasVowel("ABC") -> true
*/


/*
Start Vowel
Write a function named as startVowel() which takes a string word as an argument and returns true if
given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U

Examples:
startVowel("Hello") -> false
startVowel("Apple") -> true
startVowel("orange") -> true
startVowel("") -> false
startVowel(" ") -> false
startVowel("123") -> false
*/
const startVowel = word => {
    let vowels = 'AEIOUaeiou'; 
    return vowels.includes(word[0]); 
}
console.log(startVowel('Hello')); 
console.log(startVowel('Apple')); 

/*
Average of Edges
Write a function named averageOfEdges() which takes three number arguments and will return
average of min and max numbers.

Examples:
averageOfEdges(0, 0, 0) -> 0
averageOfEdges(0, 0, 6) -> 3
averageOfEdges(-2, -2, 10) -> 4
averageOfEdges(-3, 15, -3) -> 6
averageOfEdges(10, 13, 20) -> 15
*/



/*
Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and returns a new string with
the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.

NOTE: Ignore extra spaces before and after the string.

Examples:
replaceFirstLast("") -> ""
replaceFirstLast("Hello") -> "oellH"
replaceFirstLast("Tech Global") -> "lech GlobaT"
replaceFirstLast("A") -> ""
replaceFirstLast(" A ") -> ""
*/
const replaceFirstLast = string => {
    let firstChar = string[0]; 
    let lastChar = string.slice(-1); 
    let middle = string.slice(1, -1); 
    
    return lastChar + middle + firstChar; 
}
console.log(replaceFirstLast('Hello')); 
console.log(replaceFirstLast('Tech Global')); 


/*
Swap First and Last Four Characters

Write a function named as swap4() which takes a string word as an argument and returns the string
back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.

Examples:
swap4("abc") -> ""
swap4("JavaScript") -> "riptScJava"
swap4("TechGlobal") -> "obalGlTech"
swap4("") -> ""
swap4(" ") -> ""
swap4("Apple") -> ""
*/
const swap4 = word => {
    let first4 = word.slice(0, 4); 
    let last4 = word.slice(-4); 
    let middle = word.slice(4, -4)
    
    if(word.length >= 8) {
        return last4 + middle + first4; 
    
    }
    else {
        return ''; 
    }
}
console.log(swap4('abc')); 
console.log(swap4('JavaScript')); 
console.log(swap4('TechGlobal')); 


/*
Swap First and Last Words
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns
the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World") -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") -> "bar bar foo foo"
swapFirstLastWord("") -> ""
swapFirstLastWord(" ") -> ""
swapFirstLastWord("Hello") -> ""
swapFirstLastWord("Hello ") -> ""
*/
const swapFirstLastWord = string => {
    let word = string.split(' '); 
    if (word.length >= 2) {
        return word.slice(-1) + ' ' + word.slice(1, -1) + ' ' + word[0]; 
    }
    else {
        return ''; 
    }
}
console.log(swapFirstLastWord('Hello World')); 
console.log(swapFirstLastWord('I like JavaScript')); 
console.log(swapFirstLastWord('foo bar foo bar')); 
console.log(swapFirstLastWord('')); 


/*
Count Positive Numbers
Write a function named countPos() which takes an array of numbers as an argument and returns how
many elements are positive when invoked.

Examples:
countPos([-45, 0, 0, 34, 5, 67]) -> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) -> 4
countPos([0, -1, -2, -3]) -> 0
*/
const countPos = arr => arr.reduce((accum, curr) => curr > 0 ? accum + 1 : curr, 0);
console.log(countPos([-45, 0, 0, 34, 5, 67])); 
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); 
console.log(countPos([0, -1, -2, -3])); // why is it getting -3