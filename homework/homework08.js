console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named hasLowerCase() which takes a string argument 
and returns true if there is a lowercase letter and false if it there isn’t. 

Examples:
hasLowerCase("") 		    -> false
hasLowerCase("JAVASCRIPT") 	-> false
hasLowerCase("hello") 		-> true
hasLowerCase("125$") 		-> false
hasLowerCase("   a   ")     -> true
*/
const hasLowerCase = string => {
    let strArr = string.trim().split(''); // creating an array out of our string to loop through w/ for...of loop 
    // used trim() to address extra whitespaces 

    for (const letter of strArr) { 
        if (letter >= 'a' && letter <= 'z') return true; // we're looping through our stringArray to see IF the letter we encounter is a lowercase letter --> true 
    }
    return false; 
}
console.log(hasLowerCase(''));
console.log(hasLowerCase('JAVASCRIPT'));
console.log(hasLowerCase('hello'));
console.log(hasLowerCase('125$'));
console.log(hasLowerCase('  a  '));


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed.

Examples:
noZero([1])  -> [1]
noZero( [1, 1, 10] )  -> [1, 1, 10] 
noZero([0, 1, 10])  -> [1, 10]
noZero([0, 0, 0])  -> []
noZero([10, 100, 0]) -> [10, 100]
*/

/*
What we need to do: 
1.) loop through our array and check if our element is 0
2.) if ele is 0, then we need to find a way to FILTER it out (filter()) so that our final array doesn't include 0 
*/
const noZero = array => array.filter((num) => num !== 0);
console.log(noZero([1]));
console.log(noZero([1, 1, 10]));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([10, 100, 0]));


console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named numberAndSquare() which takes an array of numbers as argument 
and returns a multidimensional array with all numbers squared. 

Examples:
numberAndSquare([1, 2, 3]) 	    -> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6]) 	-> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4]) 	    -> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0]) 	    -> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10]) 	-> [[0, 0], [1, 1], [-10, 100]]
*/

/*
What we need to do: 
1.) We need to loop through our array 
2.) Figure out a way to create nested arrays within our array 
3.) Also we need to figure out how to make our first index [0] our number from the original array and then its square as its second index [1]
- Since our original array's indexes are the SAME-SIZED array --> map() ?
*/
const numberAndSquare = array =>  array.map((num) => [num, num * num]); // used map since we're returning the same-sized array 
    // BUT we're returning a nested array as well --> so our callback function encloses our number & number's square withing square brackets

console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]));
console.log(numberAndSquare([0, 1, -10]));


console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named containsValue() which takes a string array 
and a string as arguments and returns a boolean value. 
Search the string variable inside of the array and return true if it exists in the array. 
If it doesn’t exist, return false. ​

NOTE: Assume that array size is at least 1.​
NOTE: The method is case-sensitive.

Examples:
containsValue(["abc", "foo", "javascript"], "hello") 		    	-> false
containsValue(["abc", "def", "123"], "Abc") 			            -> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") 	-> true
*/

/*
What we need to do: 
1.) Loop through our array  
2.) See if our string parameter within our function matches an element within our array parameter --> includes(string)? 
*/
const containsValue = (array, string) => {
    for(const ele of array) {
        if(ele.includes(string)) return true; 
    }
    return false; 
}
console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc"));
console.log(containsValue(["abc", "def", "123", "JavaScript", "Hello"], "123"));


console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.​ 

If there is no enough words reverse, return "There is not enough words!".

Examples:
reverseSentence("Hello") 		            -> "There is not enough words!"
reverseSentence("Javascript is fun") 		-> "Fun is javascript"
reverseSentence("This is a sentence") 	    -> "Sentence a is this"
*/

/*
What we need to do: 
1.) We need to loop through our string [maybe even make it an array through string.split(' ')?]
2.) Identify the spaces between the words
3.) Reverse the array and then turn it back into a string 
*/
const reverseSentence = string => {
    let strArr = string.split(' '); // turned our string into an array --> w/ split(' ') ==> shows WORDS not LETTERS as elements    
    if(strArr.length < 2) return 'There is not enough words!' // if the length of our array is less than 2 (so 1 or empty) --> return that statement
    return strArr.reverse().join(' '); // if length is more than 2 --> reverse our array and convert it back to string w/ join(' ')
}
console.log(reverseSentence('Hello'));
console.log(reverseSentence('Javascript is fun'));
console.log(reverseSentence('This is a sentence')); // case-sensitive? 


