/*
Find if a number is even or not.
Write a program that generates a random number between 1 and 10 (both inclusive).
If the random number is even, print true.
Otherwise, print false.
Examples:
1 -> false
2 -> true
5 -> false
10 -> true
*/
let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber); 

let evenNumber = randomNumber % 2 === 0; 
console.log(evenNumber); 


/*
Find if a number is odd or not.
Write a program that generates a random number between 1 and 10 (both inclusive).
If the random number is odd, print true.
Otherwise, print false.
Examples:
1 -> true
2 -> false
5 -> true
10 -> false
*/
let randomNumber2 = Math.floor(Math.random() * 10 + 1); 
console.log(randomNumber2); 

let oddNumber = randomNumber2 % 2 !== 0; 
console.log(oddNumber); 


/*
Find if a number is positive or not.
Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is positive, print true.
Otherwise, print false.
Examples:
-5 -> false
-1 -> false
0 -> false
1 -> true
5 -> true
*/
let randNum1 = Math.floor(Math.random() * 11 - 5); // remember, min is at the end
console.log(randNum1); 

let positive = randNum1 > 0; 
console.log(positive); 

/*
Find if a number is negative or not.
Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is negative, print true.
Otherwise, print false.
Examples:
-5 -> true
-1 -> true
0 -> false
1 -> false
5 -> false
*/
let randNum2 = Math.floor(Math.random() * 11 - 5); 
console.log(randNum2); 

let negativeNum = randNum2 < 0; 
console.log(negativeNum); 


/* 
Find if a number is divisible by 5 or not.
Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number is divisible by 5, print true.
Otherwise, print false.
Examples:
1 -> false
5 -> true
20 -> true
37 -> false
50 -> true
*/
let randNumb = Math.floor(Math.random() * 50 + 1); 
console.log(randNumb); 

let divideby5 = randNumb % 5 === 0; 
console.log(divideby5); 


/*
Find if a number is divisible by 7 or not.
Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number is divisible by 7, print true.
Otherwise, print false.
Examples:
1 -> false
7 -> true
35 -> true
49 -> true
50 -> false
*/
let randomNumber3 = Math.floor(Math.random() * 50 + 1); 
console.log(randomNumber3); 

let divideby7 = randomNumber3 % 7 === 0;
console.log(divideby7); 


/*
Calculate the sum of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the sum of the numbers and print it.
Examples:
3, 5 -> 8
7, 3 -> 10
5, 5 -> 10
1, 10 -> 11
10, 1 -> 11
*/
let ran1 = Math.floor(Math.random() * 10 + 1); 
let ran2 = Math.floor(Math.random() * 10 + 1); 
console.log(ran1, ran2);

let randomSum = ran1 + ran2; 
console.log(randomSum); 


/*
Calculate the absolute difference between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the absolute difference of the numbers and print it.
Examples:
3, 5 -> 2
7, 3 -> 4
5, 5 -> 0
1, 10 -> 9
10, 1 -> 9
*/
let ran3 = Math.floor(Math.random() * 10 + 1); 
let ran4 = Math.floor(Math.random() * 10 + 1);
console.log(ran3, ran4); 

let absDifference = Math.abs(ran3 - ran4); 
console.log(absDifference); 


/*
Calculate the product of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the product of the numbers and print it.
Examples:
3, 5 -> 15
7, 3 -> 21
5, 5 -> 25
1, 10 -> 10
10, 1 -> 10
*/
let ran5 = Math.floor(Math.random() * 10 +1); 
let ran6 = Math.floor(Math.random() * 10 +1); 
console.log(ran5, ran6); 

let randProduct = ran5 * ran6; 
console.log(randProduct); 


/*
Calculate the square of a number.
Write a program that generates a random number between 1 and 10 (both inclusive).
Calculate the square of the number and print it.
Examples:
1 -> 1
2 -> 4
5 -> 25
10 -> 100
*/
let ran7 = Math.floor(Math.random() * 10 + 1); 
console.log(ran7); 

