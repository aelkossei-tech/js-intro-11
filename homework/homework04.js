console.log('\n ---------TASK01----------\n');
/*
Write a program that outputs all the numbers that are divisible by 7 
starting from 1 to 100 (both inclusive).

Expected Output: 
7 
14
21
.
.
.
.
91
98
*/

/*
start: 1 
end: 100
update: ++
what we're trying to find: numbers that are divisible by 7 (num % 7 === 0)
*/
for(let i = 1; i <= 100; i++){
    if(i % 7 === 0) console.log(i); 
}


console.log('\n ---------TASK02----------\n');
/*
Write a program that outputs all the numbers that are divisible by 
both 2 and 3 starting from 1 to 50 (both inclusive).

NOTE: Use loop!!!

Expected Output: 
6
12
18
.
.
36
42
48
*/

/*
start: 1 
end: 50 
update: ++ 
what we're trying to do: find a number from that range that is both divisible by 2 AND 3 ==> num % 2 === 0 && num % 3 == 0
*/
for(let i = 1; i <= 50; i++){
    if(i % 6 === 0) console.log(i); // or if(i % 2 === 0 && i % 3 === 0) console.log(i); 
}


console.log('\n ---------TASK03----------\n');

/*
Write a program that outputs all the numbers that are divisible 
by 5 starting from 100 to 50 (both inclusive).

Expected Output:
100
95
90
85
.
.
.
60
55
50
*/

/*
start: 50 
end: 100
update: -- 
what we're trying to do: within the descending range (100 to 50), find numbers that are divisible by 5
*/
for(let i = 100; i >= 50; i--){ // since we're trying to count DOWN --> 100 and 50 are swapped 
    if(i % 5 === 0) console.log(i); 
}


console.log('\n ---------TASK04----------\n');
/*
Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!

Expected Output:

The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49
*/

/*
start: 0
end: 7
update: ++
what we're trying to do: Find the square of the numbers in that range [0 to 7]
*/
for(i = 0; i <= 7; i++){
    console.log(`The square of ${i} is = ${i * i}`); 
}


console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10

NOTE: Use loop!!!

Expected Output:
55
*/

/*
start: 1 
end: 10 
update: ++
*/
let sum = 0; // doing this because we're ADDING TO the sum 

for(let i = 1; i <= 10; i++){ // range 1 - 10  and we're increasing it by 1 every iteration [++]
    sum += i; // so 0(sum) + whatever i is going to be [if i = 1 and ++ --> 2 (0 + 2 = 2)]
}
console.log(sum); 


console.log('\n ---------TASK06----------\n');
/*
Requirement:
Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number.

Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/
// To find a factorial ==> you're multiplying the number [in this case, random number] by itself that many times
// SO for example --> if we get 5, we're going to multiply it by 5 x 4 x 3 x 2 x 1
// 0 = 1 
let ran = Math.floor(Math.random() * 10) + 1; 
let factorialRandom = 1; // we're doing this [making this 1] since we're multiplying this by whatever number we'll generate

for(i = ran; i > 0; i--){ // for loop structure: the random number is going to be the subject(i) +  non-negative --> SO "i" should be higher than 0 + we're counting down 
    factorialRandom *= i; // whatever our iteration [i] --> we're going to multiply factorialRandom by it [which is the factorial equation]
}
console.log(`My random number is: ${ran} and its factorial is: ${factorialRandom}.`); 


console.log('\n ---------TASK07----------\n');
/*
Requirement:
Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.

The program should also count how many attempts it takes to generate such a number.

Eventually, print the random number divisible by 5 with the number of attempts as below.

Expected Output:
The random number is {randomNumber} and it took {attempts} attempt/s to generate it.
*/
/*
start: 1 
end: 100
update: ++
what we're trying to do: 

1.) generate a random number 
2.) see if a random number is divisible by 5 
2.) count how many times does it take to get that number 
how are we going to do this: 
    - well we know that --> if your randomNumber % 5 === 0 
    - the question is HOW are we going to count the numbers of iterations that it takes to get a number divisible by 5 
    1.) make a seperate variable that counts the attempts --> input this into our while loop [since we don't know how many attempts it'll take]
    2.) our attempt # should be --> 
*/
let attempts = 0; 
let randomNumber = Math.floor(Math.random() * 100) + 1; 

while(randomNumber % 5 !== 0){
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    attempts++; 
}
console.log(`The random number is ${randomNumber} and it took ${attempts} attempt/s to generate it.`); 


console.log('\n ---------TASK08----------\n');
/*
Requirement:
- Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically

Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]
*/
const arr = ['Germany', 'Argentina', 'Ukraine', 'Romania']; 
console.log(arr); 
console.log(arr.sort()); 


console.log('\n ---------TASK09----------\n');
/*
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true
*/
const arr2 = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky']; 
console.log(arr2); 
console.log(arr2.includes('Pluto')); 
console.log(arr2.includes('Fido')); 


