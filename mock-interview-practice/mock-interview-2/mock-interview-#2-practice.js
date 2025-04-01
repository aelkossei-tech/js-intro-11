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
Shorter way to do this using repeat(); 

const doubleOrTripleWord = word =>  word.repeat(word.length % 2 === 0 ? 3 : 2); 
*/

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
    return strArr[0] + strArr.slice(-1);
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
hasVowel("")               -> false
hasVowel("Javascript")     -> true
hasVowel("Tech Global")    -> true
hasVowel("1234")           -> false
hasVowel("ABC")            -> true
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
startVowel("Hello")        -> false
startVowel("Apple")        -> true
startVowel("orange")       -> true
startVowel("")             -> false
startVowel(" ")            -> false
startVowel("123")          -> false
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
averageOfEdges(0, 0, 0)       -> 0
averageOfEdges(0, 0, 6)       -> 3
averageOfEdges(-2, -2, 10)    -> 4
averageOfEdges(-3, 15, -3)    -> 6
averageOfEdges(10, 13, 20)    -> 15
*/
const averageOfEdges = (num1, num2, num3) => (Math.min(num1, num2, num3) + Math.max(num1, num2, num3)) /2; 
// ALSO --> const averageOfEdges = (...nums) => (Math.min(...nums) + Math.max(...nums)) / 2

