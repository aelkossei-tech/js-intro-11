console.log(`\n ---- Task01-----\n`); 

const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];
// Log each name

for(const name of names){
    console.log(name); 
}
/*
WITH FOR LOOP: 

for (let i = 0; i < name.length; i++) {
    console.log(names[i]); 
}
*/

console.log(`\n ---- Task02-----\n`); 

// Count how many names starts with j or J --> 3
let countJ = 0; 

for(const name of names) {
    if (name[0].toLowerCase() === 'j') countJ++; 
}
console.log(countJ); 

// if(name[0] === 'j' || name[0] === 'J')
// if (name.toLowerCase()[0] === 'J')  ==> Best way to solve this 
//if(name.startsWith('J') || name.startsWith('j')) countJ++

/* For loop Solution: 

for(let i = 0; i < names.length; i++) {
    if(names[i][0].toUpperCase() === 'J') countJ++; 
}
*/

console.log(`\n ---- Task03-----\n`); 
// 'John', 'Jane', 'Alex', 'Max', 'james' 
// Count how many names have length of 4 --> 3
let countNameLength = 0
for(const name of names){
    if(name.length === 4) countNameLength++; 
}
console.log(countNameLength); 

/*
FOR LOOP: 

for(let i = 0; i < names.length; i++){
    if(names[i].length === 4) count4++; 
}
*/

