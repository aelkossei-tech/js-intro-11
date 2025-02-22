const arr1 = []; // creating/declaring an array with array templates 
const arr2 = new Array(); // creating an array with Array constructor 

const cities = ['Chicago', 'Miami', 'Des Plaines']; 
console.log(cities); 



const favorites = [
    ['Salmon', 'Salad'], 
    ['Amok', 'My Name is Red'],      // nested arrays/ multi-dimensional arrays
    ['Chicago', 'LA', 'Toronto'], 
    ['Tesla', 'Toyota', 'BMW', 'Honda']
];
favorites.length; // 4
favorites[2].length; // 3
favorites[1].length; // 2

const functions = [
    function hi() {
        console.log('Hi');
    },
    function hello(){
        console.log('Hello'); 
    }
]
functions[0](); // Hi 
functions[1](); // Hello 

// Basics of Arrays 
const numbers = [10, 5, 7, -3, 15]; 

// Get the size of the array using length property 
let size = numbers.length; // 5 

console.log(size); 

// Get the elements in an array using indexes (indexing starts from 0)
numbers[0]; // 10
numbers[3]; // -3 

numbers[-1]; // undefined 
numbers[5]; // undefined 

// How to dynamically get first last element in an array using property acces 
const names = ['John', 'Jane', 'Max']; 

names[0]; // ALWAYS returns first name 
names[names.length - 1]; // ALWAYS returns the last name 

names[1.5]; // undefined 