console.log(averageOfEdges(0, 0, 0)); 
console.log(averageOfEdges(0, 0, 6)); 
console.log(averageOfEdges(-2, -2, 10)); 
console.log(averageOfEdges(-3, 15, -3)); 
console.log(averageOfEdges(10, 13, 20)); 


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

    return word.length >= 8 ? last4 + middle + first4 : '';
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

    for (let i = min; i <= max; i++) {
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
countNeg([-45, 0, 0, 34, 5, 67])         --> 1
countNeg([-23, -4, 0, 2, 5, 90, 123])    --> 2
countNeg([0, -1, -2, -3])                --> 3
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
countA("TechGlobal is a QA bootcamp")        --> 4 
countA("QA stands for Quality Assurance")    --> 5
countA("Cypress")                            --> 0
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
countWords(" Javascript is fun ")                    --> 3
countWords("Cypress is an UI automation tool. ")     --> 6
countWords("1 2 3 4")                                --> 4
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
const factorial1 = num => {
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


/*
Count 3 or Less
Write a function named as count3OrLess() which takes a string word as an argument 
and returns the count of the words that has 3 characters or less when invoked.

Examples:

count3OrLess("Hello") -> 0
count3OrLess("Hi John") -> 1
count3OrLess("JavaScript is fun") -> 2
count3OrLess("My name is John Doe") -> 3
count3OrLess("") -> 0
*/
const count3OrLess = string => {
    let strArr = string.split(' '); 
    return strArr.reduce((accum, curr) => curr.length <= 3 ? accum + 1 : accum, 0); 
}
console.log(count3OrLess('Hello'));
console.log(count3OrLess('Hi John'));
console.log(count3OrLess('JavaScript is fun'));
console.log(count3OrLess('My name is John Doe'));
console.log(count3OrLess(''));


/*
Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument and
returns the string back with all extra spaces removed when invoked.

Examples:
removeExtraSpaces("Hello")               -> "Hello"
removeExtraSpaces(" Hello World ")       -> "Hello World"
removeExtraSpaces(" JavaScript is fun")  -> "JavaScript is fun”
removeExtraSpaces("")                    -> ""
*/
const removeExtraSpaces = string => string.trim(); 
console.log(removeExtraSpaces('Hello')); 
console.log(removeExtraSpaces(' Hello World ')); 
console.log(removeExtraSpaces(' JavaScript is fun')); 
console.log(removeExtraSpaces('')); 


/*
Middle Number
Write a function named middleInt() which takes three number arguments 
and return the middle number.

Examples:
middleInt(1, 2, 2)      -> 2
middleInt(5, 5, 8)      -> 5
middleInt(5, 3, 5)      -> 5
middleInt(1, 1, 1)      -> 1
middleInt(-1, 25, 10)   -> 10
*/
const middleInt = (num1, num2, num3) => {
    let max = Math.max(num1, num2, num3); // out of the 3 numbers within our parameters, at least one of them will be the max of the 3
    let min = Math.min(num1, num2, num3); // same thing with min 

    return num1 + num2 + num3 - max - min; // NOW, since we now both the min & max, the middle is the only number left to find/return 
    // with this statement, we're getting the sum of all numbers --> subtracting our max/min to find our remaining middle integer 
}
console.log(middleInt(1, 2, 2)); 
console.log(middleInt(5, 5, 8)); 
console.log(middleInt(5, 3, 5)); 
console.log(middleInt(1, 1, 1)); 
console.log(middleInt(-1, 25, 10)); 

/*
First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the
array. For two elements to be considered as duplicated, value and data types of the elements must be
same.

firstDuplicate([ 3, 7, 10, 0, 3, 10 ])          --> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])           --> 5
firstDuplicate([ 5, 5, 3, 7, 4 ])               --> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) --> 'abc'
firstDuplicate([1, 2, 3])                       --> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])  --> -1 
*/

/*
What do we need to do: 
1.) Look at each element in array --> for loop/for...of loop/array methods?
 - In normal life --> we'd look at each number one by one and see if there is an instance of a duplicate ==> this is what we'd do normally 
2.) Once we find our FIRST duplicate --> we STOP
*/
const firstDuplicate = array => {
    let seenArr = []; // this will be our seperate array that will help us figure out if one of our elements is our first duplicate
    // each time we iterate an element within our array, we will determine if we've seen an element like it before 
        // --> IF we have -> stop our loop and return our first duplicated element 

    for(let i = 0; i < array.length; i++) { // using a for loop to loop through our array parameter 
        if(seenArr.includes(array[i])) return array[i]; // IF our seenArr includes our array parameter's element [i] --> then return our first duplicate (array[i]) 
        else seenArr.push(array[i]); // IF NOT seen before --> just push it into our seenArr and keep looping 
    }
    return -1; // addresses our edge case --> if there are NO duplicates at all within our parameters ==> return - 1
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])); 
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])); 
console.log(firstDuplicate([ 5, 5, 3, 7, 4 ])); 
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])); 
console.log(firstDuplicate([1, 2, 3])); 
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar'])); 
/*
Using a hash or an object {} to do the same thing: 

const firstDuplicate = (array) => {
    let seen = {}; // Object to store seen values (same thing as what we did w/ seenArr)

    for (let ele of array) {  --> using a for...of loop instead of a for loop 
        if (seen[ele]) return ele; // If already seen, return it 
        seen[ele] = true; // Mark element as seen --> you would use a flag to indicate if our element has been seen BUT not duplicate
    }
    
    return -1; // Return -1 if no duplicates found
};

console.log(firstDuplicate([3, 7, 10, 0, 3, 10])); // 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10])); // 5
console.log(firstDuplicate([5, 5, 3, 7, 4])); // 5
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc'])); // 'abc'
console.log(firstDuplicate([1, 2, 3])); // -1
console.log(firstDuplicate(['foo', 'abc', '123', 'bar'])); // -1
*/

/*
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated
elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are no
duplicates in the array. For two elements to be considered as duplicated, value and data types of the
elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])                  --> [0, -7]
getDuplicates([ 1, 2, 5, 0, 7 ])                                   --> []
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])    --> ['foo', 'a']
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])                    --> []
*/

/*
What we need to do: 
1.) We're going to loop through our array --> either through for loop/for...of loop/array methods
2.) Create a final array to push our duplicated elements in
3.) Return our duplicate array 
*/
const getDuplicates = array => {
    let seen = {}; 
    let duplicates = []; // we're storing our duplicates in an array B/C --> our final result should be an array 
    
    for(const ele of array) {
        if(seen[ele]) { // IF our element has been seen before
            if(seen[ele] === 1) {
                duplicates.push(ele); // Only push the element if it has been seen once --> that way, we don't have the same duplicated elements 
            }
            seen[ele]++; // Increase count no matter how many times we've seen it
        }
        else {
            seen[ele] = 1; // if duplicated element only shows once --> counter = 1; 
        }
    }
    return duplicates; 
}
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));


