/* Middle
Wrtie a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle 2 characters if the string has even





*/
const middle = word =>{
    if(word.length === 0) return ''; 
    if (word.length % 2 === 0) return word[(word.length /2) -1 ] + word[word.length/2]; 
        else return word[Math.floor(word.length/2)]
}
console.log(middle('123456789')); // 5
console.log(middle('Bilal')); // l
console.log(middle('Tech')); //ec
console.log(middle('Global')); //ob
console.log(middle('')); // ''