console.log('\n ---------TASK06----------\n');
/*
Requirement:
Write a function named removeStringSpecialsDigits() which takes a string as argument 
and return a string without the special characters or digits.

Examples:
removeStringSpecialsDigits("123Javascript #$%is fun") 	-> "Javascript is fun" 
removeStringSpecialsDigits("Cypress") 		            -> "Cypress"
removeStringSpecialsDigits("Automation123#$%")      	-> "Automation"
*/

/*
What we need to do: 
1.) Maybe we should convert our string into an array (maybe even use RegEx to --> so that we can FILTER everything that is NOT a special character
    - includes: uppercase letters + lowercase letters + spaces between words 
2.) Convert it back to a string 
*/
const removeStringSpecialsDigits = string => {
    let strArr = string.split(''); // converted our string --> array (so that we could use filter())
    return strArr.filter((ele) => 
        (ele >= 'a' && ele <= 'z' // if our element has a-z
        || ele >= 'A' && ele <= 'Z' // OR if our element has A-Z
        || ele === ' ')).join('');  // OR if our element is a space (' ') + then convert array back to a string 
}
console.log(removeStringSpecialsDigits('123Javascript #$%is fun'));
console.log(removeStringSpecialsDigits('Cypress'));
console.log(removeStringSpecialsDigits('Automation123#$%'));


console.log('\n ---------TASK07----------\n');
/*
Requirement:
Write a function named removeArraySpecialsDigits() which takes a string array as argument 
and return back without the special characters or digits.

Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]) 	-> ["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"])      	-> ["Cypress", "", ""]
removeArraySpecialsDigits(["Automation", "123#$%tool"]) 	    -> ["Automation", "tool"]
*/

/*
What we need to do: 
1.) Similar to Task06 --> we're looping through our array and filtering out special characters + BUT we're also filtering digits
2.) ALSO we need to look at EACH array index and return back the SAME-SIZED array [map()]
*/ 
const removeArraySpecialsDigits = array => array.map((ele) => ele.split('').filter(char => char >= 'a' && char <= 'z'|| char >= 'A' && char <= 'Z').join(''));  
// here we START with the .map() method, which looked at our ELEMENTS (not chars) --> so we needed to split('') our elements to loop through their chars
// next using .filter() to loops through our elements' CHARS --> we created the condition to filter out any letters 
// after filtering our our letters (naturally our digits & symbols would be discarded b/c of conditional statement) 
// --> used .join('') to our nested arrays back into strings 

console.log(removeArraySpecialsDigits(['123Javascript', '#$%is', 'fun']));
console.log(removeArraySpecialsDigits(['Cypress', '123$%', '###']));
console.log(removeArraySpecialsDigits(['Automation', '123#$%tool']));


console.log('\n ---------TASK08----------\n');
/*
Requirement:
Write a function named getCommons() which takes two string arrays as arguments 
and returns all the common words.

Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 		    -> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 	-> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ) 	        -> ["C#"]
*/

/*
What we need to do: 
1.) Obviously loop through our nested arrays
2.) Figure out a way to compare each arrays' elements to each other  + take note of the ones that are common 
    - .reduce()? OR .filter()?
    - one thing to notice is that we are comparing two same-sized arrays 
*/
const getCommons = (array1, array2) => array1.filter((ele) => array2.includes(ele)); // so we're using filter here to check if array1's element exits in array2
    // so our conditional statement for our .filter() method is: if array2 includes our ele (from array1) --> TRUE 

console.log(getCommons(['Javascript', 'is', 'fun'], ['abc', 'xyz', '123']));
console.log(getCommons(['Javascript', 'is', 'fun'], ['Javascript', 'C#', 'Python'])); 
console.log(getCommons(['Javascript', 'C#', 'C#'], ['Python', 'C#', 'C++'])); 


console.log('\n ---------TASK09----------\n');
/*
Requirement:
Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 

NOTE: If the element is existing of x or X letters only, then completely remove the element.

Examples:
noXInVariables(["abc", 123, "#$%"]) 		-> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"]) 		-> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"]) 		    -> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"]) 	-> ["yyy", "ABC"]
*/

/*
What we need to do: 
1.) Loop through our array
2.) Extract 'x' and 'X' --> .filter()? + includes()
    - we have a same-sized array as well --> maybe .map()?
*/ 
const noXInVariables = array => {
    return array.filter((ele) => ele.split('')); 
}
console.log(noXInVariables(['abc', 123, '#$%'])); 
console.log(noXInVariables(['xyz', 123, '#$%'])); 
console.log(noXInVariables(['x', 123, '#$%'])); 
console.log(noXInVariables(['xyXyxy', 'Xx', 'ABC'])); 