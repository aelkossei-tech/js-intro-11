function sum(num1, num2 = 0) { // default value for num1 and num2 is undefined 
    // the default parameter will always be the second/last parameter (num2)
    console.log(`First argument is ${num1}`); 
    console.log(`Second argument is ${num2}`); // if this isn't there --> obviously it's undefined
    console.log(`Their sum is ${num1 + num2}`); 
}
sum(3); // NaN 

// return function --> console.log()
// if not --> invoke by itself 


function greet(name, time = 'Morning') {
    if(time === 'Evening') console.log('Good Evening', name); 
    else console.log('Good Morning', name); 
}
greet('John'); // you don't need to keep saying Morning, since it's a default [most-used cases = default]