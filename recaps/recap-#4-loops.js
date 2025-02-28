// Output all numbers from 1 to 10. 
// For loops are ways to allow us to loop a specific block of code as many times we want --> a set # of times 
for (let i = 1; i <= 10; i++){
    console.log(i); 
}


// Output all odd numbers from 1 to 10. 
for(let i = 1; i <=10; i +=2){ // 5 iterations of code --> BETTER
    console.log(i); 
}

//OR

for(let i = 1; i <= 10; i++){ // 10 iterations of code 
    if(i % 2 === 1) console.log(i); 
}

// Output all the odd numbers from 1 to Random Number
// (bet)
let random = Math.floor(Math.random() * 11) + 10; 
console.log(random);

for(let i = 1; i <= random; i +=2){ // even though it's random --> we know the iterations
    console.log(i);    // user dictates the iterations [username + password example Bilal gave]
}

/*
Generate a random between 1 to 10 (both inclusive
Find the product of all the numbers starting from 1 to randomly generated number
*/
let container = 1; 
let random1 = Math.floor(Math.random() * 10) + 1; 
console.log(random1); 

for(let i = 1; i <= random1; i++){
    console.log(`multiplying ${container} with ${i} to get ${container * i}`); 
    container *= i; 
}
console.log(container); 

/*
Print all numbers bettwen 2 random numbers in the range
of 1 to 10 (both inclusive) in ascending order
*/

let rand1 = Math.floor(Math.random() * 10) + 1;
let rand2 = Math.floor(Math.random() * 10) + 1;
console.log(rand1, rand2); 

let min = Math.min(rand1, rand1); 
let max = Math.max(rand1, rand2)

for(let i = min; i <= max ; i++){
    console.log(i)
}


/*
Print out number from 10 to 0
*/
for(let i = 10; i >= 0; i--){
    console.log(i)
}


/*
Print out characters from a string. 

string -->
s [0]
t [1]
r [2], etc. 
i
n
g
*/
let str = "string"
for(i = 0; i <= str.length - 1; i++){
    console.log(str[i]); 
}

/*
Print out characters from a string backwards.  
string -->
g
n
i
r
t
s
*/
let str2 = "string"; 

for(let i = str2.length - 1; i >= 0; i--){
    console.log(str2[i]); 
}


/*
Reverse the string. 

Bilal --> laliB
string --> gnirts
*/

let str3 = "string"; 
let reversedStr = ''; 

for(let i = str3.length - 1; i >= 0; i--){
    console.log(str3[i]); 
    reversedStr += str3[i]
}
console.log(reversedStr); 