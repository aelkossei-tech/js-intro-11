const baseTable = {
    name: 'Table', 
    adjustable: true,
    method: function() {
        console.log('This is a function'); 
    }
}

const diningTable = {
    __proto__: baseTable, // inheriting properties of baseTable object [BEFORE ES6]
    purpose: 'Dining', 
    material: 'Wood'
}; 

const officeTable = {
    purpose: 'Work-Office', 
    material: 'Wood',
    __proto__: baseTable // using this --> officeTable NOW has inherited from baseTable 
}

console.log(diningTable.name); 
console.log(diningTable.adjustable); 
diningTable.method(); // also inherits baseTable method

console.log(officeTable.name); // undefined 
console.log(officeTable.adjustable); // undefined 
officeTable.method(); // TypeError: officeTable.method is not a function 

console.log(officeTable.__proto__); // { name: 'Table', adjustable: true, method: [Function: method] }


// Another way to inherit a single object's methods/properties to ANOTHER object ==> Object.create()
const tools = {
    variable: 'Just an info', 
    fix: function() {
        console.log('FIX'); 
    }
}; 

const hammer = Object.create(tools); 
hammer.brand = 'any brand'; 
hammer.break = function () {
    console.log('BREAK'); 
}

hammer.fix(); // FIX 
hammer.break(); 
console.log(hammer.variable); // Just an info  
console.log(hammer.brand); // any brand 

// tools.break(); // parent CANNOT access child methods or properties 