let randSqr = ran7 * ran7; // OR ran7 ** 2
console.log(randSqr); 


/*
Calculate the cube of a number.
Write a program that generates a random number between 1 and 10 (both inclusive).
Calculate the cube of the number and print it.
Examples:
1 -> 1
2 -> 8
5 -> 125
10 -> 1000
*/
let rand = Math.floor(Math.random() * 10 + 1); 
console.log(rand); 

let randCube = rand ** 3; 
console.log(randCube); 


/*
Convert miles to kilometers.
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered
as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
Examples:
1 -> 1.6
2 -> 3.2
5 -> 8
*/
let randomMiles= Math.floor(Math.random() * 10 + 1); 
console.log(randomMiles); 

let kilometers = randomMiles * 1.6; 
console.log(kilometers); 


/*
Convert kilograms to pounds.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered
as a kilogram unit.
Convert kilogram unit to pounds and print it.
Please assume that 1 kilogram equals 2.2 pounds.
Examples:
1 -> 2.2
20 -> 44
75 -> 165
100 -> 220
*/
let randKilo = Math.floor(Math.random() * 100 + 1); 
console.log(randKilo);

let pounds = randKilo * 2.2; 
console.log(pounds); 


/*
Find if 2 numbers are equal or not.
Write a program that generates 2 random numbers between 1 and 3 (both inclusive).
If the numbers are equal, print true.
Otherwise, print false.
Examples:
1, 1 -> true
1, 2 -> false
2,3 -> false
2,2 -> true
3, 3 -> false
*/
let random1 = Math.floor(Math.random() * 3 + 1);
let random2 = Math.floor(Math.random() * 3 + 1);
console.log(random1, random2); 

let randEqual = random1 === random2; 
console.log(randEqual); 


/*
Find if an age is allowed to get Driver License or not.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered
as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
Examples:
1 -> false
15 -> false
16 -> true
45 -> true
100 -> true
*/
let randomAge = Math.floor(Math.random() * 100 + 1); 
console.log(randomAge); 

let driverAge = randomAge >= 16; 
console.log(driverAge); 


/*
Find the greatest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Find the greatest of the numbers and print it.
Examples:
3, 5 -> 5
7, 3 -> 7
5, 5 -> 5
1, 10 -> 10
10, 1 -> 10
*/
let rand1 = Math.floor(Math.random() * 10 + 1); 
let rand2 = Math.floor(Math.random() * 10 + 1); 
console.log(rand1, rand2); 

let greatestNum = Math.max(rand1, rand2); 
console.log(greatestNum); 


/*
Find the greatest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Find the greatest of the numbers and print it.
Examples:
3, 5, 2 -> 5
7, 3, 1 -> 7
5, 5, 5 -> 5
1, 10, 9 -> 10
10, 1, 2 -> 10
*/
let rand3 = Math.floor(Math.random() * 10 + 1); 
let rand4 = Math.floor(Math.random() * 10 + 1); 
let rand5 = Math.floor(Math.random() * 10 + 1); 
console.log(rand3, rand4, rand5); 

let greatestNumber = Math.max(rand3, rand4, rand5); 
console.log(greatestNumber); 


/*
Find the smallest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Find the smallest of the numbers and print it.
Examples:
3, 5 -> 3
7, 3 -> 3
5, 5 -> 5
1, 10 -> 1
10, 1 -> 1
*/
let randomNumbers1 = Math.floor(Math.random() * 10 + 1); 
let randomNumbers2 = Math.floor(Math.random() * 10 + 1); 
console.log(randomNumbers1, randomNumbers2); 

let smallestNum = Math.min(randomNumbers1, randomNumbers2); 
console.log(smallestNum); 


/* 
Find the smallest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Find the smallest of the numbers and print it.
Examples:
3, 5, 2 -> 2
7, 3, 1 -> 1
5, 5, 5 -> 5
1, 10, 9 -> 1
10, 1, 2 -> 1
*/
let random5 = Math.floor(Math.random() * 10 + 1); 
let random6 = Math.floor(Math.random() * 10 + 1); 
let random7 = Math.floor(Math.random() * 10 + 1); 
console.log(random5, random6, random7); 

