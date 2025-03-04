const numbers = [5, 7, 1, 3, 10]; 

// for loop --> instance methods
for(let i = 0; i < numbers.length; i++){
    console.log(i); 
}

// for...of loop --> instance methods
for(const number of numbers){
    console.log(number); 
}

// forEach() method
numbers.forEach((x) => console.log(x * 2));  // OR function (x)
// just like sort(), when you delcare your paramters in your callback function (a, b)

const names = ['Alex', 'John', 'Jane', 'Victoria']; 

// Print all the names that has 4 characters  --> preferred way is filter() method
names.forEach((x) => {
    if(x.length === 4) console.log(x); 
}); 
/*
names.forEach(function(x) {
    if(name.length === 4) console.log(name); 
})
*/

const nums = [5, 3, 2, 1]; 

// Find the sum of numbers: 11    --> preferred way is reduce() method
// Find the product of numbers: 30    --> preferred way is reduce() method
// Create a new array which has all numbers multiplied by 5: [25, 15, 10, 5]    --> preferred way is map() method
let sum = 0; 
let product = 1; 
let finalArr = []; 

nums.forEach((x) => {
    sum += x; 
    product *= x;  
    finalArr.push(x * 5); 
}); 
console.log(sum); 
console.log(product); 
console.log(finalArr); 