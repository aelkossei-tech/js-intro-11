const names = ['Alex', 'John', 'Jane']; 

let namesStr1 = names.toString(); 
let namesStr2 = names.join('-'); 

console.log(namesStr1); 
console.log(namesStr2); 

/*
join()
TASK: it converts our array to a string with a defined seperator(if given)
ARGUMENTS: an optional seperator 
RETURN: a string 
STATIC or INSTANCE: instance 
DOES IT MODIFY ORIGINAL ARRAY: No 
*/