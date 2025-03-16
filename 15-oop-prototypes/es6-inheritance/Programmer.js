const Person = require("./Person");

class Programmer extends Person {
    constructor(fullname, age, companyName) {
        super(fullname, age); // this invokes parent class constructor [fullname, age] + has to be the FIRST statement in the constructor
        this.companyName = companyName; 
    }
    code(language = 'JS'){
        console.log(`Programmer codes in ${language}`); 
    }
}

const programmer = new Programmer('Jane Doe', 20, 'Apple'); 
programmer.eat(); 
programmer.sleep(); 
console.log(programmer.walk()); 
programmer.code(); 

module.exports = Programmer; 