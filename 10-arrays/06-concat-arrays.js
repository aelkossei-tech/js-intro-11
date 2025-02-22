const arr1 = [1, 2, 3]; 
const arr2= [6, 7, 8]; 
const arr3 = [4, 5, 6]; 

arr1.concat(arr2); // [1, 2, 3, 6, 7, 8]

arr1.concat(arr3, arr2); // [1, 2, 3, 4, 5, 6, 6, 7, 8]; 

/*
concat()
TASK: it merges/concatenates multiple arrays together
ARGUMENTS: one or more arrays/elements
RETURN: returns a new array
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: No 
*/

console.log([1, 5, 10].concat(100)); // even though it's trying to combine array + number --> JS will still add it within the new array 