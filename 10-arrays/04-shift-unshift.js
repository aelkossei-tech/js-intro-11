const objects = ['Laptop', 'Remote', 'Pen', 'Camera']; 

objects.unshift('Mouse'); // 5 --> returns the length as well (if you print it)
objects.unshift('Pencil', 'Eraser', 'Adapter'); // 8 
console.log(objects); // [ 'Mouse', 'Laptop', 'Remote', 'Pen', 'Camera' ]

objects.shift(); // 'Pencil'; like pop() --> doesn't take an argument 
// with shift() --> takes a
objects.shift(); // 'Eraser' 

console.log(objects); 

/*
unshift()
TASK: adds one or more elements to start of the array 
ARGUMENTS: one or more elements 
RETURN: new length of the array 
STATIC or INSTANCE: instance 
DOES IT MODIFY ORIGINAL ARRAY: Yes
*/

/*
shift()
TASK: removes the last element(ONLY) from the start of the array
ARGUMENTS: No
RETURN: returns removed element 
    NOTE: If the array is empty --> returns "undefined"
STATIC or INSTANCE: instance 
DOES IT MODIFY ORIGINAL ARRAY: Yes
*/

