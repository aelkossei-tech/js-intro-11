const numbers = [1, 2, 3]; 

const newNumbers = numbers.reverse(); 

console.log(newNumbers); // [ 3, 2, 1 ]

/*
What if I ned both my original arry as well as reversed version of the array?
*/
const arr = ['Jane', 'John', 'Alex']; 
const arr2 = new Array(arr); // 
console.log(arr2.reverse()); 

console.log(arr2[0]); // 'Jane'

/*
reverse()
TASK: reverses the array 
ARGUMENTS: No, no args.
RETURN: returns the same array w/ modifications 
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: Yes 
*/