// TASK: Create a Teacher prototpe with fname, lname, age, field properties 

function Teacher(fname, lname, age, field) {
    this.fname = fname; 
    this.lname = lname; 
    this.age = age; 
    this.field = field; 
}

// Create 2 Teacher Prototype methods as teach and giveHomework - void and logs 
// fname teaches field. 
// fname gives homework 

Teacher.prototype.teach = function() {
    console.log(`${this.fname} teaches ${this.field}`); 
}

Teacher.prototype.giveHomework = function() {
    console.log(`${this.fname} gives homework`); 
}

// Create 4 teacher objects 
const teacher1 = new Teacher('John', 'Doe', 35, 'Math');
const teacher2 = new Teacher('Jane', 'Donnely', 55, 'English');
const teacher3 = new Teacher('Sarah', 'Elly', 43, 'Art');
const teacher4 = new Teacher('Adam', 'Bayer', 33, 'Science');

const teachers = [teacher1, teacher2, teacher3, teacher4]; 
// teachers.forEach(x => console.log(x.fname)); 

// Find the oldest Teacher -> Jane
const oldest = teachers.reduce((acc, curr) => {
    if(curr.age > acc.age) acc = curr; 
    return acc; 
}, teachers[0])

console.log('Oldest teacher is:', oldest.fname); 

// Find the average age of the teachers -> 39
const sumOfAges = teachers.reduce((acc, curr) => acc += curr.age, 0); 
console.log('Sum of ages', sumOfAges); 
console.log('Average of ages', sumOfAges/teachers.length); 

// Find the youngest teacher -> Adam Bayer
const youngest = teachers.reduce((accum, current) => {
    if(current.age < accum.age) accum = current; 
    return accum; 
}, teachers[0])
console.log('Youngest Teacher is:', youngest.fname + youngest.lname); 

// Get all the fullnames of the teachers -> ['John Doe', 'Jane Donnely', 'Sarah Elly', 'Adam Bayer']
const fullNames = teachers.map(x => `${x.fname} ${x.lname}`); 
console.log(fullNames); 