/*
Count Vowels
Write a function named as countVowels() which takes a string word as an argument 
and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i

Examples:
countVowels("Hello")             -> 2
countVowels("JavaScript is fun") -> 5
countVowels("")
*/
const countVowels = string => {
    let vowels = 'AEIOUaeiou'; 
    let counter = 0; 
    for(let i = 0; i < string.length; i++) {
        if(vowels.includes(string[i])) counter++
        else counter; 
    }
    return counter; 
}
console.log(countVowels('Hello')); 
console.log(countVowels('Javascript is fun')); 
console.log(countVowels('')); 
/*
Array Method - .reduce(): 

const countVowels = string => {
    let vowels = 'AEIOUaeiou';
    let strArr = string.split(''); 
    return strArr.reduce((accum, ele) => vowels.includes(ele) ? accum + 1 : accum, 0); 
}
console.log(countVowels('Hello')); 
console.log(countVowels('Javascript is fun')); 
console.log(countVowels('')); 
*/

/*
Reverse String Words
Write a function named as reverseStringWords() which takes a string as an argument and returns
string back with each word separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before
and after words in the given string.

Examples:
reverseStringWords("Hello World")       -> "olleH dlroW"
reverseStringWords("I like JavaScript") -> "I ekil tpircSavaJ"
reverseStringWords("Hello")             -> "olleH"
reverseStringWords("")                  -> ""
reverseStringWords(" ")                 -> ""
*/

/*
What we need to do: 
1.) Obviously loop through our string [for loop] or turn it into an array and loop through it w/ array method [.split(' ') + .map()]
*/
const reverseStringWords = string => {
    let words = string.trim().split(/\s+/); // this addresses the spaces before and after (trim()) 
    // + makes our words into an array, making sure to take care of extra spaces w/ RegEx 
    return words.map(word => word.split('').reverse().join('')).join(' '); 
    // since our string has turned into an array --> we could use .map() since it's the same-sized array
    // within our .map() function --> we're splitting our elements even more, creating an array of the letters within the word --> [array[array]]
    // we can then use .reverse() method to reverse all the letters + then .join() the letters to make them into words  
    // we use .join() again outside of .map() to make the words that are in array --> back into a string "sentence"
}
console.log(reverseStringWords('Hello World')); 
console.log(reverseStringWords('I like JavaScript')); 
console.log(reverseStringWords('Hello')); 
console.log(reverseStringWords(' ')); 
console.log(reverseStringWords('')); 
/*
const reverseStringWords = string => {
    let reversedWord = ''; 
    for(let i = string.length - 1; i >= 0; i--) {
        reversedWord += string[i]; 
    }
    return reversedWord; 
}
console.log(reverseStringWords('Hello World')); 
console.log(reverseStringWords('I like JavaScript')); 
console.log(reverseStringWords('Hello')); 
console.log(reverseStringWords(' ')); 
console.log(reverseStringWords('')); 
*/


/*
Count Consonants
Write a function named as countConsonants() which takes a string word as an argument 
and returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.

Examples:
countConsonants("Hello")              -> 3
countConsonants("Hello World")        -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")                   -> 0
*/
const countConsonants = string => {
    let strArr = string.split(''); // created an array out of our string to use .reduce() method 
    let vowels = 'AEIOUaeiou'; // created a vowels variable to help identify letters that ARE NOT vowels (consonants)
    return strArr.reduce((accum, ele) => !vowels.includes(ele) ? accum + 1 : accum, 0); 
    // if vowels ARE NOT included in out ele --> counter goes up : ELSE just return counter, starts at 0 
}
console.log(countConsonants('Hello'));
console.log(countConsonants('Hello World'));
console.log(countConsonants('JavaScript is fun'));
console.log(countConsonants(''));


