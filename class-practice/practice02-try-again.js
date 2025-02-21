/*
Requirement:
Write a program that extracts expected values from a given String using JS 
String functions.

"I like apples and oranges"  -> "APPLE"
"JavaScript is not a scripting programming language"   -> "JavaScript"
"I don't like books"  -> "I like books"
*/

let s1 = 'I like apples and oranges' // 1.) we probably need to slice 2.) lowercase --> UPPERCASE
console.log(s1.slice(7,12).toUpperCase()); 

let s2 = 'JavaScript is not a scripting programming language.' // Since we only need the first word in the string --> slice? 
console.log(s2.slice(0, 11)); 

let s3 = "I don't like books"; /*
 1.) Use a string method that can REPLACE a string with a string 
 (.replace('first time you see your substring in a string', 'what you want to replace it with'));
 */
console.log(s3.replace("don't ",'')); 

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

s4 = 'JavaScript'; 
console.log(`The length of the string is ${s4.length}`); // Find length of a string by using .length
console.log(`The first char is = ${s4[0]}`); // First character is always: variable[0]
console.log(`The last char is = ${s4.slice(-1)}`); // Last character is always variable.slice(-1) OR variable[variable.length - 1]; 

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
*/
s5 = 'exhibit'; // odd length, so 3, 5, 7, 9, etc. 
/*
SO, we know that there's going to be only ONE midpoint when it comes to odd lengths 
ALSO, we have to remember string characters are calculated by indices, so start at 0 
What we NEED to do --> 
1.) Find a pattern between odd numbers and their middle character
2.) Create a method in which to take away the first side and second side, adjacent to the middle character (slice?)
3.) Find the character itself within property access/.at()

SO the .length of a string depends, but we know that our middle character is only substring and 
each side is going to be even 

Normal logic = if we're counting from 1 to 3 --> 2 is our middle 
BUT with JavaScript logic => we're counting from 0, so we should just substract 
In order to get the middle with anything, you divide by 2
SO ==> (length - 1/2) 
*/
console.log(s5[(s5.length -1)/2]); 


/*Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1: let s3 = "";
Expected Result 1: ""

Test Data 2: let s3 = "abcd";
Expected Result 2: "bc"

Test Data 3: let s3 = "JavaScript";
Expected Result 3: "Sc"
*/


/*
UNLIKE odd lengths (Task03) --> even lengths are gonna give us 2 middle characters (one on the left and on the right)
SO --> knowing that we're counting from 0, we're defintiely going to have a (-1) somewhere + 
knowing that finding a middle is always (/2) 
What we NEED to do: 
1.) Figure out a way to seperate the middle characters [try to see a pattern between even lengths]
2.) Come up with DYNAMIC equation, that could work with any even length 

'Number' => 6 letters, and our middle characters would be 'mb' [2, 3]
'Birthday' ==> 8 letters, and our middle characters would be 'th'[3, 4]

Left-Middle Index: (string.length/2) -1  [BECAUSE we're always 1 away from actual middle, so - 1 ]
Right-Middle Index: string.length/2      [BECAUSE to find actual middle, you'd just divde the string length by 2]

what this shows us is that --> to get to the 1st left character 
*/
let s6 = "JavaScript"; // Length = 10
console.log(s6.slice((s6.length / 2) - 1, (s6.length / 2) + 1)); // Sc

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
s7 = 'JavaScript'; 
console.log(`The first two characters are = ${s7.slice(0, 2)}`); // We're extracting first 2 characters --> SLICE and then the to indices (2 not included)
console.log(`The last two characters are = ${s7.slice(-2)}`); // We're extracting last 2 characters --> SLICE and using negative indices to go BACKWORDS (-2)
console.log(`The other characters are = ${s7.slice(2, -2)}`); // Knowing that the first 2 characters end at 2 + the last 2 characters end at -2 ==> use those numbers as ranges --> -2, and 2

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
s8 = 'JavaScript'; // if first character === last character --> TRUE; if not --> FALSE
console.log(s8.slice(0, 2) === s8.slice(-2)); 


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

s9 = '1234'; // get rid of the First and Last characters of given 2 string values
s10 = 'Green'; 
// THEN add s9 + s10 to get the result ==> concat the results you get from Step 1 (getting rid of 1st and last chars)
console.log(s9.slice(1, -1) + s10.slice(1, - 1)); 

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
s10 = 'xxgreenxx'; // starts AND ends = xx 
console.log(s10.slice(0,2) && s10.slice(-2) === 'xx');


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
s11 = 'JavaScript is HELL'; // swaps the FIRST and LAST word of a given sentences as a string 
// SO --> we're trying to find a dynamic way to switch JAVASCRIPT with HELL [and can also be used in s11 = ]