console.log('\n ---------TASK10----------\n');
/*
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/
const arr3 = ['Garfield', 'Tom', 'Sylvester', 'Azrael']; 
console.log(arr3.sort()); 
console.log(arr3.includes('Garfield') && arr3.includes('Felix')); 
console.log(arr3.includes('Garfield') && arr3.includes('Tom')); 


console.log('\n ---------TASK11----------\n');
/*
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element

Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/
const arr4 = [10.5, 20.75, 70, 80, 15.75]; 
console.log(arr4); 

for(let i = 0; i < arr4.length; i++){
    console.log(arr4[i]);  
}


console.log('\n ---------TASK12----------\n');
/*
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array. --> print out your array 
-Output how many elements starts with 'B' or 'P', ignoring cases. --> counting B or P in array
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases. --> how many times 'book' OR 'pen' show up

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 
*/
const arr5 = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler']; 
console.log(arr5); // 1st part of the answer

let counterB_P = 0; // since we're counting how many elements that starts with (.startsWith()) b or p --> we're starting from 0
for(let i = 0; i < arr5.length; i++){ // i = 0 --> since indexed at 0 ; i < arr5.length ==> to ensure that we don't go past array's length --> so essentially the range would be 0 to arr.length
    let letter = arr5[i].toLowerCase(); // even though question says it's ignoring cases ==> we're converting whatever iteration in the array[i] to lower case 
    if(letter.startsWith('b') || letter.startsWith('p')) counterB_P++ ; // the easy part --> we know we need to find what STARTS WITH b or p --> startsWith()
}
console.log(`Elements starting with 'B' or 'P' = ${counterB_P}`);  

let counterBook_Pen = 0; 
for(let i = 0; i < arr5.length; i++){ // same logic here 
    let words = arr5[i].toLowerCase(); 
    if(words.includes('book') || words.includes('pen')) counterBook_Pen++; // this time we should use includes() to find the subarray --> whenever this if statement is true, then we should add to the count [counterBook_Pen]
}
console.log(`Elements having 'book' or 'pen' = ${counterBook_Pen}`); 


console.log('\n ---------TASK13----------\n');
/*
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ] 
Elements that are more than 10 = 5   --> in order to do this ==> we're COUNTING how many elements are more than 10 
Elements that are less than 10 = 4
Elements that are 10 = 2
*/
const arr6 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]; 
console.log(arr6); // First part of answer 

let moreThan10 = 0; 
let lessThan10 = 0; 
let equal10 = 0;

for(let i = 0; i < arr6.length; i++){
    if(arr6[i] > 10) moreThan10++; 
    else if(arr6[i] < 10) lessThan10++; 
    else equal10++; 
}
console.log(`Elements that are more than 10 = ${moreThan10}`); 
console.log(`Elements that are less than 10 = ${lessThan10}`); 
console.log(`Elements that are equal to 10 = ${equal10}`); 


console.log('\n ---------TASK14----------\n');
/*
Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/
const firstArr = [5, 8, 13, 1, 2]; 
const secondArr = [9, 3, 67, 1, 0]; 
console.log(`1st array is = ${JSON.stringify(firstArr)}`); 
console.log(`2nd array is = ${JSON.stringify(secondArr)}`); 

let thirdArr = []; // making this an empty array to add the max number/index into it 

for(i = 0; i < firstArr.length; i++){ // since firstArr & secondArr have the same length ==> used firstArr.length for the loop condition
    firstArr[i] > secondArr[i] ? thirdArr.push(firstArr[i]) : thirdArr.push(secondArr[i]); // here, trying to which value at the given index[i] is greater + whichever one is greater ==> push the greater value 
}
console.log(`3rd array is = ${JSON.stringify(thirdArr)}`); 


console.log('\n ---------TASK15----------\n');
/*
Requirement:
Write a function named as firstDuplicate() which takes an array argument and
returns the first duplicated number in the array when invoked. --> const firstDuplicate()

NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1
*/
const firstDuplicate = arrayPar => {
    let seenArr = []; // creating an empty array to put our seen elements in those array
    for(let i = 0; i < arrayPar.length; i++){ // we're looping through our given array 
        if(seenArr.includes(arrayPar[i])) return seenArr[0]; // IF our seen array includes our array parameters [THIS MEANS THERE'S A DUPLICATE] --> we're returning the first element in the array which is our first instance of our duplicate
        else seenArr.push(arrayPar[i]); // if NOT --> we're pushing our seen elements (not duplicates) into our seenArr 
}
    return - 1; // if there AREN'T any duplicates at all in our array parameters --> we're returning -1 
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])); 
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])); 

