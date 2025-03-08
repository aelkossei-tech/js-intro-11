const batch = {
    number: 11, 
    program: 'SDET', 
    numberOfStudents: 20
}; 

// for...in loop 
for(const key in batch){
    console.log(batch[key]);  // dot-notation doesn't work here --> key is a string (number -> program -> then students)
}
// console.log(key); --> number, program, numberOfStudents

const arr = ['Rome', 'Berlin', 'Chicago']; 
for(const key in arr){ // keys for arrays = indexes     arr[key] = values in your array 
    console.log(key, arr[key]); 
}