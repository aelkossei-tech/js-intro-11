console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named countPalindrome() which takes a string and returns 
the number of  palindrome words.

Note: A palindrome word is a word that reads the same forwards and 
backwards. Example: level, radar, deed, refer.

Examples:
countPalindrome("Mom and Dad")                           -> 2
countPalindrome("See you at noon")                       -> 1
countPalindrome("Kayak races attracts racecar drivers")  -> 2
countPalindrome("")                                      -> 0
countPalindrome("No palindrome here")                    -> 0
*/
/*
What we need to do: 
1.) We have to loop through the string --> thinking about converting it to an array and then using the reduce() method to do that
    - within that operation --> we use another function (isPalindome())
*/
const countPalindrome = string => {
    let strArr = string.split(' '); 
    if(string.length === 0 || string === "") return 0; 
    const isPalindome = string => {
        let word = string.toLowerCase(); 
        let reversedWord = word.split('').reverse().join('');

        if(word === reversedWord) return true; 
    }

    return strArr.reduce((accum , ele) => isPalindome(ele) ? accum + 1 : accum, 0); 
}
console.log(countPalindrome("Mom and Dad")); 
console.log(countPalindrome("See you at noon")); 
console.log(countPalindrome("Kayak races attracts racecar drivers")); 
console.log(countPalindrome("")); 
console.log(countPalindrome("No palindrome here")); 


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named sum() which takes an array of numbers and a boolean value as arguments. 
It will return the sum of the numbers positioned at even indexes if true. 
And, return sum of numbers positioned at odd indexes if false.

Examples:
sum([1, 5, 10], true) 		    -> 11
sum([3, 7, 2, 5, 10], false) 	-> 12
sum([-1, 1, -2, 2], true) 		-> -3
sum([0, -1, 15, 1], false) 		-> 0
sum([1, 2, 3, 4, -4], true)     -> 0
*/
/*
What we need to do: 
1.) So if TRUE --> we're returning the sum of the numbers at EVEN indexes + if FALSE --> return the sum of the numbers at ODD indexed 
2.) So based on the boolean --> we get our result
3.) In that case based on whether it is TRUE or FALSE: 
    - we're going to loopx through our array 
    - look at the indexes of our array [whether] 
    - add them to an accumulator --> reduce() method
*/
const sum = (array, boolean) => {
    if (boolean) {
        return array.reduce((accum, ele, index) => index % 2 === 0 ? accum + ele : accum, 0);
        // an optional parameter of .reduce() is the currentIndex --> so we could use that to see if 
        // the index is divisible  by 2 or not 
    }
    else {
        return array.reduce((accum, ele, index) =>  index % 2 !== 0 ? accum + ele : accum, 0);
    }
}
console.log(sum([1, 5, 10], true)); 
console.log(sum([3, 7, 2, 5, 10], false)); 
console.log(sum([-1, 1, -2, 2], true)); 
console.log(sum([0, -1, 15, 1], false)); 
console.log(sum([1, 2, 3, 4, -4], true)); 


console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named nthChars() which takes a string and a number as arguments 
and returns the string back with every nth characters.​

Examples:
nthChars("Java", 2) 		  -> "aa"
nthChars("JavaScript", 5)​ 	   -> "St"
nthChars("Java", 3)​ 		   -> "v"
nthChars("Hi", 4)​ 		       -> ""
nthChars("0123456789", 2) 	  -> "13579" 
*/
/*
What we need to do: 
1.) Look at our number parameter  --> again, it's looking at the index [index + 1] of the string and returning
all the multiples of that number 
    - EX: ("JavaScript", 5) --> every 5th letter is going to return ==> "St"
2.) SO  we need to find a way to look at our number parameter [becomes our index - 1] 
    + everytime that we loop through our string 
    + we find the letter that is a multiple of that index 
    + return those letters 
*/
const nthChars = (string, number) => {
    let chars = string.split('');  // converted string into an array, to seperate its characters and loop through them 
    return chars.filter((char, index) => (index + 1) % number === 0 ? char : '').join(''); 
    // similar to .reduce() --> .filter() also has an optional parameter [currentIndex]
    // SO, knowing that we need to deal our index + 1 --> IF our (index + 1) is divisible by our number parameter (nth) 
        // ==> return that char ELSE empty string --> then just .join() our array result to make it return a string 
}
console.log(nthChars("Java", 2)); 
console.log(nthChars("JavaScript", 5)); 
console.log(nthChars("Java", 3)); 
console.log(nthChars("Hi", 4)); 
console.log(nthChars("0123456789", 2)); 


console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named canFormString() which takes two string arguments 
and returns true if the second string can be formed by rearranging the characters of first string. 
Return false otherwise.

