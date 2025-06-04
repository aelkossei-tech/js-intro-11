console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters and spaces

Examples:
toCamelCase("first name") 	        ->"firstName"
toCamelCase("last     name") 	    ->"lastName"
toCamelCase("   ZIP CODE") 	        ->"zipCode"
toCamelCase(“I Learn Java Script”)  -> "iLearnJavaScript"
toCamelCase(“helloWorld”)   ​	     -> “helloWorld”
*/
/*
What we need to do: 
1.) We have to ignore spaces in general --> .trim() + regex 
2.) Loop through our string (.split(' ') ) --> every time we see a space between our words, 
    ==> we have to keep the first word all in lowercase + the second/and on words will have to capitilize the first letter
        --> WHICH MEANS we have to maybe have a nested loop: 1.) first loop - loop through our words between spaces  2.) second loop - loop through our letters and capitalize the first ([0]) 
3.) After our loops --> we .join('') and return our final word 
*/
const toCamelCase = string => {
    if(!string.includes(' ')) return string; // this conditional statement addresses the helloWorld edge case in which there ISN'T any spaces  
    let strArr = string.toLowerCase().trim().split(/\s+/); // to address the case-sensitivity and extra spaces  + converted string to array to loop through it 

    let camelArr = strArr.map((word,index) => { // using .map() and created an array --> looking at each word and its index 
        if(index === 0) return word; // the first word --> just leave it alone and return word
        return word.split('')[0].toUpperCase() + word.slice(1); // ELSE --> return our ele in another array to seperate the letters within the word, loop through it + identify the first letter of the words + convert them to uppercase
    }); 

    return camelArr.join(''); // once you finish the loop, return the array and use .join() to turn it back to a string 
} 
console.log(toCamelCase('first name'));
console.log(toCamelCase('last    name'));
console.log(toCamelCase('  ZIP CODE'));
console.log(toCamelCase('I Learn Java Script'));
console.log(toCamelCase('helloWorld'));


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters and spaces

NOTE: In snake case words are separated by underscores (_) and are all lowercase.

Examples:
toSnakeCase("first name") 	            ->"first_name"
toSnakeCase("last    name") 	        ->"last_name"
toSnakeCase("    I love Java Script") 	->"i_love_java_script"
toSnakeCase("already_snake_case")       -> "already_snake_case"
toSnakeCase("hello")   		            ​-> "hello"
*/
/*
What we need to do: 
1.) This is VERY similar to the last task in that --> we should be aware of the spaces/case-sensitivity 
2.) We need to ignore extra spaces + convert everything to lowercase 
3.) Everytime there is a space [loop --> split(' ')], we join w/ ('_'); 
*/
const toSnakeCase = string => string.toLowerCase().trim().split(/\s+/).join('_'); 

console.log(toSnakeCase('first name'));
console.log(toSnakeCase('last  name'));
console.log(toSnakeCase('  I love Java Script'));
console.log(toSnakeCase('already_snake_case'));
console.log(toSnakeCase('hello'));


console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named alternatingCases() which takes a string argument 
and returns the string with alternating capitalization.

NOTE: The first letter should always be uppercase and non-letter characters are ignored.

Examples:
alternatingCases("Hello") 	    -> "HeLlO"
alternatingCases("basketball") 	-> "BaSkEtBaLl"
alternatingCases("Tech Global") -> "TeCh GlObAl"
alternatingCases("") 		    -> ""
alternatingCases("123!@#aB") 	-> "123!@#Ab"
*/
/*
What we need to do: 
1.) Loop through our string parameter --> look at our even indexes to convert the letters to uppercase 
*/
const alternatingCases = string => {
    let count = 0; // SO --> we're including a count variable to count any letter we find in the string ==> every EVEN count we can capitalize
    let strArr = string.split('').map(ele => {
        if (/[a-zA-Z]/.test(ele)) { // if our string has only characters --> then we can modify the string in the way we want 
            let modifiedStr = count % 2 === 0 ? ele.toUpperCase() : ele.toLowerCase(); // if our string's count is EVEN, then capitlize it, else just keep it lowercase
            count++ //increase the count as well 
            return modifiedStr; 
        }
        else {
            return ele; // if it's NOT a letter [number or symbol] --> then just return the element
        }

    });

    return strArr.join(''); 
}
console.log(alternatingCases('Hello'));
console.log(alternatingCases('basketball'));
console.log(alternatingCases('Tech Global'));
console.log(alternatingCases(''));
console.log(alternatingCases('123!@#aB'));