let smallestNumber = Math.min(random5, random6, random7); 
console.log(smallestNumber); 


/*
Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the average of the numbers and print it.
Examples:
3, 5, 7 -> 5
7, 3, 2 -> 4
5, 5, 5 -> 5
1, 10, 7 -> 6
10, 1, 1 -> 4
*/
let randomNum2 = Math.floor(Math.random() * 10 + 1); 
let randomNum3 = Math.floor(Math.random() * 10 + 1); 
let randomNum4 = Math.floor(Math.random() * 10 + 1); 
console.log(randomNum2, randomNum3, randomNum4); 

let randAverage = (randomNum2 + randomNum3 + randomNum4)/ 3; 
console.log(randAverage); 


/*
Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the greatest and the smallest numbers and print their absolute difference.
Examples:
3, 5, 2 -> 3
7, 3, 1 -> 6
5, 5, 5 -> 0
1, 10, 9 -> 9
10, 1, 2 -> 9
*/ 
let random_1 = Math.floor(Math.random() * 10 + 1); 
let random_2 = Math.floor(Math.random() * 10 + 1); 
let random_3 = Math.floor(Math.random() * 10 + 1); 
console.log(random_1, random_2, random_3); 

let randomMax = Math.max(random_1, random_2, random_3); 
let randomMin = Math.min(random_1, random_2, random_3); 
console.log(randomMax, randomMin); 

let absDiff = Math.abs(randomMax - randomMin); 
console.log(absDiff); 


/*
Find the quarter of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which quarter of the range the number falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
Examples:
15 -> 1st quarter
73 -> 3rd quarter
39 -> 2nd quarter
87 -> 4th quarter
*/
let rand0mNumber = Math.floor(Math.random() * 100) + 1; 
console.log(rand0mNumber); 
if(rand0mNumber <= 25)  console.log('1st quarter'); 
else if(rand0mNumber <= 50) console.log('2nd quarter'); 
else if(rand0mNumber <= 75) console.log('3rd quarter'); 
else '4th quarter'; 


/*
Find the midpoint of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100
Examples:
15 -> 1st half
50 -> 1st half
51 -> 2nd half
87 -> 2nd half
100 -> 2nd half
*/
let rand0mNum = Math.floor(Math.random() * 100) + 1;
console.log(rand0mNum); 

console.log(rand0mNum <= 50 ? '1st half' : '2nd half'); 

/*
Find if sum of 2 random numbers is even or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.
Examples:
3, 5 -> true
7, 3 -> true
5, 5 -> true
1, 10 -> false
10, 1 -> false
*/
let rando1 = Math.floor(Math.random() * 10) + 1; 
let rando2 = Math.floor(Math.random() * 10) + 1; 
console.log(rando1, rando2); 

console.log(rando1 + rando2); 
let sumEven = (rando1 + rando2) % 2 === 0; 
console.log(sumEven); 


/*
Find if product of 2 random numbers is odd or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the product of the random numbers is odd, print true.
Otherwise, print false.
Examples:
3, 5 -> true
7, 3 -> true
5, 5 -> true
1, 10 -> false
10, 1 -> false
*/
let rando3 = Math.floor(Math.random() * 10) + 1; 
let rando4 = Math.floor(Math.random() * 10) + 1; 
let randoProduct = rando3 * rando4; 
console.log(randoProduct)
let productOdd = randoProduct % 2 !== 0; 
console.log(productOdd);


/*
Area of a rectangle
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y
Examples:
rectangleArea(5, 4) -> 20
rectangleArea(3, 7) -> 21
rectangleArea(6, 10) -> 60
*/
function rectangleArea(side1, side2){
    return side1 * side2; 
}
console.log(rectangleArea(5,4)); // 20 
console.log(rectangleArea(3,7)); // 21
console.log(rectangleArea(6,10)); // 60 


