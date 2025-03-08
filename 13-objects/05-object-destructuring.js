const cities = [ 'Rome', 'Berlin', 'Kiev' ]; 

const [capItaly, capGermany, capUkraine] = cities; 
/*
const capItaly = cities[0]; 
const capGermany = cities[1]; 
const capUkraine = cities[2]; 
*/
console.log(capItaly); // Rome


const account = {
    accountHolder:'John Doe', 
    email: 'johndoe@gmail.com', 
    password: 'John123',
    username: 'johnwashere', 
    DOB: '01/01/2000', 
    accountNumber: '1234-1234-1234-1234', 
    securityCode: 123
}; 
/*
const username = account.username; 
const password = account.password; 
const email = account.email; 
*/

const { username, password, email, DOB } = account; // modifying keys --> DOB: dateOfBirth [not common though]
console.log(username); 
console.log(password); 
console.log(email); 
console.log(DOB); 

// Object destructuring --> {} and doesn't use indexes 