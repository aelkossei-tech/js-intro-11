const nums = [-1, 1, 3, 0, 2, 6, 8];
// Please find the first even number from the array -> 0
let firstEven = nums.find((x) => x % 2 === 0); // --> checks each element until it find TRUE --> then it STOPS 
let firstEvenIndex = nums.findIndex((x) => x % 2 === 0); // --> checks for the INDEX of element that's TRUE --> then it STOPS 

let firstPos = nums.find((x) => x > 0); 
console.log(firstEven); // 0  
console.log(firstEvenIndex); // 3 
console.log(firstPos); // 1 


const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];
// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

console.log(cities.find((city) => city.length === 4)); // Rome 
console.log(cities.findLast((city) => city.length === 6))// Brugge 
console.log(cities.find((city) => (city.includes('LA')))); // 4 --> ALSO city === 'LA" 
console.log(cities.find((city) => city.includes('i'))); // Kyiv 
console.log(cities.findLast((city) => city.length === 4)); // Kyiv 
// ALSO --> cities.toReversed()

// if find() condition doesn't work --> undefined
// if findIndex() condition doesn't work --> -1 