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
    if (word.length % 2 === 0) {
        return word + word + word
    }
    else if (word.length % 2 !== 0) {
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
const firstLastWord = string => {
    let strArr = string.split(' ');
    return strArr[0] + strArr[strArr.length - 1];
}
console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));



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
const hasVowel = string => {
    let vowels = 'AEIOUaeiou';

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) return true;
    }
    return false;
}
console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));


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
console.log(startVowel('orange'));
console.log(startVowel(''));
console.log(startVowel(' '));
console.log(startVowel('123'));

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

    return string.length > 1 ? lastChar + middle + firstChar : '';
}
console.log(replaceFirstLast(''));
console.log(replaceFirstLast('Hello'));
console.log(replaceFirstLast('Tech Global'));
console.log(replaceFirstLast('A'));
console.log(replaceFirstLast(' A '));


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

    if (word.length >= 8) {
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
const countPos = arr => arr.reduce((accum, curr) => curr > 0 ? accum + 1 : accum, 0);
console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));



/*
Find Even Numbers
Write a function named as getEvens() which takes 2 number arguments
and returns all the even numbers as an array stored from smallest even number
to greatest even number when invoked.

NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even
numbers in the range of given 2 numbers.

Assume you will not be given negative numbers.

Examples:
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> [ ]
*/
const getEvens = (num1, num2) => {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let finalArr = [];

    for (let i = min; i < max; i++) {
        if (i % 2 === 0) finalArr.push(i);
    }
    return finalArr;
}
console.log(getEvens(2, 7)); 
console.log(getEvens(17, 5)); 
console.log(getEvens(4, 4)); 
console.log(getEvens(3, 3)); 

/*
Find Numbers Divisible By 5

Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers
divisible by 5 as an array stored from first found match to last found match when invoked.

NOTE: Make your code dynamic that works for any numbers and return empty array if there are no
numbers divisible by 5 in the range of given 2 numbers.

Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/
const getMultipleOf5 = (num1, num2) => {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let finalArr = [];

    for(let i = min; i <= max; i++) {
        if(i % 5 === 0)  finalArr.push(i); 
    }
    return num2 > num1 ? finalArr : finalArr.reverse();
}
console.log(getMultipleOf5(3, 7)); 
console.log(getMultipleOf5(23, 5)); 
console.log(getMultipleOf5(5, 5)); 
console.log(getMultipleOf5(2, 4)); 

/*
Count Negative Numbers
Write a function named countNeg() which takes an array of numbers as an argument 
and returns how many elements are negative when invoked.

Examples:
countNeg([-45, 0, 0, 34, 5, 67]) --> 1
countNeg([-23, -4, 0, 2, 5, 90, 123]) --> 2
countNeg([0, -1, -2, -3]) --> 3
*/ 
const countNeg = array => array.reduce((accum, curr) => curr < 0 ? accum + 1 : accum, 0); 
console.log(countNeg([-45, 0, 0, 34, 5, 67]));
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]));
console.log(countNeg([0, -1, -2, -3]));

/*
Count A
Write a function named countA() which takes a string argument
and returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity.

Examples:
countA("TechGlobal is a QA bootcamp") --> 4 
countA("QA stands for Quality Assurance") --> 5
countA("Cypress") --> 0
*/
const countA = string => string.split('').reduce((accum, ele) => ele === 'A' || ele === 'a' ? accum + 1 : accum, 0);
console.log(countA('TechGlobal is a QA bootcamp')); 
console.log(countA('QA stands for Quality Assurance')); 
console.log(countA('Cypress')); 

/*
Count Words
Write a function named countWords() which takes a string argument 
and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.

Examples:
countWords(" Javascript is fun ") -> 3
countWords("Cypress is an UI automation tool. ") -> 6
countWords("1 2 3 4") -> 4
*/
const countWords = string => {
    let strArr = string.trim().split(' '); 
    return strArr.reduce((accum, ele) =>  ele[0] ? accum + 1 : accum, 0); 
}
console.log(countWords(' Javascript is fun '));
console.log(countWords('Cypress is an UI automation tool. '));
console.log(countWords('1 2 3 4'));

/*
Factorial
Write a function named as factorial() which takes a number as an argument 
and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:

n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.

Examples:
factorial(5) -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/
const factorial = num => {
   let product = 1; 
   for(let i = num; i >= 1; i--) {
        product *= i; 
   }
   return product; 
}
console.log(factorial(5)); 
console.log(factorial(4)); 
console.log(factorial(0)); 
console.log(factorial(1)); 