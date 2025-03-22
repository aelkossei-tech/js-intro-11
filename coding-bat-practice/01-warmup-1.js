/*
Warmup-1 -- sleepIn
The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. 
We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

Examples: 
sleepIn(true, true) → true
sleepIn(true, false) → false
sleepIn(false, true) → true
*/
function sleepIn (weekday, vacation) {
    if(weekday === true && vacation === false) return false; 
    else if(weekday === false && vacation === true) return true; 
    else if(vacation === true && weekday === false) return false; 
    return true; 
}

/*
Warmup-1 -- monkeyTrouble
We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. 
We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

Examples: 
monkeyTrouble(true, true) → true
monkeyTrouble(false, false) → true
monkeyTrouble(true, false) → false
*/
function monkeyTrouble (aSmile, bSmile) {


// if we're in trouble     
}