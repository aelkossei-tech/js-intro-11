// key is always string
// values can be null, undefined, number, boolean, string, bigint, array, object, function
// JSON doesn't support --> undefined, Symbol(), function 

const person = {
    fname: 'John', 
    mname: null, 
    lname: 'Doe', 
    age: 25, 
    married: undefined, 
    isMember: true, 
    favMovies: ['The Batman', 'Red'], 
    address:{
        street: '2800 S River Rd', 
        street2: 'Ste 310', 
        city: 'Des Plaines', 
        state: 'IL', 
        zip: 12345
    }
}; 


const cat = {
    name: 'Ra', 
    age: 1, 
    sound: function () {  // property function 
        console.log('Meow!'); // void methods: can't be console.log-ed
    }, 
    getMood: function () {
        return 'HUNGRY'; // return methods: can be stored in a variable and can be console.log-ed 
    }, 
    getInfo: function () {
        console.log(`name: ${this.name}, age: ${this.age}`); // this referes to cat object 
    }
}; 
console.log(cat.name); // Ra
cat.sound(); 

console.log(cat.getMood()); 
cat.getInfo(); // void method 