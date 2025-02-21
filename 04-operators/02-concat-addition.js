let n1 = 3; 
let n2 = '5'; 
let n3 = 4; 
let n4 ='10'; 

console.log(n1 + n2); //Concatenation b/c of the ' ' string --> so, '35'
console.log(n1 + n3 + n4 +n2); // '7105' 
console.log(n1 + (n3 + n4) + n2); // '34105' 

console.log(n2 * n1); // 15 

console.log(n4 / n2); // 2 

console.log('Hello' / 2) // NaN [Not a Number]

console.log(5 * true); // 5 ; true = 1 usuall 
console.log(5 * false); // 0 ; false = 0 usually 

console.log(5 * ''); // Empty strings always = 0 

console.log('the sum of 3 and 5' + 3 + 5); //the sum of 3 and 535
console.log('the sum of 3 and 5 = ' + (3 + 5)); // the sum of 3 and 5 = 8
console.log('the difference of 5 and 3 = ' + (5 - 3)); // the difference of 5 and 3 = 2
console.log('The product od 3 and 5 is =' + 3 * 5); // this one DOESN'T need the ( ) because of multiplication negates concatentation --> The product od 3 and 5 is =15


let today = 'Sunday'

console.log('Today is '+ today); 
console.log('Today is', today); 
console.log(`Today is ${today}`); //More preferred 