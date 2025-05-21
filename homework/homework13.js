console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named countVC() which takes a string argument 
and returns an object with the count of vowels and consonants.

Examples:
countVC("Hello")​           -> {vowels: 2, consonants: 3}
countVC("Programming")​ 	-> {vowels: 3, consonants: 8}
countVC("123AbC")​          -> {vowels: 1, consonants: 2}
countVC("123!@#xyz")​       -> {vowels: 0, consonants: 3}
countVC("")​                -> {vowels: 0, consonants: 0}
*/
/*
What we need to do: 
1.) Loop through our given string parameter 
2.) Have an empty object, that will have store the key:value pairs --> vowels:count, consonants:count
3.) We have to define what are vowels [AEIOUaeiou] and what are not !(AEIOUaeiou)
    - might have conditional statements --> if vowel, count it; if !vowel, count it 
*/
const countVC = string => {
    let final = { // created our object to store our vowels/consonants:count(s)
        vowels: 0,
        consonants: 0
    };
    let vowels = 'AEIOUaeiou';

    for (let i = 0; i < string.length; i++) { // used a for loop to loop through the string's chars 
        if (/[A-Za-z]/.test(string[i])) {  // first we need to confirm if the char is a char and not a symbol --> used regex here 
            // BUT --> could also use this: (char >= 'a' && char <= 'z' && char >= 'A' && char <= 'Z')
            if (vowels.includes(string[i])) final.vowels++ // NOW after confirming it's a letter --> now we can see if the letter is a vowel or consonant 
            else final.consonants++ // if it is --> add to the count 
        }

    }
    return final;
}
console.log(countVC("Hello"));
console.log(countVC("Programming"));
console.log(countVC("123AbC"));
console.log(countVC("123!@#xyz"));
console.log(countVC(""));


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named countChars() which takes a string argument 
and returns an object with the count of letters, numbers, and specials.

NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards any category

Examples:
countChars("Hello")​             -> {letters: 5}
countChars("Programming 123")​ 	 -> {letters: 11, numbers: 3}
countChars("123AbC!@#")​         -> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")​        -> {numbers: 10}
countChars("     ")​             -> {}
countChars("")​                  -> {}
*/
/*
What we need to do: 
1.) Loop through our string paramters
2.) Create an empty object to store the counts of our --> letters + numbers + special characters [exclude spaces]
    - add a condition if the count = 0 --> then don't include it in the final result 
*/
const countChars = string => {
    let final = { // just like the previous task --> we added the counts for our letters + numbers + special chars
        letters: 0,
        numbers: 0,
        specials: 0
    }
    for (let i = 0; i < string.length; i++) { // obviously loop through the string
        if(string[i] === ' ') continue; // IF our string's char is either an empty string OR a space --> ignore it and continue the loop

        if (/[A-Za-z]/.test(string[i])) final.letters++ // if there are letters (with the RegEx) in our string --> add to the letters count
        else if (/[0-9]/.test(string[i])) final.numbers++ // if there are numbers (with the RegEx) in our string --> add to the numbers count 
        else final.specials++ // if the char is NOT a letter or a number --> add to the special count 
    }
    for(const key in final) { // now we're looping through our final object 
        if(final[key] === 0) delete final[key]; // if the count === 0 --> then DELETE the key 
    }
    return final;
}
console.log(countChars("Hello"));
console.log(countChars("Programming 123"));
console.log(countChars("123AbC!@#"));
console.log(countChars("0987654321"));
console.log(countChars("   "));
console.log(countChars(""));


console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named maxOccurrences() which takes a string argument 
and returns the character that appears the most number of times in the string.

NOTE: If there is a tie, return the first one that appears in the string. 
This task is case sensitive. Ignore spaces. 
If the string is empty or consist of spaces only, then return an empty string.

Examples:
maxOccurrences("Hello")​           	-> "l"
maxOccurrences("Occurrences") 	   -> "c"
maxOccurrences("    ab    ")​    	-> "al"
maxOccurrences("12   3   21")      -> "1"
maxOccurrences("      ")   ​ 	    -> ""
maxOccurrences("")   		       -> ""
*/
/*
What we need to do: 
1.) Loop through our string parameter 
2.) Store our counts of each char
3.) Return the char that has the largest count 
    - if there's a tie --> return the first one that appears int he string
*/
const maxOccurrences = string => {
    let final = {}; 
    let maxCount = 0; 
    let maxChar = ''; 
 

    for(const char of string) {
        if(char === ' ') continue; 
        final[char] = (final[char] || 0) + 1;

        if(final[char] > maxCount) {
            maxCount = final[char]; 
            maxChar = char; 
        } 

        if(final[char] === maxCount) char[0]; 
    }

    return maxChar; 
}
console.log(maxOccurrences("Hello"));
console.log(maxOccurrences("Ocurrences"));
console.log(maxOccurrences("  ab  "));
console.log(maxOccurrences("12  3  21"));
console.log(maxOccurrences("    "));
console.log(maxOccurrences(""));


