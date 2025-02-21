function isDigit(char) {
return /[0-9]/.test(char); // OR return /\d/.test(char)
}
    
/* SAME AS
let charCode = char.codeAt(0); 
return  charCode >= 48 && charCode <= 57; 
*/

function isLowerCase(char) {
return /^[a-z]$/.test(char); 
}

function isUpperCase(char) {
return /^[A-Z]$/.test(char); 
}

function isLetter(char) {
return /^[A-Za-z]$/.test(char); 
}

function isSpace(char) {
 return char === ' ';  
}

function isDigitorLetter(char) {
    return isDigit(char) || isLetter(char); 
}

function isSpecial(char) {
    return /^[^A-Za-z0-9\s]$/.test(char);  // return !(isDigitorLetter(char) || isSpace(char)); 
}

function isVowel(char) {
    return /^[aeiou]$/i.test((char));  // i = ignore cases 
}

// Store all in a single object and export your object 
const CharacterHelper = {
    isDigit,  
    isLowerCase,
    isUpperCase, 
    isLetter, 
    isSpace,
    isDigitorLetter,
    isSpecial, 
    isVowel, 
};

module.exports.CharacterHelper = CharacterHelper; 
