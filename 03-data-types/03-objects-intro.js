let fname = 'John'; 
let lname = 'John Doe';
let age = 45; 
let vip = false; 

const person = { //an object is a bunch of properties 
    fname: 'John', 
    lname: 'Doe', 
    age: 45, 
    vip: false
}; 

console.log(person); //{ fname: 'John', lname: 'Doe', age: 45, vip: false }
console.log(typeof person); //object

//fname
let fnme = person.fname; 

console.log(fname); //John 
console.log(typeof fname); //string 
console.log(typeof person.age); //number 

// How to access properties of an object 
console.log(person.fname); 
console.log(person.lname); 
console.log(person['fname']); 
console.log(person['lname']); 

//Updating the property values for an object 
const program = {
    name:'SDET',
    start: 'Jan 20, 2025', 
    duration: '6 months'
}; 

console.log(program); 

program.start = 'Jan 27, 2025'; 
program['duration'] = '7 months'

console.log(program); 

const student = {
    fullname: 'John Doe', //fullname is key; John is value type 
    courses: ['Math', 'Science'], 
    address: {
        street: '123 Abd St', 
        number: null,
        city: 'Chicago', 
        state: 'IL', 
        ZIPCode: '12345 1234'
    }
}; 


student.courses[1] //finding Science 

console.log(student); 

//Adding a property to an existing object 
student.age = 25
student['favDish'] = 'Salmon salad'; 

console.log(student); 

//Remove some properties from an existing object
delete person.address;
delete person.age; 
delete person ['fav Dish']



console.log((3 == "3" || 2 + 5 === "7") && !(5 < 10 || !false)); 