NOTE: This method is case-insensitive and ignore the white spaces.

Examples:
canFormString("Hello", "Hi")​ 			            -> false
canFormString("programming", "gaming")​ 		    -> true
canFormString("halogen", "hello")​ 		         	-> false
canFormString("CONVERSATION", "voices rant on")​ 	-> true
canFormString("12", "123")                         -> false
*/
/*
What we need to do: 
    - This seems similar to the palindrome problems --> in that if we loop through our string and see if we have the same letter flipped 
       then it's a palindrome ==> seems like we need the same type of mentality 
1.) We have to loop through our first string (string1) --> note all the letters present [maybe store it in an object?]
2.) NOW, we loop through our second string (string2) --> note if there are simialr letters present 
    - IF there are similar letters within string2 ==> THEN string2 COULD BE rearranged to be like string1 [TRUE]
    - ELSE ==> FALSE 
*/
const canFormString = (string1, string2) => {
    let string1Obj = {}; // putting our chars and their counts here ==> only need 1 object since string1 is the main thing we're comparing 
    string1 = string1.toLowerCase().replace(/\s+/g, "");
    // to address the spaces and the case-sensitivity --> used .replace(value1, value2) [one of the few methods that works w/ regexes] 
    // used the spaces regex and the /g (global flag) 
    string2 = string2.toLowerCase().replace(/\s+/g, "");

    for(const char of string1){ // used a for...of loop to loop through our first string first 
        if(string1Obj[char]) string1Obj[char]++ // if our string has a value already present in our object --> increase the count 
        else string1Obj[char] = 1; // else --> put the counter to 1 
    }

    for(const chars of string2) { // NOW --> looping through our second string parameter 
        if(!string1Obj[chars] || string1Obj[chars] === 0) return false; 
        // if the letters we have in string1Obj IS NOT present in the string 2 or has NONE of those chars ==> FALSE 
        else string1Obj[chars]--; 
        // NOW --> we're seeing if we have all the letters needed to make the comparison --> SO if there are EXTRA letters, we'll decrement it
    }
    return true; 
}
console.log(canFormString("Hello", "Hi")); 
console.log(canFormString("programming", "gaming")); 
console.log(canFormString("halogen", "hello")); 
console.log(canFormString("CONVERSATION", "voices rant on")); 
console.log(canFormString("12", "123")); 


console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a function named isAnagram() which takes two string arguments 
and returns true if the given strings are anagram. Return false otherwise.

NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase. 
In the context of strings, checking if two strings are anagrams of each other means verifying 
if they contain the same characters in the same quantities, regardless of the order of those characters.

NOTE: This method is case-insensitive and ignore the white spaces.