/*
Count Multiple Words
Write a function named as countMultipleWords() which takes an array as an argument and returns the
count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.

Requirement: 
Write a function named as countMultipleWords() which takes an array as an argument 
and returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.

Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1   --> every time split('') method is used ==> returns an empty space as empty string ==> SO, using trim() + split(/\s+/) will account for the spaces 
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					                            -> 0
*/
/*
What we need to do: 
1.) Loop through our array, look at each element and see if there are multiple words (split(' ') --> accounting for multiple words)
2.) Count the number of elements of the array that has multiple words ==> since it's an array --> .reduce() to count our multiple words 
*/
const countMultipleWords = array => array.reduce((accum, ele) => ele.trim().split(/\s+/).length > 1 ? accum + 1 : accum, 0); 
// since we're counting our multiple words within our array --> .reduce() to return our count
// within .reduce() method --> we're taking our element and trim() the extra spaces + using RegEx to address the extra spaces in between 
// now that we took care of the spaces issue --> we get our words w/o any spaces --> SO IF our words' length is more than 1 then add to the counter 
console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])); 
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])); 
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])); 
console.log(countMultipleWords([ ])); 


/*
FizzBuzz
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed
with below requirements when invoked.
• You need to find all the numbers within the range of given 2 numbers (both inclusive) and store
them in a string from smallest to greatest number with a ' | ' separator for each number.
• You will need to convert numbers divisible by 3 to 'Fizz'
• You will need to convert numbers divisible by 5 to 'Buzz'
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
• The rest will stay the same.

NOTE: Make your code dynamic that works for any numbers.

Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5) -> "Buzz"
fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"
*/
const fizzBuzz = (num1, num2) => {
    let max = Math.max(num1, num2); 
    let min = Math.min(num1, num2); 
    let finalArr = []; 
    
    for(let i = min; i <= max; i++) {
        if(i % 3 === 0 && i % 5 === 0) finalArr.push('FizzBuzz'); 
        else if(i % 3 === 0) finalArr.push('Fizz'); 
        else if(i % 5 === 0) finalArr.push('Buzz'); 
        else finalArr.push(i); 
    }
    return finalArr.join(' | '); 
}   
console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));


/*
Palindrome
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward

Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")      -> false
isPalindrome("Kayak")      -> true
isPalindrome("civic")      -> true
isPalindrome("abba")       -> true
isPalindrome("ab a")       -> false
isPalindrome("123454321")  -> true
isPalindrome("A")          -> true
isPalindrome("")           -> true
*/
/*
What we need to do: 
1.) We need to loop through our string parameter ==> either using for loop OR create it into an array + use reverse() method 
2.) Compare our given string to our reversed string --> if it is the same ==> TRUE, else = FALSE: 
3.) return true/false 
*/
const isPalindrome = string => {
    let word = string.toLowerCase(); 
    // this is our string parameter --> BUT we're trying to ignore case sensitivity ==> SO make everything lowercase
    let reversedWord = word.split('').reverse().join(''); 
    // same mentality with above statement, EXCEPT we're making our string into an array and then REVERSING IT and then convert it back to string
    if(word === reversedWord) return true; // now comes the easy part --> if our string is the same as our reversed string ==> TRUE [it's a palindrome]
    return false; 
}
console.log(isPalindrome('Hello'));
console.log(isPalindrome('Kayak'));
console.log(isPalindrome('civic'));
console.log(isPalindrome('abba'));
console.log(isPalindrome('ab a'));
console.log(isPalindrome('123454321'));
console.log(isPalindrome('A'));
console.log(isPalindrome(''));

