const Product = require("./prototypes/Product");

const pen = new Product('Pen', 20, 10); 
const tshirt = new Product('T-Shirt', 5, 20); 

console.log(pen); // Product { name: 'Pen', quantity: 20, price: 10 }
pen.sell(15); 
pen.return(3); 
pen.applyDiscount(2); 

console.log(pen); // Product { name: 'Pen', quantity: 8, price: 8 }

const mug = new Product('Mugs', 10, 15); 

mug.sell(20); // if you don't have any conditions to limit quantity --> Product { name: 'Mug', quantity: -10, price: 15 } NOT GOOD 
// new update: Error: We don't have 20 of Mugs in stock!
console.log(mug); 