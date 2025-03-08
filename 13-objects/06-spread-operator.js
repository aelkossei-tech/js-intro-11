const numbers = [ 5, 10, 15, 20 ]; 

console.log(Math.max(...numbers)); // 20 
console.log(Math.min(...numbers)); // 5 


const batch = {
    number: 11, 
    program: 'SDET', 
    startDate: 'January 20, 2025', 
    address: {   // spread operator will copy the nested object [spread mostly for arrays, but objects can work too]
        street1: 'Street', 
        city: 'Chicago', 
        state: 'IL', 
        zip: 12345
    }
}
// student1.number = batch.number; 
// student1.program = batch.program; 
// student1.startDate = batch.program; 

/*
You COULD use a for...in loop to do the same thing, BUT spread operator is more efficient/concise

for(const key in batch) {
    student1[key] = batch[key]; 
}
*/
const student1 = { // objects have no order (no indexes)
    fname: 'Ayah', 
    lname: 'Elkossei', 
    ...batch // spread operator to integrate info. from another object ---> depends on WHERE you place it 
}; 
console.log(student1); 


const process = {
    url: 'www.techglobaltraining.com', 
    username: 'TechGlobal', 
    password: 'Test1234'
}; 

const config = {
    env: {...process}
}; 