console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named starOut() which takes a string argument 
and returns it back with every star removed as well as the right and left of the star.

NOTE: If there are 2 stars next to each other than remove the next non star

So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

Examples:
starOut("ab*cd") 	-> "ad"
starOut("ab**cd") 	-> "ad"
starOut("xm*sm*sy") -> "xy"
starOut("abc")   ​	 -> "abc"
starOut("***")   	-> ""
starOut("   ")    ​  -> "   "
starOut("")         -> ""
*/
/*
What we need to do: 
1.) Loop through string parameter [maybe even convert it to an array and use .filter()]
2.) Everytime we encounter a star --> we need to delete the previous and next char 
    - we should have a variable that should have the final chars (sans the star)
*/
const starOut = string => {
    let finalStr = ''; // we have a container that we'll return the string minus the stars

    for(let i = 0; i < string.length; i++) { // we're looping our chars
       if(string[i] === '*') continue; // if our char is *  --> then IGNORE it 
       let left = i === 0 ? ' ' : string[i - 1]; 
       // if our string char at the beginning of our string [string[0]] and there's nothing to the left of it --> ' '
       let right = i === string.length - 1 ? ' ' : string[i + 1]; 
        // if our string char at the end of our string [string[string.length - 1]] and there's nothing to the right of it --> ' ' 
        if(right !== '*' && left !== '*') finalStr += string[i]; 

        // if our right/left char DOES NOT equal to * --> add it to the final string 
    }
    return finalStr; 
}
console.log(starOut("ab*cd"));
console.log(starOut("ab**cd"));
console.log(starOut("xm*sm*sy"));
console.log(starOut("abc"));
console.log(starOut("***"));
console.log(starOut("   "));
console.log(starOut(""));


console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a function named romanToInt() which takes a string roman numeral as its arguments 
and return the roman numeral converted to the number. 

A roman numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 112

NOTE: 
Symbol       Value
I              1
V              5
X              10
L              50
C              100
D              500
M              1000

Examples:
romanToInt("I") 		        -> 1
romanToInt("IV") 		        -> 4
romanToInt("CXII") 		        -> 112
romanToInt("MMM") 	         	-> 3000
romanToInt("MMMDCCCLXXXVIII")  	-> 3888
romanToInt("MDCLXVI")  	        ​-> 1666
*/
/*
What we need to do: 
1.) Somehow figure out a way to have the function recognize the symbols and their values 
2.) Return the sum of symbols/values --> the total value 
    - something to remember is that Roman Numerals is that there's a subtraction rule
        - SO --> IV is not 1 + 5, it's actually 4 (1-5)
*/
const romanToInt = string => {
    let sum = 0; // since roman numberals ADD UP to a number --> sum variable 
    let romanNums = { // created an object to store the roman numberals and their values
        I: 1, 
        V: 5, 
        X: 10, 
        L: 50, 
        C: 100, 
        D: 500, 
        M: 1000
    }; 
    
    for(let i = 0; i < string.length; i++) { // we're looping through our string parameter at every char
    // Keeping in mind that roman numerals have the subtraction rule --> we need to look at 
        let currentVal = romanNums[string[i]]; // this addresses the current value we have 
        let nextVal = romanNums[string[i + 1]]; // this looks at the next one 

        if(nextVal > currentVal) { // NOW if our next value is greater than current value (so in the case IV [1 & 5 = 4])
            sum += nextVal - currentVal; // you subtract the next value (5) with current (1) [equals to 4] and you add that to the sum 
            i++; 
        }
        else {
            sum += currentVal; // if it's lesser than --> then just add the current value to the sum 
        }
    }
    
    return sum; 
}
console.log(romanToInt('I'));
console.log(romanToInt('IV'));
console.log(romanToInt('CXII'));
console.log(romanToInt('MMM'));
console.log(romanToInt('MMMDCCCLXXXVIII'));
console.log(romanToInt('MDCLXVI'));