/*
Prime Number
Write a function named as isPrime() which takes a number as an argument and returns true if the
number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be
divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.

Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…

NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) -> true
isPrime(2) -> true
isPrime(29) -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/
/*
What we need to do: 
1.) Somehow create a loop that will look at our number parameter --> then determine if it can be a prime number or not
    - within this loop --> we will return TRUE if our number parameter is a prime # and FALSE if it's not
    - In order to create this loop --> we need to understand the nature of Prime numbers first: 
        - prime numbers can ONLY be divisible by its self/1 
        - smallest prime number is 2 [even though many numbers after it is divisible by it]
    - SO --> our conditions for our loop is thus: 
        - using a for loop ==> since we know our smallest number is 2 
        - if this number is divisible by 2 ==> false; 
        - any number < 2 ==> can already eliminiate them in this function 

Bilal's strategy when it comes to this question: 
- taking a random prime number and see if it can be divided by the numbers before it 
*/
const isPrime = num => {
    if(num < 2) return false; // any number LESS than 2 is not prime
    if(num === 2 || num === 3) return true; // 2 & 3 are the SMALLEST prime numbers 

    for(let i = 3; i * i <= num; i += 2) { 
    // since we addressed 2 & 3 in the earlier conditions AND we see the pattern of primes are odd --> for loop
        // we start at 3, not 2 --> since we already checked 2 above 
        // every iteration will equal i --> we then determine if the square of our i is LESS THAN OR EQUAL TO our number paramter
        // since there's a pattern w/ odds = prime --> i += 2 [i + 2] ==> easier/faster 
        if(num % i === 0) return false; 
        // NOW if our num is divisible by i (our iteration) --> then it is NOT a prime number ==> FALSE
    }
    return true; // else ==> TRUE: 
}
console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));


/*
Add Two Arrays
Write a function named add() which takes two array of numbers as argument 
and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.

add([3, 0, 0, 7, 5, 10], [6, 3, 2])                    -->  [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])   -->  [16, 11, 9, 3, 2, 7, 5, 10, 34]
add([-5, 6, -3, 11], [5, -6, 3, -11])                  -->  [0, 0, 0, 0]
*/
/*
What we need to do: 
1.) Obviously loop through both arrays --> in a way that will check each element of each array and add them together 
    - since some arrays are bigger than others --> we need to take array size into consideration 
    - maybe have a seperate array(?)
2.) Create conditions that will address the array size problem --> if array2 > array1 ==> then push the remainder array2 elements that don't have another number to add to, to our new array
3.) Return our new array filled w/ sums of our two array parameters  
*/
const add = (array1, array2) => { // 2 array parameters 
    let finalArr = []; // we have a final array to have our sum of the 2 array parameters 
    let maxArr = Math.max(array1.length, array2.length); // we're finding the max (longer) array out of the 2 --> use that info for out for loop
    
    for(let i = 0; i < maxArr; i++) { // our max is whichever array is the longest of the two 
        let sum = (array1[i] || 0) + (array2[i] || 0);  // created a sum variable --> and the conditions within this variable (|| 0) help to address if one array has no more numbers to add (so 0)
        finalArr.push(sum); // then we just push our sum into our finalArr
    }
    return finalArr; 
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); 
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); 
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); 


/*
No Elements With A
Write a function named noA() which takes an array of strings as argument 
and will return a new array with all elements starting with "A" or "a" replaced with "###".

Examples:
noA(["javascript", "hello", "123", "xyz"]) -> ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) -> ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"])  -> ["###", "###", "###", "###", "###"]
*/
const noA = array => {
    let finalArr = []; 
    for(let i = 0; i < array.length; i++) {
        if(array[i].startsWith('A') || array[i].startsWith('a')) finalArr.push('###'); 
        else finalArr.push(array[i]); 
    }
    return finalArr; 
}
console.log(noA(["javascript", "hello", "123", "xyz"])); 
console.log(noA(["apple", "123", "ABC", "javascript"])); 
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]) ); 


/*
No Elements Divisible By 3 and 5
Write a function named no3and5() which takes an array of integer numbers as argument 
and will return a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99

If element can be divided by 3, replace it with 100

If element can be divided by both 3 and 5, replace it with 101

Examples:
no3and5([7, 4, 11, 23, 17])        -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])              -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15])  -> [99, 11, 100, 13, 14, 101]
*/
const no3and5 = array => {
    let finalArr = []; 

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 15 === 0) finalArr.push(101); 
        else if(array[i] % 5 === 0) finalArr.push(99); 
        else if(array[i] % 3 === 0) finalArr.push(100); 
        else finalArr.push(array[i]); 
    }
    return finalArr; 
}
console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));


