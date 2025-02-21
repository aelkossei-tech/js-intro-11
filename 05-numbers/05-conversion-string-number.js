// Convert string to a number (use this more than number --> string)

let price = '100'; 

let newPrice = parseFloat(price) + 10; // 10; whenever you're dealing with money, preferable to use parseFloat 

console.log(newPrice); //110


// Convert number to a string 
let count = 10; 

console.log(count + 5); //15
console.log(count.toString() + 5); //'105' 


