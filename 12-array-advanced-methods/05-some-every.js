const numbers = [1, 2, 3, 4 , 5]; 

// Check if all numbers in the array are positive 

let flag = true;  // I assume all the numbers are positive 
/*
for(const num of numbers){  --> more preferred, since you're using break to stop perfomance faster 
    if(num <= 0) {
       flag = false; 
       break; 
  }
}

numbers.forEach((x) => {
   if(x <= 0) flag = false; 
})

console.log(flag); // true 
*/
let allPos = numbers.every((x => x > 0)); // not better than for...of loop since it checks EVERY instance 

console.log(allPos); 


const citiies = ['Chicago', 'Berlin', 'Rome']; 

// check is any city has 6 letters --> true 
let some6 = citiies.some(x => x.length === 6); 

console.log(some6); // true --> because of 'Berlin' 