console.log('Hello from script-1.js'); 



// Client vs Server environment 
if(typeof window !== undefined) {
    // some client code 
    console.log('WINDOW', window); // Available only on client code 
}
else {
    console.log('GLOBAL', global); // Available only on server  
    // Uncaught ReferenceError: global is not defined 
}

/**
 * ALERT 
 * alert() doesn't return anything (undefined)
 */

//const alertAns = window.alert('Alert!!!'); 
// console.log('alertAns', alertAns); 

/**
 * PROMPT
 * prompt() 
 * - Provide message and click OK --> returns string 
 * - Provide message and click CANCEL --> returns null 
 * - Provide no message, click OK --> returns empty string 
 * - Provide no message, click CANCEL --> returns null 
 */

//const promptAns = prompt('Would you like to hear from us? Leave your email'); 
//console.log('promptAns', promptAns)

/**
 * CONFIRM 
 * confirm()
 * - returns true OR false 
 */

//const confirmAns = confirm('Are you a student?'); 
//console.log('confirmAns', confirmAns); 

/** 
 * localStorage()
 */


// Storage Length 
const storageLength = localStorage.length; 
console.log('storageLen', storageLength); // Uncaught TypeError: localStorage is not a function

// setItem
localStorage.setItem('username', 'abc123'); 
console.log('storageLen', storageLength);

// getItem
const userName = localStorage.getItem('username'); 
console.log('userName', userName); 

localStorage.removeItem('username'); 
console.log('userName', userName); 

localStorage.setItem('username', 'joe');
localStorage.setItem('password', 'abc123');
console.log('storageLen', storageLength);

// clear 
localStorage.clear(); 

// How to store object in storage? 
localStorage.setItem('userInfo', {name: 'Alex', email: 'alex@gmail.com'}); // [object Object]
localStorage.setItem('userInfo', JSON.stringify({name: 'Alex', email: 'alex@gmail.com'})); 

const userInfo = localStorage.getItem('userInfo'); // string 
const userInfoObj = JSON.parse(localStorage.getItem('userInfo')); // string 
console.log('userInfo', userInfo); // userInfo {"name":"Alex","email":"alex@gmail.com"}
console.log('userInfoObj', userInfoObj); // userInfoObj {name: 'Alex', email: 'alex@gmail.com'}


