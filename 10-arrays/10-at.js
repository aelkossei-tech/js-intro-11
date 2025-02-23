const arr = ['Mouse', 'Laptop', 'Keyboard', 'Camera']; 

//First and last elements in the array 
arr[0]; 
arr[arr.length - 1]; 

// Second and the second from the last 
arr[1]; 
arr[arr.length - 2]; 


console.log(arr.at(-1)); 

// Find the average of first and last element in the below array
const numbers = [5, 7, 19, 15]

console.log((numbers[0] + numbers.at(-1)) / 2); 

/*
at()
TASK: used to retrieve element at specified index 
ARGUMENTS: it takes a number as an index
    NOTE: it works with negative indexes as well (backwards)
RETURN: returns an element found at the specified index
    NOTE: if there's no element at the specified index -> it returns UNDEFINED 
STATIC or INSTANCE: instance 
DOES IT MODIFY ORIGINAL ARRAY: NO 
*/

// [index] access vs. at(index)
console.log([1, 2, 3].at(1)); // 3
console.log([1, 2, 3][1]); // undefined 

console.log([1, 2, 3].at(5)); // undefined
console.log([1, 2, 3].at(-5)); // undefined
console.log([1, 2, 3][1]); // undefined 
