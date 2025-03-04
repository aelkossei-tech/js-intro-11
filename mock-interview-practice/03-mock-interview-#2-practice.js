/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument and
returns the given word back tripled if the string length is even or doubled if the string length is odd when
invoked.

Examples:
doubleOrTripleWord("Tech") -> "TechTechTech"
doubleOrTripleWord("Apple") -> "AppleApple”
doubleOrTripleWord("") -> ""
doubleOrTripleWord(" ") -> " "
doubleOrTripleWord("1") -> "11"
doubleOrTripleWord("22") -> "222222"
*/
const doubleOrTripleWord = word => {
    if(word.length % 2 === 0) {
        return word + word + word
    }
    else if(word.length % 2 !== 0){
        return word + word; 
    }
}
console.log(doubleOrTripleWord('Tech')); 
console.log(doubleOrTripleWord('Apple')); 

/*
First and Last Word
Write a function named as firstlastWord() which takes a string word as an argument and returns the
first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World") -> "HelloWorld"
firstLastWord("I like JavaScript") -> "IJavaScript”
firstLastWord("Hello") -> "HelloHello"
firstLastWord("") -> ""
firstLastWord(" ") ->
*/



/*
Has Vowel
Write a function named hasVowel() which takes a string argument and returns true if the string has a
vowel, returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.

NOTE: Ignore upper/lower cases.

Examples:
hasVowel("") -> false
hasVowel("Javascript") -> true
hasVowel("Tech Global") -> true
hasVowel("1234") -> false
hasVowel("ABC") -> true
*/


/*
Start Vowel
Write a function named as startVowel() which takes a string word as an argument and returns true if
given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U

Examples:
startVowel("Hello") -> false
startVowel("Apple") -> true
startVowel("orange") -> true
startVowel("") -> false
startVowel(" ") -> false
startVowel("123") -> false
*/