/*
No Elements Equals 13
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.

Examples:
no13([1, 2, 3 ,4])           -> [1, 2, 3 ,4]
no13([13, 2, 3])             -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])                     -> []
*/
const no13 = array => {
    finalArr = []; 

    for(let i = 0; i < array.length; i++) {
        if(array[i] === 13) finalArr.push(0); 
        else finalArr.push(array[i]); 
    }
    return finalArr; 
}
console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13 , 13, 13]));
console.log(no13([]));


/*
Remove Duplicates
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.

Examples:

removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])          -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3])                           -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])                       -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])                 -> ["1", "2", "3"]
*/
const removeDuplicates = array => {
    let seenArr = []; 

    for(let i = 0; i < array.length; i++) {
        if(!seenArr.includes(array[i])) seenArr.push(array[i]); 
        else array[i]; 
    }
    return seenArr; 
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));


/*
No Digits
Write a function named noDigit() which takes a string argument and 
returns a new string with all digits removed from the original string.

Examples:
noDigit("")                    -> ""
noDigit("Javascript")          -> "Javascript"
noDigit("123Hello")            -> "Hello"
noDigit("123Hello World149")   -> "Hello World”
noDigit("123Tech456Global149") -> "TechGlobal"
*/
const noDigit = string => {
    let strArr = string.split(''); 
    return strArr.filter(ele => /[A-Za-z]/.test(ele)).join(''); 
}
console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));


/*
No Vowel
Write a function named noVowel() which takes a string argument 
and returns a new string with all vowels removed from the original string.

Examples:
noVowel("TechGlobal") -> "TchGlbl"
noVowel("AEOxyz")     -> "xyz"
noVowel("Javascript") -> "Jvscrpt"
noVowel("")           -> ""
noVowel("125$")       -> "125$"
*/
const noVowel = string => {
    let strArr = string.split(''); 
    let vowels = 'AEIOUaeiou'; 
    return strArr.filter(ele => !vowels.includes(ele)).join(''); 
}
console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));


/*
Sum Of Digits
Write a function named sumOfDigits() which takes a string argument 
and returns sum of all digits from the original string.

Examples:
sumOfDigits("Javascript")       -> 0
sumOfDigits("John’s age is 29") -> 11
sumOfDigits("$125.0")           -> 8
sumOfDigits("")                 -> 0
*/
const sumOfDigits = string => {
    let strArr = string.split(''); 
    let finalArr = []; 

    for(const ele of strArr) {
        if(ele >= '0' && ele <= '9') finalArr.push(Number(ele)); 
    }
    return finalArr.reduce((accum, ele) => ele + accum, 0); 
}
console.log(sumOfDigits('Javascript')); 
console.log(sumOfDigits(`John's age is 29`)); 
console.log(sumOfDigits('$125.0')); 
console.log(sumOfDigits('')); 


/*
Array Factorial
Write a function named arrFactorial() which takes an array of numbers as argument 
and return the array with every number replaced with their factorials.

Examples:
arrFactorial([1, 2, 3 ,4])        -> [1, 2, 6, 24]
arrFactorial([0, 5])              -> [1,120]
arrFactorial([5 , 0, 6])          -> [120, 1, 720]
arrFactorial([])                  -> []
*/
const factorial = num => { 
    let product = 1; 
    for(let i = num; i >= 1; i--){ 
        product *= i; 
    }
    return product; 
}

const arrFactorial = array => array.map(ele => factorial(ele)); 

console.log(arrFactorial([1, 2, 3 ,4])); 
console.log(arrFactorial([0, 5])); 
console.log(arrFactorial([5, 0, 6])); 
console.log(arrFactorial([])); 