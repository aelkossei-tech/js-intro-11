const animals = ['Lion', 'Bird', 'Tiger']; 

animals.push('Rabbit');  // push() always add to the TAIL (end of array) --> 4 (before it was 3)
animals.push('Monkey', 'Fish'); 

console.log(animals); // [ 'Lion', 'Bird', 'Tiger', 'Rabbit' ] --> not the best because you don't always know the last index 

/*
push()
TASK: adds one or more elements to the TAIL(end) of the array 
ARGUMENTS: one or more elements
RETURN: it returns the new length of the array (returns a number)
STATIC or INSTANCE: Instance
DOES IT MODIFY ORIGINAL ARRAY: Yes 
*/

const numbers = [5, 10, 100, 7, 20]; 

numbers.pop();  // pop ONLY removes last elements 

console.log(numbers); // [ 5, 10, 100, 7 ]

numbers.pop(); 

console.log(numbers); // [ 5, 10, 100 ]

/*
pop()
TASK: removes the last element in the array 
ARGUMENTS: no args. 
RETURN: returns the removed element 
    NOTE: if the array is empty --> returns "undefined"
STATIC or INSTANCE: instance 
DOES IT MODIFY ORIGINAL ARRAY: Yes 
*/