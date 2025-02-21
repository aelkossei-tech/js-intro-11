Math.random(); // returns a number between 0 (inclusive) and 1 (exclusive)

// Generate a random number between 3 and 5 (both inclusive)
// 3, 4, 5 

let result = Math.floor(Math.random () * 3) + 3; 
console.log(result); 

/*
Find a random number "a" and "b"
1. Calculate how many numbers you have in the range
   let count = biggerNumber - smallerNumber + 1 

2. Multiply the count you found with Math.random()
  result = Math.random() * count

3. Floor the result using Math.floor() method
    Math.floor(result)

4. Add your smaller number to a new result 
    finalResult = newResult + smallerNumber; 
    
    let result = Math.floor(Math.random() * (max - min + 1)) + min; [only if you're using floor, not ceil]
    let result = Math.ceil(Math.random() * (max - min + 1 )) + min - 1;
    let result = Math.round(Math.random() * (max - min + 1 )) + min ;
*/

// Generate random number between 6 and 10 (both inclusive)
let r1 = Math.floor(Math.random() * (10 - 6 + 1)) + 6; 
console.log(r1); 


let num1 = 2; 
let num2 = 4; 

// Generate a random number between num1 and num2 both inclusive 
let max = Math.max(num1, num2); 
let min = Math.min(num1, num2); 

let r2 = Math.floor(Math.random() * (max - min + 1) + min); 
console.log(r2); 


let num3 = '25.67999273';
console.log(Number.parseInt(num3)); 
console.log(Number.parseFloat(num3)); 
console.log((25.67999273.toFixed(3))); 
console.log(Number.isFinite(25.67999273));
console.log(Math.ceil(num3)); // 26
console.log(Math.floor(num3)); // 25 
console.log(Number(num3)); 



