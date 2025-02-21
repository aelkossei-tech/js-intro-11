// = assignment operator 

// Shorthand assignment operators

let num = 5; 

//increase the num variable by 5 
num = num + 5; 

console.log(num); //10 --> but not what programmers prefer

num += 5; // more preferred 

let n1 = 10; 

n1 *= 2; /// n1 = 20 

n1 /= 4; // n1 = 5 

n1 **=3; // 125 


console.log(n1); //125 


let n2 = 7; 

n2 += ++n2; // 7 + 8 = 15

n2 /= 3; // 5 

console.log(n2++ %3); // 2 


let n3  = 20; 
let n4 = 3; 

n3 += (n4 -=1); //n3=20 --> 20 += (3 -= 1) --> n4 = 2, n3 = 22 

--n3; // --22 --> n3 = 21 

console.log(--n3 * ++n4); //60 ; n3 = 20, n4 - 3 --> 60 