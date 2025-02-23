const students = [
   ['A', 'B', 'C'],
   ['X', 'Y', 'Z'],
   ['K', 'L'],
   ['D']
];

console.log(students); 
console.log(students.flat()); // 9


const numbers = [
    [1, 2, 3], 
    [4, 5, [6, 7, [8, 9]]]
]; 

console.log(numbers); 
console.log(numbers.flat()); 
console.log(numbers.flat(2)); 
console.log(numbers.flat(3)); 


/*
flat()
TASK: flattens nested arrays 
ARGUMENTS: it can take an optional depth argument 
    NOTE: by dfault it is 1 
RETURN: a new array which flattened 
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY:No 
*/