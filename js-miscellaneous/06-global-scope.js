// Globally Scope 
let name = 'John'; 

const cities = [ 'Rome', 'Berlin' ]; 

const person = {
    fullName: 'John Doe',
    age: 45
}; 

const sayHi = () => console.log('Hi'); 

// Globally access these variable 
console.log(cities); 
console.log(name); 
console.log(person); 
sayHi(); 

// Locally access the variables 
for(let i = 0; i < cities.length; i++){
    console.log(cities[i]); 
    
}

function funcA() {
    sayHi(); 
}