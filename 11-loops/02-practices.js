// Output the numbers from 100 to 0 (both inclusive) –> 100 99 98 97 96 ….
for(let i = 100; i >= 0; i--){
    console.log(i);  // you could make it single line --> BUT DON'T do this, since it's not preferred 
}
/*
start: 100
end: 0
update: -- 
*/

// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 ….50
for(i = 0; i <= 50; i += 2){ // --> this is not dynamic enough --> logic only works if you really know both start/end points 
    console.log(i); // if(i % 2 === 0) console.log(i); 
}
/*
start: 0
end: 50
update: ++ 
*/


// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 ….
/*
start: 0
end: 50
update: ++
*/
for(let i = 0; i <= 50; i++){
    if(i % 5 === 0) console.log(i); 
}


// Find sum of the numbers from 1 + 5 (both inclusive) --> 15
/*
start: 1
end: 5
update: ++
*/
let sum = 0; 

for(let i = 1; i <= 5; i ++){
    sum += i; // same thing as --> sum = sum + i; 
}

console.log(sum); // outside of the loop --> b/c it would print EVERY sum until it stops at 15, BUT we need 15 only 

// Find sum of the numbers from 10 to 15 --> 75
/*
start: 10
end: 15
update: ++
*/
let sum1 = 0

for(let i = 10; i <= 15; i++){
    sum1 += i; 
}
console.log(sum1); 

// Find the product of all the numbers from 1 to 6 (bot inclusive) --> 
// 1 * 2 * 3 * 4 * 5 * 6 --> 720

let product = 1;  
for(let i = 1; i <= 6; i++){
    product *= i; 
}
console.log(product);

// Output each character from TechGlobal School
let str = 'TechGlobal School'; 
for(let i = 0; i <= str.length - 1 ; i++){ // ALSO --> < str. length 
    console.log(str[i]); 
}

// Count how many a's we have in the below string --> 3
let fruit = 'banana'; 
let counterA = 0; 

for(let i = 0; i < fruit.length; i++){
    if(fruit[i] === 'a') {
        counterA++; 
    }
}
console.log(counterA); 


