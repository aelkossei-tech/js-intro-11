const numbers = [3, 6, 10, 4]; 

// max: 10 
// min: 3
// sum: 23
// product: 720 
// count pos: 4 
// count evens: 3 
// count odds: 1 

// countEven 
let countEven = numbers.reduce((accumulator, current) => current % 2 === 0 ? accumulator + 1 : accumulator, 0); // 0 --> accumulator 
// current = x in other methods 
console.log(countEven); // 3 

let sum = numbers.reduce((accum, current) =>  accum + current, 0); 
console.log(sum); 

// curr = 3, 6, 10, 4
// acc = 720 
let product = numbers.reduce((accum, current) => accum * current, 1); 
console.log(product); 

// max
let max = numbers.reduce((acc, curr) => curr > acc ? curr : acc, -Infinity); 
console.log(max); // 10 
// same thing as Math.max(...numbers); 

const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// Find shortest fruit -> Kiwi

/*
FOR...OF LOOP: 

let shortest = fruits[0]; // Assuming our shortest is Apple --> 'Kiwi' 

for(const fruit of fruits){ // fruit: 'Apple', fruit: 'Orange', fruit: 'Kiwi' 
    if(fruit.length < shortest.length) shortest = fruit; 
}

console.log(shortest); 
*/

fruits.reduce((accum, curr) => accum.length < curr.length ? accum : curr); 