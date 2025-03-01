const names = ['John', 'Jane', 'Alex', 'Mariia']; 

for(let i = 0; i < names.length; i++){  // i <= 3 ==> hard-coded + names.length by itself will bring undefined
    console.log(names[i]); 
}

console.log('End of the program!'); 

// Count how many even numbers we have in the array below --> 4 
const numbers = [2, 6, 3, -1, 10, 8]
let evenCounter = 0; 

for(let i = 0; i < numbers.length; i++){   // (i % 2 === 0)  --> is an INDEX, not the number itself 
    if(numbers[i] % 2 === 0) evenCounter++; // SO ==> the correct way to solve this numbers[i] % 2 === 0; 
}
// i <= numbers.length -1   OR   i < numbers.length 
console.log(evenCounter); 

