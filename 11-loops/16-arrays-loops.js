const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
console.log('\n--------TASK-1--------\n');
// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19

let sumforEvenInex = 0; 
for(let i = 0; i < numbers.length; i += 2){
     sumforEvenInex += numbers[i]; 
}
console.log(sumforEvenInex); 


console.log('\n--------TASK-2--------\n');
// Find the sum of numbers that has odd index -> 4 * 3 * 2 -> 24

let productforOddIndex = 1; 
for(let i = 1; i < numbers.length; i+= 2){
    productforOddIndex *= numbers[i]; 
}
console.log(productforOddIndex); 

