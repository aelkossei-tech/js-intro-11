// "this" keyword refers to the current object of the template
// "super" keyword referes to the parent object of the template 

class Enginner {
    constructor(fullname, major) {
        this.fullname = fullname; 
        this.major = major; 
    }
    build() {
        console.log(`Engineer builds!`); 
    }
}

class SoftwareEngineer extends Enginner { 
    constructor(fullname, major, companyName) {
        super(fullname, major); // we call the PARENT here --> invokes the parent constructor to assign fullname and major to object 
        // super() must be the first statement before using "this" keyword
        this.companyName = companyName; 
    }
}


const eng = new SoftwareEngineer('Jane Doe', 'Software Engineering','Microsoft'); 
