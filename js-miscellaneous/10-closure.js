/*
let initialScore = 0; 

function score() {
    initialScore += 1;
}

score(); 
score(); 
initialScore = 100; 
score(); 
score(); 
console.log(initialScore); // 1
*/

function program(){
    let initialScore = 0; // provate variable to profram function and cannot be accessed directly outside

    //Thi is the function to manipulate the private initialScore variable
    function score() {
       return initialScore += 1; 
    }

    return score; 
}

const scoreMethod = program(); // initialScore = 0; 

scoreMethod(); // 1
scoreMethod(); // 2
scoreMethod(); // 3
const result = scoreMethod(); // 4

console.log(result); // 4 