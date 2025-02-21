/*
Task01

Requirement: 
Write a function names as tripleWord() which takes a string word as an
argument and returns the given word back tripled when invoked. 
NOTE: Assume you will not be given an empty word. 

Example: 
tripleWord("Tech") --> "TechTechTech"
tripleWord("Global") --> "GlobalGlobalGlobal"
*/
console.log("=====task01=====\n"); 
function tripleWord(word){
    return word + word + word
}
console.log(tripleWord('Tech'));
/*
2.) const tripleWord = word => {
    return word.concat(word).concat(word)
    word }

3.) const tripleWord = word => word.repeat(3) {  [this is how Bilal does it]
*/


/*
Task02

Requirement: Write a function named as has4() which takes a string word as an argument and returns true if given 
string has at least 4 characters, and false otherwise when invoked.
 Examples:
has4("Tech")  -> true
has4("Global")  -> true
has4("")  -> false
has4("12345")  -> true
has4("abc")   -> false
*/

console.log("=====task02=====\n"); 
function has4(word){
    return word.length >= 4  // REMEMBER .length when it comes to how many characters is in a string 
}
console.log(has4('Tech')); 
/*
ANOTHER WAY: 
const has4 = word => word.length >= 4; 

const has4 = word => {
    return word.length >= 4; 
    }

IF-ELSE would have been wrong --> not necessary 
only use it if you're trying to return a string/statement 
*/


/*
Task03

Write a function named as celsiusToFahrenheit() which takes a number
to be considered as Celcius value and returns the Fahrenheit value when
invoked.
Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32
to perform the conversion from Celsius to Fahrenheit.
•Multiply the Celsius temperature by 9.
•Divide the result by 5.
•Add 32 to the result.
Examples:
celsiusToFahrenheit(20)  -> 68
celsiusToFahrenheit(25)  -> 77
celsiusToFahrenheit(0)  -> 32
celsiusToFahrenheit(-10)  -> 14
*/
console.log("=====task03=====\n"); 
function celsiusToFahrenheit(Celsius){
    return (Celsius * 9) /5 +32
}
console.log(celsiusToFahrenheit(20)); // 68
/*
Another way: 
1.) const celciusToFahrenheit = Celcius => (Celcius * 9)/ 5 + 32
*/ 

/*
Task04

Write a function named as kgToPounds() which takes a number to be
considered as Kilograms value and returns the Pounds value when
invoked.
Conversion Formula: The function uses the formula kilogram * 2.2 to
perform the conversion from Kilograms to Pounds.
•Multiply the Kilograms value by 2.2.
Examples:
kgToPounds(1)  -> 2.2
kgToPounds(20)  -> 44
kgToPounds(75)  -> 165
kgToPounds(100)  -> 220
*/
console.log("=====task04=====\n"); 
const kgToPounds = kilograms => kilograms * 2.2; 
console.log(kgToPounds(20)); //44 
console.log(kgToPounds(75)); //165
console.log((kgToPounds(100))); //220 
/*
ANOTHER WAY: 
const kgToPounds = kilograms => {
  let pounds = (kg * 2.2).toFixed(1)
  
  let poundsAsStr = pounds + ""
  
  letpoundsSplit = poundsAsStr.split('.')

  if(poundsSplit[1] === '0') pounds = Number(poundsSplit[0])
    
  return pounds; 

  return pounds }


  OR 

 const kgToPounds = kilograms => {
  let pounds = (kg * 2.2).toFixed(1)
  
  let poundsAsStr = pounds + ""
  let poundsStr = pounds + ""; 
  
  if(poundsStr.split('.')[1] === '0') pounds = Number(poundsStr.split('.')[1]) 
    
  return pounds; 

} 

OR 

const kgToPounds = kg => {
  let pounds = (kg * 2.2) 
  
  if (pounds % 1 === 0) return pounds; 
  else return parseFloat.(pounds.toFixed(1))
    }
*/

/*
Task05

Write 2 functions named as rectangleArea() and rectanglePerimeter()
which calculate the area and perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula:
•Area: x * y
•Perimeter 2 * (x + y)
Examples:
rectangleArea(5, 4)  -> 20
rectangleArea(3, 7)  -> 21
rectangleArea(6, 10)  -> 60
rectanglePerimeter(5, 4)  -> 18
rectanglePerimeter(3, 7)  -> 20
rectanglePerimeter(6, 10)  -> 32
*/
console.log("=====task05=====\n"); 
function rectangleArea(x, y){
    return x * y
}
function rectanglePerimeter(x, y){
    return 2 * (x+ y)
}
console.log(rectangleArea(5,4)); // 20
console.log(rectanglePerimeter(5,4)); // 18 
/*
ANOTHER WAY: 
const rectangleArea = (width, height) => width * heigh{
return width * height; 
}
const rectanglePerimeter = (width, height) => {
    return 2 * (width + height)
    }
*/

/*
TASK06

Write 2 functions named as squareArea() and squarePerimeter() which
calculate the area and perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:
•Area: x * x
•Perimeter 4 * x
Examples:
squareArea(5)  -> 25
squareArea(3)  -> 9
squareArea(6)  -> 36
squarePerimeter(5)  -> 20
squarePerimeter(3)  -> 12
squarePerimeter(6)  -> 24
*/
console.log("=====task05=====\n"); 
const squareArea = (side) => side * side; 
console.log(squareArea(5)); 
console.log(squareArea(3));
console.log(squareArea(6));
const squarePerimeter = (side) => 4 * side
console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));

/*
Create a function which takes a string and returns the number of words that are in the string
countWords()
countWords("Hello, my name is Joe")
*/ 
function countWords(string){
    return string.split(' ').length;
}
console.log(countWords('Hello, my name is Joe')) // 5

/*
const countString = str => {
    let strAsArr = str.split(' ')
    return strAsArr. length; 
    }

    OR 

const countString = str => {
    let strAsArr = str.trim().split(/[ ]+/)  [split can take a string or RegEx] ==> interviewers LOVE RegEx [.replaceAll(/[^a-zA-z], '')]
    return strAsArr. length; 
    }
*/

//Whiteboard questions could make or break you in interviews 

