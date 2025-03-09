// nested-functions 

function connect() {
    function greet (name) {
        console.log(`Hello ${name}!`); 
    } 

    return greet; 
}
const innerFunction = connect();

innerFunction('John'); 


function program() { 
    function print1() {
        console.log('1'); 
    }
    return print1; 
}


const r1 = program(); 

r1(); 


function getMethod() {
    if(false) {
        function getDay() {
            return 'Sunday'; 
        }
    }
    else {
        function getHour() {
            return '12';
        }
        return getHour; 
    }
}
const r2 = getMethod(); 
const resultof2 = r2; 
console.log(resultof2()); 



// Lexical Scope: inner function can access the variable of outer function 
// However, outer function CANNOT acces the variables of inner function 
function funcA() {
    let varA = 'A'; // varA is protected with Closure 

    function funcB() {
        let varB = 'B'; 
        console.log(varA); // accessible 
        console.log(varB); // accessible 
    }

    funcB(); 

   // console.log(varA); // accessible 
   // console.log(varB); // not accessible --> ReferenceError: varB is not defined
}; 


funcA(); // A  B 