/*
Perimeter of a rectangle.
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when
invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Perimeter = 2 * (x + y)
Examples:
rectanglePerimeter(5, 4) -> 18
rectanglePerimeter(3, 7) -> 20
rectanglePerimeter(6, 10) -> 32
*/
const rectanglePerimeter = (side1, side2) => 2 * (side1 + side2); 
console.log(rectanglePerimeter(5, 4)); // 18
console.log(rectanglePerimeter(3, 7)); // 20
console.log(rectanglePerimeter(6, 10)); // 32


/*
Area of a square
Write a function named as squareArea() which calculates the area of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:Area = x * x
Examples:
squareArea(5) -> 25
squareArea(3) -> 9
squareArea(6) -> 36
*/
const squareArea = (side) => side * side; 
console.log(squareArea(5)); // 25 
console.log(squareArea(3)); // 9 
console.log(squareArea(6)); // 36


/*
Perimeter of a square.
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula: Perimeter = 4 * x
Examples:
squarePerimeter(5) -> 20
squarePerimeter(3) -> 12
squarePerimeter(6) -> 24
*/
const squarePerimeter = (side) => 4 * side; 
console.log(squarePerimeter(5)); // 20
console.log(squarePerimeter(3)); // 12
console.log(squarePerimeter(6)); // 24


/*
Double The Word
Write a function named as doubleWord() which takes a string word as an argument and returns the
given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
doubleWord("Tech") -> "TechTech"
doubleWord("Global") -> "GlobalGlobal"
*/
function doubleWord(word){ //OR const doubleWord = (word) => word + word;
    return word + word; 
}
console.log(doubleWord('Tech')); // TechTech
console.log(doubleWord('Global')); // GlobalGlobal


/*
First Character
Write a function named as firstCharacter() which takes a string word as an argument and returns the
first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
firstCharacter("Tech") -> "T"
firstCharacter("Global") -> "G"
*/
const firstCharacter = word => word[0]; 
console.log(firstCharacter('Tech')); // 'T'
console.log(firstCharacter('Global')); // 'G'


/*
First Two Characters
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns
the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
Examples:
firstTwoCharacters("Tech") -> "Te"
firstTwoCharacters("Global") -> "Gl"
firstTwoCharacters("") -> ""
firstTwoCharacters(" ") -> " "
firstTwoCharacters("1") -> "1"
*/

const firstTwoCharacters = (word) => word.slice(0, 2); 
console.log(firstTwoCharacters('Tech')); 
console.log(firstTwoCharacters('Global')); 
console.log(firstTwoCharacters('')); 
console.log(firstTwoCharacters(' ')); 
console.log(firstTwoCharacters('1')); 


/*
Last Character
Write a function named as lastCharacter() which takes a string word as an argument and returns the last
character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
lastCharacter("Tech") -> "h"
lastCharacter("Global") -> "ll"
lastCharacter(" ") -> " "
lastCharacter("123") -> "3"
*/
const lastCharacter = (word) => word.slice(-1); 
console.log(lastCharacter('Tech')); // h 
console.log(lastCharacter('Global')); // l 
console.log(lastCharacter('')); // empty
console.log(lastCharacter('123')); // 3


/*
Last Two Characters
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns
the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples:
lastTwoCharacters("Tech") -> "ch"
lastTwoCharacters("Global") -> "al"
lastTwoCharacters("") -> ""
lastTwoCharacters(" ") -> " "
lastTwoCharacters("1") -> "1"
*/
const lastTwoCharacters = (word) => word.slice(-2); 
console.log(lastTwoCharacters('Tech')); // ch
console.log(lastTwoCharacters('Global')); // al 
console.log(lastTwoCharacters('')); // empty
console.log(lastTwoCharacters(' ')); // empty
console.log(lastTwoCharacters('1')); // 1 


/*
First and Last Characters
Write a function named as firstLast() which takes a string word as an argument and returns the first and
the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples:
firstLast("Tech") -> "Th"
firstLast("TechGlobal") -> "Tl"
firstLast("") -> ""
firstLast(" ") -> " "
firstLast("1") -> "1"
firstLast("abcde") -> ae
*/
function firstLast(word){
    if (word.length >= 2) return word[0] + word.slice(-1); 
    else return word
    }
