let examScore = 60; // PREFERRED way ==> store it in a variable then print it in console.log

let result = examScore >= 60 ? 'PASS' : 'FAIL'; // if = ?; else = :
// concise way of using if-else 

console.log(result); // PASS 

// ALSO console.log(examScore >=60 ? 'PASS' : 'FAIL'); 


let age = 65; 
let retirementAllowed = age >= 65 ? 'Yes, you can retire' : 'No, you cannot retire'; 
console.log(retirementAllowed); 


let gender = 'male'; 

let fname = gender === 'female' ? 'Jane' : 'John'; // first one is always TRUE, second is alway FALSE 