console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named isNeutral() that takes two strings comprised of + and -, 
and return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.

Note: The two strings will be the same length.

Examples
isNeutral("-", "+")     	   ->  "0"
isNeutral("-+", "-+") 		   ->   "-+"
isNeutral("-++-", "-+-+")      ->  "-+00"
isNeutral("--++--", "++--++")  ->  "000000"
isNeutral("+++", "+++")        ->  "+++"
*/
/*
What we need to do: 
1.) We're going to have 2 string parameters, made out of pluses (+) and negatives (-)
    - (+ , +) --> stay positive (+)
    - (- , - ) --> stay negative (-)
    - (+ , - ) --> neutral (0)
2.) Looks like we're going to have to loop through each string parameter side-by-side & compare each ele with one another
3.) Our conditional statements will kind of look like this: 
    - If string1's ele is + AND string2's ele is + ==>  return + 
    - If string1's ele is - AND string2's ele is - ==>  return - 
    - If (string1's ele is + AND string2's ele is -) OR (string1's ele is - AND string2's ele is +) ==> 0 
*/
const isNeutral = (string1, string2) => {
    let result = ''; // this will be our final result string that we will return 

    for (let i = 0; i < string1.length; i++) { // since both strings are of the same length, it doesn't matter which one we'll use for the loop
        let char1 = string1[i]; // just to be easier to handle --> created variable for both string1 & string 2 
        let char2 = string2[i];

        if (char1 !== char2) result += '0';  // if both of our string's chars DON'T match --> then add 0 to the result 
        else if (char1 === '-' && char2 === '-')  result += '-' // if both of our string's chars DO match --> then add + or - to the result 
        else result += '+';
    }

    return result;
}
console.log(isNeutral('-', '+'));
console.log(isNeutral('-+', '-+'));
console.log(isNeutral('-++-', '-+-+'));
console.log(isNeutral('--++--', '++--++'));
console.log(isNeutral('+++', '+++'));



console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named isTrueOrFalse() which takes a string with sets of character/words separated by space. 
Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), 
you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") 
or the negative/second half ("n"-"z"). 

Return true if there are more (or equal) positive words than negative words, false otherwise.

NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

NOTE: Ignore all the digits, spaces and special characters.

Examples
isTrueOrFalse("A big brown fox caught a bad rabbit") 	-> true
isTrueOrFalse("Xylophones can obtain Xenon.")   		-> false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK") 	        -> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe") 	    -> true
isTrueOrFalse("Got stuck in the Traffic") 		        -> false
*/
/*
What we need to do: 
1.) We're going have to loop through our string parameter --> see if the first letter of each word either falls into the first half OR second half of alphabet
    - if most of the letters are in the first half --> TRUE 
    - if most of the letters are in the second half --> FALSE 

- NOW, a human would just look at each first letter of each word in the sentence + count the instances + and compare the positive vs. negative results 
    ==> WHICH IS WHAT WE WILL DO: 
2.) Since we're looking at each FIRST letter --> thinking about 2 loops ==> 1.) one to seperate the words from one another 2.) one to isolate the letters --> with that second loop we will focus on [0]
3.) We will first use regex to divide up the alphabet --> Postive = /A-Ma-m/.test(ele) and Negative = /N-Zn-z/.test(ele)
4.) After dividing up the alphabet --> we're going to create count variables to incremenet any time we encounter the positive half or the negative half
5.) After this --> we will compare the counts ==> IF countPos > countNeg ==> TRUE, ELSE ==> FALSE 
*/
const isTrueOrFalse = string => {
    let countFirstHalf = 0; 
    let countSecondHalf = 0; 
    let strArr = string.split(' '); 

    strArr.forEach((word) => {
       let firstChar = word[0].toLowerCase(); 

       if(/[a-m]/.test(firstChar)) countFirstHalf++; 
       else countSecondHalf++; 
    }); 

    return countFirstHalf >= countSecondHalf;  
}
console.log(isTrueOrFalse('A big brown fox caught a bad rabbit'));
console.log(isTrueOrFalse('Xylophones can obtain Xenon.'));
console.log(isTrueOrFalse('CHOCOLATE MAKES A GREAT SNACK'));
console.log(isTrueOrFalse('All FOoD tAsTEs NIcE for someONe'));
console.log(isTrueOrFalse('Got stuck in the Traffic'));