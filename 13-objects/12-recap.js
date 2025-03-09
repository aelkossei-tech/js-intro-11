// keys are always unique/can't be duplicates [because it'll reassign the key; BUT values can be duplicates]
const computer = {
    os: 'MacOS', 
    color: 'Black', 
    memory: '1 TB', 
    price: 999.99
};

// Check if computer has ram info 

// Object.keys(computer). includes('ram'); 
// computer.ram === 'undefined'

Object.freeze(computer); // we'll use this in the future ---> around 4th month or so 
Object.isFrozen(computer); // true 

// for in loop
for(const key in computer){
    console.log(computer[key]); // computer.key --> can't do this because it's trying to find "key" in the object as a key ==> UNDEFINED 
} // retrieves values one by one vs. console.log(key) --> retrieves one by one 


console.log(`\n-----for...of loop-----\n`); 
// for...of loop 
/*
for(const x of computer){     // used more with arrays more ---> DOESN'T work with object 
    console.log(x); 
}
*/ 

// could store them in a variable OR just use in for...of loop 
Object.keys(computer); // gives us keys as an array 
Object.values(computer); // gives us values as an array 
Object.entries(computer); // gives us key-value pairs as a nested array 

for(const key of Object.keys(computer)){
    console.log(key); // 
    console.log(computer[key]); // same thing as console.log(key)
}

for(const value of Object.values(computer)){
    console.log(value); 
}

console.log(`\n-----entries-----\n`); 
console.log(Object.entries(computer)); 
for(const entry of Object.entries(computer)){
    console.log(entry); // shows entries not nested --> entries keys one by one 
    console.log(entry[0]); // getting keys one by one 
    console.log(entry[1]); // getting values one by one 
}

for(const [k, v] of Object.entries(computer)){
    console.log(k, v); // if you want keys && values 
}
// [ 'os', 'MacOS' ]
// [ 'color', 'Black' ]
// [ 'memory', '1 TB' ]
// [ 'price', 999.99 ]