const names = ['alex', 'Adam', 'Jane', 'John', 'alexander']; 

names.sort(); 

console.log(names); // [ 'Adam', 'Jane', 'John', 'alex', 'alexander' ]

const numbers = [1, 40, 15, 20, 2]; 
numbers.sort((a, b) => a - b); 

console.log(numbers); // [ 1, 15, 2, 20, 40 ] --> looks as Strings (ASCII based)


const studentAges = [25, 19, 45, 55, 32]
studentAges.sort((x, y) => y - x); // [55, 45, 32, 25, 19]