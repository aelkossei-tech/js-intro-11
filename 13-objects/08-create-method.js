const person = { // person is the parent of person2
    fname: 'John', 
    lname: 'Doe', 
    age: 25
}; 

const person2 = Object.create(person); 

person.fname = 'Jane'