/*
OOP --> Object-Oriented Programming 
OOP Languages: Java, C#, C++, etc. 
OOP languages will convert every real-life objects into programming 


JS is NOT an OOP language
JS is prototype based programming language

const mug = {
    material: 'glass', 
    price: 36.08, 
    design: ['design1', 'design2']
}
*/

// constructor function - BEFORE ES6

function Mug(material, price, designName) {
    this.material = material; 
    this.price = price; 
    this.designName = designName; 
}

const mugJanuary = new mugFeb('glass', 36.08, 'design1'); 
const mugFebuary = new mugFeb('glass', 37.84, 'design2'); 
const mugMarch = new mugFeb('glass', 37.84, 'design3'); 


// AFTER ES6 - Classes 
class Student {
    constructor(fullname, age, program) {
        this.fullname = fullname;
        this.age = age;
        this.program = program;
    }
}

const studen1 = new Student('John Doe', 25, 'SDET'); 
const studen2 = new Student('Alex Smith', 17, 'SE'); 