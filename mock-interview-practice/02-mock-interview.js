/* Double The Word
Write a function named as doubleWord() which takes a string word as an argument and returns the
given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.

Examples:
doubleWord("Tech") -> "TechTech"
doubleWord("Global") -> "GlobalGlobal" 
*/
function doubleWord(word){
    return word + word
}; 
let nameValue = 'Rhynera'; 
console.log(doubleWord(nameValue)); 

/*
Write a function named as firstCharacter() which takes a string word as an argument and returns the
first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.

Examples:
firstCharacter("Tech") -> "T"
firstCharacter("Global") -> "G"
*/
function firstCharacter(word){
    return word[0]
}
let object = 'Chicago'
console.log(firstCharacter(object)); 


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
function firstTwoCharacters(word){
    return word.slice(0,2)
}
let show = 'Game of Thrones'; 
console.log(firstTwoCharacters(show)); 

/*
Write a function named as concat() which takes two string words as arguments and returns the words
concatenated when invoked.
NOTE: Concatenation should always be as first string + second string .

Examples:
concat("Tech", "Global") -> "TechGlobal"
concat("Hello", "World") -> "HelloWorld"
concat("", "abc") -> "abc"
concat("123", "1234") -> "1231234"
*/
function concat(word){
    return word + word
}
let str = 'Friends'; 
console.log(concat(str)); 

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
function lastCharacter(character){
    return character[character.length - 1]; 
}
console.log(lastCharacter('Ned Stark')); 

/*
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
function lastTwoCharacters(word){
    if (word < 2){
        return " "
    }
    else{
        word[word.length - 2]
    }
}
console.log(lastTwoCharacters('Flipped')); 

/*
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
    if (word.length < 2) {
        return word
    }
    else{
        return `${word[0]}` + `${word[word.length - 1]}`
}
}
console.log(firstLast('NewGirl')); 
console.log(firstLast(' ')); 
console.log(firstLast('Jon Snow'));

/*
Write a function named as hasFive() which takes a string word as an argument and returns true if given
string has at least 5 characters, and false otherwise when invoked.

Examples:
hasFive("Tech") -> false
hasFive("Global") -> true
hasFive("") -> false
hasFive("12345") -> true
hasFive("hello") -> true
*/
function hasFive(word){
    if (word.length >= 5){
        return true
    }
    else{
        return false
    }
}
console.log(hasFive('Tech')); // false 
console.log(hasFive('Global')); // true 

/*
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
    return
}

/*
Write a function named as longer() which takes two string words as arguments and returns the string
that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.

Examples:
longer("Tech", "Global") -> "Global"
longer("Hello", "Hi") -> "Hello"
longer("Hello", "World") -> "Hello"
*/ 
function longer(word1, word2){
    if (word1.length >= word2.length){
        return word1
    }
    else{
        return word2
    }
}
console.log(longer('Nick','Jessica')); 
console.log(longer('Cece', 'Winston')); 
console.log(longer('Schmidt', 'Winston')); // returns Schmidt becuase it's the first string and they're equal in length

/*
Write a function named as shorter() which takes two String words as arguments and returns the String
has less characters when invoked.
NOTE: if both of the words have the same length, then return the second String.

Examples:
shorter("Tech", "Global") -> "Tech"
shorter("Hello", "Hi") -> "Hi"
shorter("Hello", "World") -> "World"
*/
function shorter(string1, string2){
    if (string1.length < string2.length){
        return string1
    }
    else{
        return string2
    }
}
console.log(shorter('Chicago', 'Miami')); 
console.log(shorter('Berlin', 'Rome')); 
console.log(shorter('Ayah', 'Eman')); 


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
function startsVowel(word){
    const vowels = ['a','e','i','o','u'];
    return vowels.includes(word.charAt(0).toLowerCase());
}
console.log(startsVowel('abc')); 
console.log(startsVowel('Apple')); 

