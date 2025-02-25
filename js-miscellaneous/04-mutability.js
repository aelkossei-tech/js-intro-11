// Primitives are IMMUTABLE 
let num1 = 10; 

let num2 = num1; 

console.log(num1, num2); // 10 10 

num2 = 11; 

console.log(num1, num2); // 10, 11 --> primiitves = immutable 

// References are MUTUABLE 
const arr1 = [1, 2, 3]; 
const arr2 = arr1; 

console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 1, 2, 3 ]

arr1.pop(); 
arr2.pop(); 

console.log(arr1); // [1] ==> since you modified arr1 --> arr2 is affected now 
console.log(arr2); // [1] 

// Object example
const table1 = {
    material: 'wood',
    color: 'brown'
}; 

const table2 = table1; 
table1.material = 'granite'; 
delete table2.color; 

console.log(table1); // updates for both table1 and table2 
console.log(table2); 

// Then how can I have an independent copy of reference types?
const testAccount = {
    username: 'TestTech123',
    password: 'SuperSecretPassword',
    fullName: 'John Doe'
}; 

// SHALLOW COPY by using spread operator 
const testAccountCopy = {
    ...testAccount // same thing as copying/pasting the info. above
}; 

testAccountCopy.fullName = 'Alex Smith'; 

console.log(testAccount); 
console.log(testAccountCopy); 


// Why Shallow Copy is not the best choice
// Shallow copy will NOT not work with nested objects 
const student = {
    fullName: 'John Doe', 
    grades: {
        mid: 50, 
        final: 75
    }
}; 

const studentCopy = {
    ...student
}; 

studentCopy.fullName = 'Alex Smith'; 
studentCopy.grades.final = 100; 

console.log(student); // { fullName: 'John Doe', grades: { mid: 50, final: 100 } }
console.log(studentCopy); // { fullName: 'Alex Smith', grades: { mid: 50, final: 100 } }

// Deep Copy using JSON 
const instructor = {
    id: 1, 
    students: [
        {
            fullName: 'John Doe', 
            grades: {
             final: 100
            }
        },
        {
            fullName: 'Jane Doe',
            grades: {
                final: 100
            }
             
        }
    ]
}; 

const instructorCopy = JSON.parse(JSON.stringify(instructor)); // creating a complete independent copy of object 
instructorCopy.students[1].fullName = 'Alex Smith'; 

console.log(instructorCopy.students[1].fullName); 
console.log(instructor.students[1].fullName); 