const car = {
    make: 'Tesla', 
    model: 'Model 3', 
    trim: 'SEDAN', 
    color: 'Black'
}; 

// Serializing JS Object into JSON 
const carJSON = JSON.stringify(car); // static method

console.log(car); 
console.log(carJSON); // {"make":"Tesla","model":"Model 3","trim":"SEDAN","color":"Black"} --> JSON will never use single quotes, only double 


const student = '"ID": 1,"FULL_NAME": "John Doe,""EMAIL": "john@gmail.com"}'; 

// Validate the email is john@gmail.com 
// Convert/Deserializing JSON string into a JS Object 
const studentObject = JSON.parse(student); 
console.log(studentObject.email); 

// Getting info. from Server using fetch()
fetch('')


const obj = {
    age: undefined, // Not supported 
    favMovie: null, 
    symbol: Symbol(), // Not supported 
    printHi: function() { // Not supported 
        console.log('HI'); 
    }
}

const objJSON = JSON.stringify(obj); 
console.log(objJSON); // {"favMovie":null} --> will return only what's supported 