console.log('\n ---------TASK16----------\n');
/*
Requirement:
Write a function named as getDuplicates() which takes an array argument and returns all 
the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are 
no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]
*/
let seenElementArr = []; // we're creating 2 different empty arrays, one for seen elements that we loop through  
let dupeArr = []; // the other one is for our duplicates 
const getDuplicates = arrayParam => { 
    for(let i = 0; i < arrayParam.length; i++) { // so we're looping through our array elements --> we're looking through our seen --> if our seen elements are the SAME as our array parameters ===> we're pushing into our dupe array
        if(seenElementArr.includes(arrayParam[i])) { // SO --> if our seen elements array includes our element in our original array --> it will check the second condition
            if(!dupeArr.includes(arrayParam[i])) // --> ONLY add our element if it's NOT in our dupe array 
             dupeArr.push(arrayParam[i]); // ONLY if eveything is true --> we push our duplicates into our final array 
        }
        else {
             seenElementArr.push(arrayParam[i]); // if it's NOT a dupe ==> push to our seenElement array 
        }
    }
    return dupeArr; // we're returning our duplicates in an array 
}
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])); 

console.log('\n ---------TASK17----------\n');
/*
Requirement:
Write a function named as reverseStringWords() which takes a string as an argument and returns string back with each word 
separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> ""
*/
const reverseStringWords = string => {
    let reverseStr = ''; 
    for(let i = string.length - 1; i >= 0; i--){
        reverseStr += string[i] 
    }
    return reverseStr; 
}

console.log(reverseStringWords('Hello World')); 
console.log(reverseStringWords('I like Javascript')); 
console.log(reverseStringWords('Hello')); 
console.log(reverseStringWords('')); 

console.log('\n ---------TASK18----------\n');
/*
Requirement:
Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as 
an array stored from smallest even number to greatest even number when invoked.

NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers
in the range of given 2 numbers. 

Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ]
*/
const getEvens = (num1, num2) => {  // our parameters are numbers
    let maxEven = Math.max(num1, num2); // we don't know the given range --> BUT we're trying to return the SMALLEST even number first 
    let minEven = Math.min(num1, num2); // SO --> we need to use MAX and MIN 
    let finalArr = []; // we're pushing into an empty array ==> final result is an array 
    for(let i = minEven; i <= maxEven; i++){
        if(i % 2 === 0) finalArr.push(i); 
    }
    
    return finalArr; 
}
console.log(getEvens(2, 7)); 
console.log(getEvens(17, 5)); 
console.log(getEvens(4, 4)); 
console.log(getEvens(3, 3)); 


console.log('\n ---------TASK19----------\n');
/*
Requirement:
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match when invoked.

NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 

Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17)	-> [ 5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ]
*/
const getMultipleOf5 = (n1, n2) => { // 2 numbers arguments [without knowing its range] --> SO we should make our own range from our parameters
    let numMax = Math.max(n1, n2); 
    let numMin = Math.min(n1, n2);
    let arrResult = []; // since our result should be an array ==> we need to push our results into an empty array 
    
    if(n1 > n2){ // since we don't now what our number range will be --> we need to think of the possibility of having n1 being larger than n2 
        for(let i = numMax; i >= numMin; i--){ // if that's the case, we would want the array to be printed in descending order 
            if(i % 5 === 0) arrResult.push(i); 
        }
    }
    else {
        for(let i = numMin; i<= numMax; i++){  // if n2 > n1 ==> then just push/print our array in ascending order 
            if(i % 5 === 0) arrResult.push(i); 
        }
    }
    return arrResult; 
}
console.log(getMultipleOf5(3, 17));     
console.log(getMultipleOf5(23, 5));     
console.log(getMultipleOf5(5, 5));     
console.log(getMultipleOf5(2, 4));     

console.log('\n ---------TASK20----------\n');
/*
Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments and 
returns a string composed with below requirements when invoked.

You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each number.

You will need to convert numbers divisible by 3 to 'Fizz'

You will need to convert numbers divisible by 5 to 'Buzz'

You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’

The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz"
*/ 
const fizzBuzz = (num1, num2) => { // same thing with Task 19 --> we don't know our range, BUT we do know our paramters 
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let result = []; // again, empty array to push our results into; 

    for(let i = min; i <= max; i++){ 
        if(i % 15 === 0) result.push('FizzBuzz'); // Once we see that there are a few conditions to keep in mind ==> If-Else statments had to be involved 
        else if (i % 3 === 0) result.push('Fizz'); 
        else if(i % 5 === 0) result.push('Buzz');  
        else result.push(i); // if the given number isn't following any of the above conditions --> we're pushing the regular number 
        }   
        return result.join(' | '); // after running through out if-else statements ==> we are seperating the numbers w/ join [turns our array --> string and seperates by a punctuation]
    }

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5)); 
console.log(fizzBuzz(5, 5)); 
console.log(fizzBuzz(9, 6)); 
