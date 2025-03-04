const names = ['Alex', 'John', 'Jane', 'Victoria', 'Mariia']; 

// Get all the names that have 4 characters: ['Alex', 'John', 'Jane'] --> when counting ==> reduce() is prefered with this

const names4 = names.filter((x) => x.length === 4);// you can even put this within a variable 
     // whichever element goes along with the condition --> collects your results in an array 

console.log(names4); 

// (names4 = names.filter((x) => x.length === 4).forEach(x) => console.log(x)); 

// How many names has 'a' or 'A' in it: 4
console.log(names.filter((name) => name.toLowerCase().includes('a')).length); 


// Find all the numbers that are 50 or more -> [100, 77, 50, 65]
const numbers = [10, 5, 100, 77, 50, 65, 0];
console.log(numbers.filter((number) => (number >= 50))); 


// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4   --> reduce() methods would be preferred
// Count how many elements has i      -> 2   --> reduce() methods would be preferred
const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];

console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('apple'))); 
console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('a')).length); 
console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('i')).length); 