Examples:
isAnagram("Apple", "Peach")​ 		        -> false
isAnagram("listen", "silent")​ 		        -> true
isAnagram("astronomer", "moon starer")​ 	-> true
isAnagram("CINEMA", "iceman")​ 		        -> true
isAnagram("123", "1234") 		           -> false
*/
/*
What we need to do: 
    - This seems very similar to the previous task [Task04]
1.) SO, doing the same thing as Task04 --> we're going to look at string1 and creating an object to store the chars: count 
    - obviously address case-sensitivity & spaces 
2.) THEN, we're going to look at string2 --> 
*/
const isAnagram = (string1, string2) => {
    let string1Obj = {};
    string1 = string1.toLowerCase().replace(/\s+/g, "");
    string2 = string2.toLowerCase().replace(/\s+/g, "");

    for(const char of string1){
        if(string1Obj[char]) string1Obj[char]++; 
        else string1Obj[char] = 1; 
    }

    for(const chars of string2) { 
        if(!string1Obj[chars] || string1Obj[chars] === 0) return false; 
        else string1Obj[chars]--; 
    }
    return true; 
}
console.log(isAnagram("Aaa", "aa"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("astronomer", "moon starer"));
console.log(isAnagram("CINEMA", "iceman"));
console.log(isAnagram("123", "1234"));


console.log('\n ---------TASK06----------\n');
/*
Requirement:
Write a function named count() which takes an array of numbers and a boolean value as arguments. 
It will return the total count of the even numbers if the boolean value is true. 
And return the total count of the odd numbers if the boolean value is false. 

Examples:
count([1, 5, 10], true) 		-> 1
count([3, 7, 2, 5, 10], false) 	-> 3
count([-1, 1, -2, 2], true) 	-> 2
count([0, -1, 15, 1], false) 	-> 3
count([1, 2, 3, 4, -4], true) 	-> 3
*/
/*
What we need to do: 
1.) SO based on the boolean value --> we need to return the COUNT of those number 
2.) We're looping through our array [.reduce()] --> returning the count 
    - true = count of EVEN numbers in the array  
    - false = count of ODD numbers in the array  
*/
const count = (array, boolean) => {
  if(boolean) return array.reduce((accum, ele) => ele % 2 === 0 ? accum + 1 : accum, 0); 
  return array.reduce((accum, ele) => ele % 2 !== 0 ? accum + 1 : accum, 0); 
  
}
console.log(count([1, 5, 10], true)); 
console.log(count([3, 7, 2, 5, 10], false)); 
console.log(count([-1, 1, -2, 2], true)); 
console.log(count([0, -1, 15, 1], false)); 
console.log(count([1, 2, 3, 4, -4], true)); 


console.log('\n ---------TASK07----------\n');
/*
Requirement:
Write a function named sumDigitsDouble() which takes a string 
and returns the sum of the digits in the given String multiplied by 2. 
Return -1 if the given string does not have any digits. Ignore negative numbers.

Examples:
sumDigitsDouble("Javascript") 	-> -1
sumDigitsDouble("23abc45")​ 	 -> 28
sumDigitsDouble("Hi-23") 	    -> 10
sumDigitsDouble("ab12") 	    -> 6
sumDigitsDouble("n0numh3r3") 	-> 12
*/
/*
What we need to do: 
1.) We need to extract/filter out the digits from the string --> convert string into an array to do so
2.) Use .filter() and/or .reduce() to extract digits and then multiplu them by 2 
3.) Include conditional statement if there are no digits --> return -1 
*/
const sumDigitsDouble = string => {
    let strArr = string.split('');
    let digits = strArr.filter((ele) => /[0-9]/.test(ele)); 
    
    if(digits.length === 0) return -1 
    return digits.reduce((accum, ele) => (accum + Number(ele) * 2), 0);  
}
console.log(sumDigitsDouble("JavaScript")); 
console.log(sumDigitsDouble("23abc45")); 
console.log(sumDigitsDouble("Hi-23")); 
console.log(sumDigitsDouble("ab12")); 
console.log(sumDigitsDouble("n0numh3r3")); 


console.log('\n ---------TASK08----------\n');
/*
Requirement:
Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string.

Examples:
countOccurrence("Javascript", "Java")    	-> 1
countOccurrence("Hello", "World") 		    -> 0
countOccurrence("Can I can a can", "anc")​   -> 3
countOccurrence("Hello", "l")​ 		         -> 2
countOccurrence("IT conversations", "IT")​ 	 -> 2
*/
/*
What we need to do: 
- Similar to isAnagram() & canFormString() --> we need to look at our first string (string1), BUT we focus on how many times string2 can 
  occur within string1 ==> SO this requires us to know the letters of the both and see if we can identify then within string1
1.) Create a seperate object that will serve as a container for our letters from string1
2.) We'll loop through string1, taking note of its key:value pairs --> chars: count 
3.) Next, we'll loop through string2 --> and see if the letters in string2 are somehow present in string1 
    - use .reduce() to return the counts? 
    - if they are --> we need to find a way to have multiple ways of arranging those chars and returning the count of how many ways 
    - if not --> return 0 
*/
const countOccurrence = (string1, string2) => {
    let string1Obj = {}; 
    let string2Obj = {}; 
    string1 = string1.toLowerCase().replace(/\s+/g, ""); // just like Task04/05 --> we're trying to ignore case-sensitivity & spaces
    string2 = string2.toLowerCase().replace(/\s+/g, "");

    for(const char of string1) {  // this is our first loop --> looping through string1 to create the key:value pairs [chars: count]
        string1Obj[char] = (string1Obj[char] || 0) + 1; 
    }

    for(const char of string2) {
        string2Obj[char] = (string2Obj[char] || 0) + 1; // same thing w/ string2
    }

    let minCount = Infinity; // created a minimum count and set it to Infinity to reassign it later on 

    for(let char in string2Obj) { // in this final for...in loop --> we're trying to compare the counts of each objects 
        // and see the MINIMUM amount of times you can form something with the letters from both strings 
        if(!string1Obj[char]) return 0; // if the char from stringObj1 DOES NOT exist in string2Obj --> return 0 
        let count = Math.floor(string1Obj[char] / string2Obj[char]); // this is where we divide how many letters we have in string1 by how many we need from string2 
        minCount = Math.min(minCount, count); // we reassign this variable to give us the minimum number of times we can form anythign from string2 ==> THIS IS OUR LIMIT
    }
    return minCount; 
}
console.log(countOccurrence("Javascript", "Java"));
console.log(countOccurrence("Hello", "World"));
console.log(countOccurrence("Can I can a can", "anc"));
console.log(countOccurrence("Hello", "l"));
console.log(countOccurrence("IT conversations", "IT"));