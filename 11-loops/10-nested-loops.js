for(let i = 1; i <= 3; i++){
    console.log('Saturday!'); 
    for(let j = 1; j <= 2; j++){ 
        console.log('Hey'); 
        for(let k = 0; k <= 2; k++){
            console.log('.'); 
        }
    }
}

const names = ['Jane', 'Joe']; 

for(let i = 0; i < names.length; i++){  // 0, 1
    let currentName = names[i]; 
    console.log(currentName); 

   for(let j = 0; j < currentName.length; i++) {
        console.log(currentName[j]);  
   }
}

let count = 0; 
for(let i = 1; i <= 3; i++) {
    console.log('i =', i); 
    for(let j = 1; j <= 5; j++){
        console.log('\tj =', j); 
        count++
    }
}
console.log(count); // 15 

// NO ONE likes nested loops 

// Interview question 
let sum = 0; // 5 + 2 ==> 7 + 3 ==> 10 + 4 ==> 14 + 6 ==> 20 + 2 ==> 22 + 3 ==> 25 + 4 ==> 29 
for(let i = 5; i <= 10; i++) { // i = 5, 6 
    sum += i; 
    for(let j = 2; j <= i; j++){ // j = 2, 3, 4 | starts over at j = 2, 3, 4 
        sum += j; 
        if(j === 4) break; // once we reach 4 --> we break this loop [the j-loop]
    }
    if(sum >= 25) break; 
}
console.log(sum); 