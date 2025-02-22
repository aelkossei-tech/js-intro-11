const students = ['John', 'Alex', 'Jessie', 'Jane', 'Omar', 'Omar'];

// command + D --> chooses all the same variable to change it all at the same time  OR F2 to do the same thing 
students.includes('John'); // true
students.includes('Omar'); // true
students.includes('Max'); // false
students.includes('jane'); // false --> b/c it's case-sensitive [Jane !== jane]

/*
includes()
TASK: checks if the array has the specified element 
ARGUMENTS: takes element as an argument 
    NOTE: It can take a second argument which is the start indexOf searcg
RETURN: returns TRUE if the element exists in the array, FALSE otherwise 
STATIC or INSTANCE: instance 
DOES IT MODIFY ORIGINAL ARRAY: No 
*/

students.indexOf('Jane'); // 3
students.lastIndexOf('Jane'); // 3 

students.indexOf('Omar'); // 4
students.lastIndexOf('Omar'); // 5 

students.indexOf('Heidi'); // -1
students.lastIndexOf('Heidi'); // -1 

/*
indexOf()
TASK: checks if the array has the specified element and returns the index of first mathching element 
ARGUMENTS: takes element as an argument 
    NOTE: It can take a second argument which is the start indexOf search
RETURN: returns a valid first index if the element exists in the array, -1 otherwise 
STATIC or INSTANCE: instance 
DOES IT MODIFY ORIGINAL ARRAY: No 
*/

/*
lastIndexOf()
TASK: checks if the array has the specified element and returns the index of last mathching element 
ARGUMENTS: takes element as an argument 
    NOTE: It can take a second argument which is the start indexOf search
RETURN: returns a valid last index if the element exists in the array, -1 otherwise 
STATIC or INSTANCE: instance 
DOES IT MODIFY ORIGINAL ARRAY: No 
*/