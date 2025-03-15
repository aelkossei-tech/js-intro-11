// Before ES6
// Phone constructor for creating prototype 
/*
function Phone(brand, color, price) {
    this.brand = brand; // assignment 
    this.color = color; 
    this.price = price;  // "this" refers to the new Object --> to keep it more dynamic, instead of changing its properties everytime you need to 
}

// Add prototype methods: 
Phone.prototype.call = function() {  // looks like a function expression --> but we're making this function/method to be a method of Phone prototype
    console.log(`${this.brand} is calling!`); // "this" refers to the current object you're trying to calling on 
}

Phone.prototype.text = function(){
    return `${this.brand} text!`
}

const phone1 = new Phone('iPhone', 'Purple', 1000);  // can assign this to a new variable 
const phone2 = new Phone('Samsung', 'Blue', 1200); 
const phone3 = new Phone('Nokia', 'Black', 750);

Phone.prototype.connectCarPlay = function () {
    console.log('Carplay connected!')
}

phone1.call(); // iPhone is calling!
phone2.call(); // Samsung is calling!

console.log(phone2.text()); // Samsung text!
*/

// After ES6
// Create a class 
class Phone {
    // create constructor which takes properties and assigns them to "this" keyword 
    constructor(brand, color, price) {
        this.brand = brand; 
        this.color = color; 
        this.price = price; 
    }
    // OUTSIDE of properties block 
    // Add void methods 
    call() {
        console.log(`${this.brand} is calling!`);
    }
    // Add return instance methods 
    text() {
        return `${this.brand} text!` 
    }
    // Static methods - this can be invooked w/ the template name [Phone]
    static anyFunc(){
        console.log('This is a static method'); 
    }
}
// Instances or objects of the Phone template 
const phone1 = new Phone('iPhone', 'Purple', 1000);  // can assign this to a new variable 
const phone2 = new Phone('Samsung', 'Blue', 1200); 
const phone3 = new Phone('Nokia', 'Black', 750);

phone1.call();
phone2.call();
phone3.call();

Phone.anyFunc()