console.log(firstLast('Tech'));
console.log(firstLast('TechGlobal'));
console.log(firstLast(''));
console.log(firstLast(' '));
console.log(firstLast('1'));
console.log(firstLast('abcde'));


/*
Has Five
Write a function named as hasFive() which takes a string word as an argument and returns true if given
string has at least 5 characters, and false otherwise when invoked.
Examples:
hasFive("Tech") -> false
hasFive("Global") -> true
hasFive("") -> false
hasFive("12345") -> true
hasFive("hello") -> true
*/
const hasFive = (word) => (word.length >= 5); 
console.log(hasFive('Tech')); // false
console.log(hasFive('Global')); // true
console.log(hasFive('')); // false
console.log(hasFive('12345')); // true
console.log(hasFive('hello')); // true 


/*
Middle
Write a function named as middle() which takes a string word as an argument and returns the middle
character if the string has odd length, and returns the middle two characters if the string has even
length when invoked.
NOTE: If the given word is empty, then return the empty string back.
Examples:
middle("Tech") -> "ec"
middle("Global") -> "ob"
middle("abcde") -> "c"
middle("1") -> "1"
middle("abc") -> "b"
middle(“1234”) -> "23"
*/
function middle(word){
    if (word.length % 2 !== 0) return word[(word.length -1)/2]; 
    return word[word.length / 2 - 1] + word[word.length / 2]; 
}
console.log(middle('Tech'));
console.log(middle('Global'));
console.log(middle('abcde'));
console.log(middle('1')); 
console.log(middle('abc')); 
console.log(middle('1234')); 
/*

*/

/*
Longer String
Write a function named as longer() which takes two string words as arguments and returns the string
that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.
Examples:
longer("Tech", "Global") -> "Global"
longer("Hello", "Hi") -> "Hello"
longer("Hello", "World") -> "Hello"
*/
function longer(word1, word2){
    if (word1.length >= word2.length) return word1; 
    else return word2; 
}
console.log(longer('Tech', 'Global')); // Global 
console.log(longer('Hello', 'Hi')); // Hello 
console.log(longer('Hello', 'World')); // Hello 


/*
Shorter String
Write a function named as shorter() which takes two String words as arguments and returns the String
has less characters when invoked.
NOTE: if both of the words have the same length, then return the second String.
Examples:
shorter("Tech", "Global") -> "Tech"
shorter("Hello", "Hi") -> "Hi"
shorter("Hello", "World") -> "World"
*/
function shorter(word1, word2){
    if (word1.length <= word2.length) return word1; 
    else return word2; 
}
console.log(shorter('Tech', 'Global')); 
console.log(shorter('Hello', 'Hi')); 
console.log(shorter('Hello', 'World')); 


/*
Concat Two String
Write a function named as concat() which takes two string words as arguments and returns the words
concatenated when invoked.
NOTE: Concatenation should always be as first string + second string .
Examples:
concat("Tech", "Global") -> "TechGlobal"
concat("Hello", "World") -> "HelloWorld"
concat("", "abc") -> "abc"
concat("123", "1234") -> "1231234"
*/
const concat = (word1, word2) => word1 + word2; 
console.log(concat('Tech', 'Global')); 
console.log(concat('Hello', 'World')); 
console.log(concat('', 'abc')); 
console.log(concat('123', '1234')); 


/*
Starts With Vowel
Write a function named as startsVowel() which takes a string word as an argument and returns true if
given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
Examples:
startsVowel("Tech") -> false
startsVowel("Apple") -> true
startsVowel("abc") -> true
*/
const startsVowel = (word) =>{
    const vowels = 'AEIOUaeiou'
    return vowels.includes(word[0]); 
}
console.log(startsVowel('Tech')); 
console.log(startsVowel('Apple')); 
console.log(startsVowel('abc')); 

 

