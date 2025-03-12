let fullName = 'John Doe'; 
let age = 25; 
let address = {
    street: '123 ABC Street', 
    city: 'Chicago', 
    state: 'IL', 
    zip: 12345
}

// BEFORE ES6 --> Make a JS Object out of above variables 
const customerObj = {
    fullName, // you'd have to assign things to varirables 
    age, 
    address
}; 

console.log(customerObj); 
res.send(JSON.stringify(customerObj)); 