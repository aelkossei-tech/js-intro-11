const numbers = [-2, -5, 3, 0, 5, 8, 10];

// count even and positive numbers -> 2

console.log(numbers.reduce((accum, current) => current > 0 && current % 2 === 0 ? accum + 1 : accum, 0)); // whenever current is even AND positive --> increase our accumulator by 1 (accum + 1)

/*
filter() Solution

let countEvenPos = numbers.filter((x) => return (x > 0 && x % 2 === 0).length; 
console.log(countEvenPos); 
*/

const nums = [
    [1, 2, 3],
    [5, 10, 20],
    [100, 200]
  ];
// sum of numbers of inner arrays : [6, 35, 300]

/*
FOR...OF LOOP SOLUTION: 

const result = []; 

for(const innerArr of nums){ // [1, 2, 3] 
  let sum = 0; 
  for(const num of innerArr){
    sum += num; 
  }
  result.push(sum); 
}

console.log(result); 
*/
const result = nums.map((x) => x.reduce((acc, curr) =>  acc + curr, 0)); 
console.log(result); 


const words = ['hello', 'Tuesday', 'HEYY', 'Apple']; 
// Find all the words that have 5 letters --> ['HELLO', 'APPLE']

const result1 = []; 

for(const word of words){ 
    if(word.length === 5) result1.push(word.toUpperCase()); // more efficent w/ code 
}
console.log(result1); 

/*
forEach() Solution

words.forEach((x) => {
    if(x.length === 5) result.push(x.toUpperCase()); 
    }); 

    console.log(result1); 
*/

const result2 = words.filter(x => x.length === 5).map(x => x.toUpperCase()); 
console.log(result2); 

/*
reduce() Solution: 

words.reduce((acc, curr) => curr.length === 5 ? acc.push(curr.toUpperCase()) : acc, []); 
*/