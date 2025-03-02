const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
console.log('\n--------TASK-1--------\n');
// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4
let sum = 0; 
for(number of numbers){
    sum += number; 
}
console.log(sum); 
console.log(sum/numbers.length); 

// numbers.forEach((number) => sum += number); --> for each methods for arrays 

console.log('\n--------TASK-2--------\n');
// Find the product of all the numbers starting from the index 3 -> 3 * 2 * 2 * 7 --> 84
let product = 1; 
for(let i = 3; i < numbers.length; i++){ // i = 3, 4, 5, 6
    product *= numbers[i]; // you'd use FOR loop not FOR OF b/c there's a set range for your indexes 
}
console.log(product); 
/*
for(const num or numbers.slice(3)){ --> [3, 2, 2, 7]
    product *=
}
*/