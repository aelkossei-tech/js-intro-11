class Citizen {
    // public property 
    country = 'US'; 
    batch = 11; 

    // private properties - encapsulation 
    #SSN; 
    #secret = 'secret info'; 

    constructor(fullname, age){
        this.fullname = fullname; 
        this.age = age; 
    }

    // getters for private properties/fields --> provides indirect access ==> 
    getSSN(adminPassword) {
       if(adminPassword === 'secretPassword') return this.#SSN; 
       throw new Error('You are not authorized!!'); 
    }

    // setters for private properties/fields --> provides indirect access ==> set it to a value 
    setSSN(ssn) {
        if(ssn.length === 9) this.#SSN = ssn; 
        throw new Error('The SSN is not correct!'); 
    }
}
const c1 = new Citizen('John Doe,', 25,); 
const c2 = new Citizen('Jane Doe,', 25); 

console.log(c1); 
console.log(c2); 
console.log(c1.SSN); // undefined 
console.log(c1.getSSN()); // undefined 

c1.setSSN('123-12-1234'); 
console.log(c1.getSSN()); // FINALLY can get access to the SSN --> 123-12-1234
