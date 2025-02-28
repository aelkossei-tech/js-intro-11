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
    if(i % 2 === 0 && i % 3 === 0) console.log(i); 
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
for(let i = 100; i >= 50; i--){
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
let sum = 0; // doing this because we're adding TO the sum 

for(let i = 1; i <= 10; i++){ // range 1 - 10  and we're increasing 
    sum += i; // so 0 + whatever i is going to be [if i =1 and ++ --> 2 (0 + 2 = 2)]
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
// To find a factorial ==> you're multiplying the number [in this case, random number] by itself that many time
// SO for example --> if we get 5, we're going to multiply it by 5 x 4 x 3 x 2 x 1
// 0 = 1 
let ran = Math.floor(Math.random() * 10) + 1; 
let factorialRandom = 1; // we're doing this [making this 1] since we're multiplying this by whatever number we'll generate

for(i = ran; i > 0; i--){ // for loop structure: the random number is going to be the subject +  non-negative --> SO "i" should be higher than 0 + we're counting down 
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

console.log(arr4[0]);
console.log(arr4[1]);
console.log(arr4[2]);
console.log(arr4[3]);
console.log(arr4[4]);

// OR 

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
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 
*/
const arr5 = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler']; 
console.log(arr5); 


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
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
*/
const arr6 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]; 
console.log(arr6); 

console.log(arr6.sort((a, b) => a - b)); 
