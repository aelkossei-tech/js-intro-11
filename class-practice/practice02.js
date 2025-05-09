/*
Requirement:
Write a program that extracts expected values from a given String using JS 
String functions.

"I like apples and oranges"  -> "APPLE"
"JavaScript is not a scripting programming language"   -> "JavaScript"
"I don't like books"  -> "I like books"
*/

let str1 = "I like apples and orange"; // "I like apples and oranges"  -> "APPLE"
let str2 = "JavaScript is not a scripting programming language"; //"JavaScript is not a scripting programming language"   -> "JavaScript"
let str3 = "I don't like books"; // "I don't like books"  -> "I like books"

console.log(str1.slice(7, 12).toUpperCase()); // 1.) we need to figure out how to get only 'apple' --> slice.(7, 12)  2.) Then we need to put it in uppercase --> .toUppercase()
console.log(str2.slice(0, 10)); // 1.) We're trying to only extract 'JavaScript' (which is the first word) 2.) Figure out how far the indexes go --> .slice(0, 10)
console.log(str3.replace("don't ",'')); //1.) We're trying to take away 'dont' --> replace don't with a space ==> replace("don't", " "); 

/*
Task02

Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 
-if it has any vowel, then print true
-Else, print false
Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1: let s1 = "JavaScript";
Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true

Test Data 2: let s1 = "";
Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/

s1 = 'TechGlobal';
console.log(`The length is ${s1.length}`); // to figure out the length of any string ==> variable.length 
console.log(`The first character is ${s1[0]}`); // to figure out the FIRST character ==> always variable[0]
console.log(`The last character is ${s1[s1.length - 1]}`); // to figure out the LAST character ==> always variable[variable.length - 1]

let hasVowel = /[aieou]/i.test(s1);  
console.log(hasVowel)

/*
Task03

Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1: let s2 = "x";
Expected Result 1: "x"

Test Data 2: let s2 = "abc";
Expected Result 2: "b"

Test Data 3: let s2 = "civic";
Expected Result 3: "v"

string    length    middle index
hello       5           2       (str.length - 1)/ 2 [use this only for odd numbers only!] 
tatyana     7           3       (str.length - 1)/ 2 OR s2[Math.floor(s2.length / 2)]
abc         3           1       (str.length - 1)/ 2 
*/
let s2 = 'civic'; // assign an odd-length string to a variable 
console.log(s2[(s2.length - 1)/2]); // b or v or y --> according to the above example 
// think about this logically, there's always going to be 1 middle character, since it'll be odd -->  (str.length - 1)/ 2

/*
Task04

Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1: let s3 = "";
Expected Result 1: ""

Test Data 2: let s3 = "abcd";
Expected Result 2: "bc"

Test Data 3: let s3 = "JavaScript";
Expected Result 3: "Sc"

string    length    middle index
abcd       4           1 - 2      bc
friend     6           2 - 3      ie
12345678   8           3 - 4      

str[str.length/2 - 1] + str[str.length/2 - 1]  ==> for EVEN numbers 
str.slice(str.length/2 -1, str.length + 1)
*/ 
let s3 = "JavaScipt "

console.log(s3[s3.length/2 - 1] + s3[s3.length/2 - 1] )

/*
Task05

Requirement:
Write a program that divides the given String. Assume the length of the 
String will at least be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

Test Data 1: let s4 = "abcd";
Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = ''

Test Data 2: let s4 = "JavaScript";
Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/ 
let s4 = 'Tesla'; 
console.log(`This is the first characters ${s4.slice(0, 2)}`); 
console.log(`This is the last characters ${s4.slice(-2)}`); 
console.log(`This other characters = ${s4.slice(2, -2)}`); 

/*
Task06

Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print 
false.

Test Data 1: let s5 = "ab";;
Expected Result 1: true

Test Data 2: let s5 = "abcd";
Expected Result 2: false

Test Data 3: let s5 = "12ab12";;
Expected Result 1: true

Test Data 4: let s5 = "JavaScript";
Expected Result 4: false
*/
let s5 = 'Nissan'
console.log(s5.slice(0, 2) === s5.slice(-2)); // 1st 2 characters = variable.slice(0, 2) + Last 2 Characters = variable.slice(-2)
console.log(s5.endsWith(s5.slice(0, 2))); 
console.log(s5.startsWith(s5.slice(-2))); 

/*
Task07

Requirement:
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 

Test Data 1:
let s61 = "orange";
let s62 = "6";
Expected Result 1: rang

Test Data 2:
let s61 = "1234";
let s62 = "Green";
Expected Result 2: 23ree

Test Data 3:
let s61 = "123456";
let s62 = "Blue";
Expected Result 3: 2345lu

Test Data 4:
let s61 = "Yellow";
let s62 = "Red";
Expected Result 4: elloe
*/ 

s61  = 'Yellow';
s62 = 'Red'; 

console.log(s61.slice(1, -1) + s62.slice(-1, 1)); 

/*
Task08

Requirement:
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false

Test Data 1: let s7 = "";
Expected Result 1: false

Test Data 2: let s7 = "red";
Expected Result 2: false

Test Data 3: let s7 = "green";
Expected Result 3: false

Test Data 4: let s7 = "xxbluexx";
Expected Result 4: true
*/ 
s7 = 'xxbluexx'
console.log(s7.slice(0, 2) === 'xx') && (s7.slice(-2) === 'xx'); 
console.log(s7.startsWith('xx') && s7.endsWith('xx')); 

/*
Task09

Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1: let s8 = "";
Expected Result 1: ""

Test Data 2: let s8 = " ";
Expected Result 2: " "

Test Data 3: let s8 = "I like Apple";
Expected Result 3: "Apple like I"

Test Data 4: let s8 = "JavaScript is nice to learn";
Expected Result 4: "learn is nice to JavaScript"
___ ____ ____ _____ 

first word always starts with index 0  and ends at first space 
last word is always the word after the last space 
*/
let s8 = 'I like Apple'; 

let first = s8.slice(0, s8.indexOf(' ')); 
let last = s8.slice(s8.lastIndexOf(' ') + 1); 
let middle = s8.slice(s8.indexOf(' '), s8.lastIndexOf(' ') + 1); 

console.log(first, last); // I Apple 
console.log(middle); 
console.log(last + middle + first); 

const words = s8.split(' '); 
let fWord = words[0]; 
let lWord = words[words.length - 1]; 

/*
Task10

Requirement:
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.

Test Data 1: let s9 = " Good morning";
Expected Result 1: 2

Test Data 2: let s9 = "Hello    ";
Expected Result 2: 1

Test Data 3: let s9 = "I like Apple";
Expected Result 3: 3

Test Data 4: let s9 = "JavaScript is nice to learn";
Expected Result 4: 5

RegEx --> Regular Expression 
*/ 

s9 = "Hello    ";

console.log(s9.trim().split(/\s+/).length); 


