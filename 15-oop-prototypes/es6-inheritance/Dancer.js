const Person = require("./Person");

class Dancer extends Person{
    constructor(fullname, age, groupName) {
        super(fullname, age); 
        this.groupName = groupName; 
    }
    dance(){
        return true; 
    }
}

/*
inherit Person for Dancer
add groupName property to constructor 
add dance() method, return true; 
*/
const dancer = new Dancer('Jane Doe', 20, 'Fanatics'); 
dancer.eat(); 
dancer.sleep(); 
console.log(dancer.dance()); 

module.exports = Dancer; 