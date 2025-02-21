// NOT (!), OR (||), AND (&&)

console.log(3 ** 2 < 10 && !false  && (5 % 2) == ! false); //true 


let b1 = !(!(('Hello' === 'Hello') || 5 > 5) && (3 *5 >= 3 **4 )); 
console.log(b1); 
//
/*
true --> Rememeber this b/c you'll need to explain your process in 
interview
*/

let age = 15; 

if(age >= 16) {
    // let them get DL 
}
else {
    // NOT ALLOWED
}

let loggedIn = true; 
let enoughBalance = true; 

if(!loggedIn && enoughBalance) {
    //Require them to login first + make transaction 
}
else {
    //you can't 
}

