// Traditional for loop
for(let i = 0; i <= 3; i++){ // i = 0 --> i = 1 --> i = 2 --> i = 3 ==> THEN STOP
    console.log(i); // run this code --> will run this code EVERY time it's TRUE
}

// Print numbers from 1 to 15 
// start point: 1
// termination point: 15 [MUST be a Boolean: TRUE OR FALSE]
// update the info: ++ 

for(let i = 1; i <= 15; i++){
    console.log(i); 
}

// Hello World 5 times, 20 times 
for(let i = 0; i < 5; i++){  // in real life (convention) ==> ALWAYS use i (not any other variable)
    console.log(i, 'Hello World!'); 
}

// Global scope will not allow us to have 2 variables w/ the same name 

for(let i = 10; i <= 15; i++){ // CANNOT use cont keyword within loop, b/c you need to update that info
    console.log(i);  // you should ALWAYS use keywords to declare your variable --> w/ let keyword 
}
// don't put your semi-colon right behind ) ; --> it will stop your code (just like if-else)
// Infinite loop (a loop that never stops) --> if you have a conditional statement that does not have a set end 
