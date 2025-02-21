// Extracting Characters 
let fname = "John"; 

console.log(fname.charAt(2)); // h 
console.log(fname.charCodeAt(2)); //ASCII Unicode for h = 104

// Searching 
let quote = 'You can do it'; 
let text = 'back to back'; 

console.log(quote.search('You')); //0 
console.log(quote.search('can')); 

console.log(text.indexOf('to')); // 5 --> because it includes the space in between 
console.log(quote.lastIndexOf("do")); // 8 

// Trimming 
let city = '  \'Chicago\' '; 
console.log(city); 
console.log(city.trim()); 

// Extracting Partial Strings 

let getInitials = 'Ayah Elkossei' ; 
console.log(getInitials.slice(1, 6)); 