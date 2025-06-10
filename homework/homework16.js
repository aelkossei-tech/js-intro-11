console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named toInitials() which takes a string argument considered to be full name 
and returns initials of the given full name.

NOTE: Initials should be separated with a space and followed with a period.
Assume you will always be given first name and last name only. 

Examples
toInitials( "Joe Doe")   	 -> "J. D."
toInitials( "Alex Reyes") 	 -> "A. R."
toInitials( "Tom Cruise") 	 -> "T. C."
toInitials( "Bruce Willis")  -> "B. W."
toInitials( "Ja Le") 	     -> "J. L."
*/
/*
What we need to do: 
1.) We're going to loop through our string [maybe make it into an array, with space]
2.) Extract/slice [0, 1] of each word (since it's only two words: [fname, lname]);
*/
const toInitials = string => string.split(' ').map(ele => ele[0] + '.').join(' '); 
console.log(toInitials('Joe Doe'));
console.log(toInitials('Alex Reyes'));
console.log(toInitials('Tom Cruise'));
console.log(toInitials('Bruce Willis'));
console.log(toInitials('Ja Le'));


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named hasNumbers() which takes a string argument 
and returns true if there is a number and false if there isn’t. 

Examples:
hasNumbers("") 		                -> false
hasNumbers("John is 34 years old") 	-> true
hasNumbers("Hello 3") 	            -> true
hasNumbers("125$") 		            -> true
hasNumbers("   a   ") 		        -> false
hasNumbers("      ") 		        -> false
hasNumbers("!@#$%^&*()_+") 	        -> false
*/
/*
What we need to do: 
1.) Loop through our string --> use regex and w/o
*/
// WITH regex
const hasNumbers = string => {
    for(let i = 0; i < string.length; i++) {
        if(/[0-9]/.test(string[i])) return true;    
    }
    return false;
}
console.log(hasNumbers(''));
console.log(hasNumbers('John is 34 years old'));
console.log(hasNumbers('Hello 3'));
console.log(hasNumbers('125$'));
console.log(hasNumbers('  a  '));
console.log(hasNumbers('   '));
console.log(hasNumbers('!@#$%^&*()_+'));

//OR  WITHOUT regex
const hasNumbers2 = string => {
    for(let i = 0; i < string.length; i++) {
       // char >= '0' && char <= '9'
        if(string[i] >= '0' && string[i] <= '9') return true; 
    }
    return false; 
}
console.log(hasNumbers2(''));
console.log(hasNumbers2('John is 34 years old'));
console.log(hasNumbers2('Hello 3'));
console.log(hasNumbers2('125$'));
console.log(hasNumbers2('  a  '));
console.log(hasNumbers2('   '));
console.log(hasNumbers2('!@#$%^&*()_+'));


console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named elementLength() which takes an array argument 
and returns the length of each element as a separate array.

Examples:
elementLength( [ "Hello", "World" ] ) 			                -> [ 5, 5 ]
elementLength( [ "Apple", "Banana", "Orange", "Pear" ] ) 	    -> [ 5, 6, 6, 4 ]
elementLength( ["BMW", "Mercedes", "Audi" ] ) 		            -> [ 3, 8, 4 ]
elementLength( [ ] ) 				                            -> [ ]
elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] ) 	-> [ 10, 0, 6, 10 ]
*/
/*
What we need to do: 
1.) Loop through our array parameter ==> .map(); 
*/
const elementLength = array => array.map(ele => ele.length); 
console.log(elementLength([ 'Hello', 'World' ]));
console.log(elementLength([ 'Apple', 'Banana', 'Orange', 'Pear']));
console.log(elementLength([ 'BMW', 'Mercedes', 'Audi']));
console.log(elementLength([ ]));
console.log(elementLength([ 'Trampoline', '', 'Tennis', '' ]));


console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named isArraySumEvenOrOdd() which takes an array of numbers 
and calculates if the sum of its elements is even or odd.

Note: If the array is empty return even.

Examples:
isArraySumEvenOrOdd( [ ] ) 	            -> "even"
isArraySumEvenOrOdd( [ 0,-1,-5 ] )      -> "even"
isArraySumEvenOrOdd( [ 7,1, 8,1 ] )     ->  "odd”
isArraySumEvenOrOdd( [ 0,0 ] ) 	       ->  "even"
isArraySumEvenOrOdd( [ 1,1,1,1,1 ] )   ->  "odd”
*/
/*
What we need to do: 
1.) Loop through our array parameter --> .reduce() --> get the sum of all the numbers 
2.) Return the sum from the reduce() method --> even or odd
*/
const isArraySumEvenOrOdd = array => {
    let result = array.reduce((accum, ele) => accum + ele, 0); 
    return (result % 2 === 0 || result === 0) ? 'even' : 'odd'; 
}
console.log(isArraySumEvenOrOdd([ ]));
console.log(isArraySumEvenOrOdd([ 0,-1,-5 ]));
console.log(isArraySumEvenOrOdd([ 7, 1, 8, 1 ]));
console.log(isArraySumEvenOrOdd([ 0, 0 ]));
console.log(isArraySumEvenOrOdd([ 1, 1, 1, 1, 1 ]));


console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a function named reverse() which takes a string argument 
and returns the given string reversed. 

Examples:
reverse("Hello World") 		    -> "dlroW olleH"
reverse("TechGlobal") 		    -> "labolGhceT"
reverse("Basketball is fun") 	-> "nuf si llabteksaB"
reverse("") 			        -> ""
reverse("Apples 456") 		     -> "654 selppA"
*/
const reverse = string => string.split('').reverse().join(''); 
console.log(reverse('Hello World')); 
console.log(reverse('TechGlobal')); 
console.log(reverse('Basketball is fun')); 
console.log(reverse('')); 
console.log(reverse('Apples 456')); 


console.log('\n ---------TASK06----------\n');
/*
Requirement:
Write a function named reverseWords() which takes a string argument 
and returns a string with each word within that string reversed but still in the same order as the initial string. 

Examples:
reverseWords("Hello World") 	-> "olleH dlroW"
reverseWords("TechGlobal") 	-> "labolGhceT"
reverseWords("Basketball is fun") 	-> "llabteksaB si nuf"
reverseWords("") 		-> "”
reverseWords("Apples 456") 	-> "selppA 654"
*/
const reverseWords = string => string.split(' ').map(ele => ele.split('').reverse().join('')).join(' '); 
console.log(reverseWords('Hello Word'));
console.log(reverseWords('TechGlobal'));
console.log(reverseWords('Basketball is fun'));
console.log(reverseWords(''));
console.log(reverseWords('Apples 456'));