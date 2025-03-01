// Output all even numbers from 0 to 50 (both inclusive) --> 0, 2, 4, 6, ... 50
console.log('\n----------for-loop solution----------\n');

for(let i = 0; i <= 50; i++){  // "i" here is not global ===> "i" is block-scoped
    if(i % 2 === 0) console.log(i); 
}
console.log('\n----------while-loop solution----------\n');
let i = 0; // Global variable --> you can't use it for something else  ===> "i" is global-scoped
while(i <= 50){
    if(i % 2 === 0) console.log(i); 
    i++; 
}

//Find the sum of the numbers starting from 3 to 7 (both inclusive) --> 3 + 4 + 5 + 6 + 7 --> 25
console.log('\n----------for-loop solution----------\n');
let sum = 0; 
for(let i = 3; i <= 7; i++){
    sum += i; 
}
console.log(sum); 

console.log('\n----------while-loop solution----------\n');
let sum2 = 0; 
let num = 3; 

while(num <= 7){
    sum2 += num; 
    num++
}
console.log(sum2); 