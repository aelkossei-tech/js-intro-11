const nums = [-1, 1, 3, 0, 2, 6, 8];
// Please find the first even number from the array -> 0
let firstEven; 

for(const num of nums){
    if (num % 2 === 0) {
        firstEven = num; 
        break; 
    }
}
console.log(firstEven); 

/*
for(let i = 0; i < nums.length; i++){
 if(nums[i] % 2 === 0) {
 firstEven = nums[i]; 
 break; 
 }
}
*/ 

// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

let firstOddLengthCity; 
for(const city of cities){
    if(city.length % 2 !== 0) {
        firstOddLengthCity = city; 
        break; // to make sure you get the first iteration of what you want 
    }
}
console.log(firstOddLengthCity); // Chicago 


// Find the cities that have a length more than 5 --> ['Berlin', 'Chicago', 'Instanbul]
let finalArr = []; 
for(const city of cities) {
    if(city.length > 5) finalArr.push(city); 
}
console.log(finalArr); 