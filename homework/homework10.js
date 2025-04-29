console.log('\n ---------TASK01----------\n');
/*
Requirement:
Write a function named calculateTotalPrice1() which takes an object of some shopping items with their quantities as key-value pairs 
and returns the total price of the given items based on the price list below.

1 Apple is $2.00​
1 Orange is $3.29
1 Mango is $4.99
1 Pineapple $5.25

Examples:
calculateTotalPrice1({ apple: 3, mango: 1 }) 		             	  -> 10.99
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }) 		  -> 19.12
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }) 	     	  -> 0
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 })  -> 12.24
*/

/*
What needs to be done: 
1.) Possibly create an object that will have the key:value pairs --> fruit:price
2.) Find a way to take an object (as a paramter), recognize the fruit and their prices, and return the sum. 
    - you could use a loop that would iterate within the object --> so every time we come across the fruit, 
      we add to the count of how many fruits there are [does that mean we have 2 diff. loops to calculate 
      both count & price]
*/
const calculateTotalPrice1 = object => {
    let fruits = { //create a seperate object to put the fruits and their prices 
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }
    // we're going to iterate it through it in order to get the quantity and then eventually calculate the total 
    // quantity * price [like how you a human would normally calculate their total]
    let total = 0; // created a different variable to calculate the final price 

    for (const key in object) { // used a for...in loop since we're it's an objects --> we're iterating through our PARAMETER 
        total += object[key] * fruits[key]  // object[key] = whatever keys are present in our parameter * fruits[key]
        // every iteration we are adding to our total (+=)
    }

    return total; // return our total price 
}
console.log(calculateTotalPrice1({ apple: 3, mango: 1 }));
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }));
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }));
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 }));


console.log('\n ---------TASK02----------\n');
/*
Requirement:
Write a function named calculateTotalPrice2() which takes an object of some shopping items with their quantities as key-value pairs 
and returns the total price of the given items based on the price list below.

1 Apple is $2.00​
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25

Note: There will be some discounts as below​.
There will be %50 discount for every second Apple​
There will be 1 free Mango if customer gets 3. So, fourth one is free.

Examples:
calculateTotalPrice2({ Apple: 3, Mango: 5 }) 			               -> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 }) 		       -> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 }) 		   -> 0
calculateTotalPrice1({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })   -> 29.51
*/
/*
What we need to do: 
1.) We should do the same thing as what we did for Task 1 --> create a fruits object w/ fruits:prices
2.) The only thing to remember in this case is that we have to remember that there are going to be discounts. 
    - every time there is a second apple (apple > 1) --> 50% discount [so does that mean every even amount of apples after 2 --> 1/2 off?]
    - if there are 3 mangoes, the fourth one is free (which means it should not be counted towards the total --> so if i % 4 === 0, then total)
3.) We need to count how many apples and mangoes theres are --> then apply the discount based on the count of the apples/mangos 
*/
const calculateTotalPrice2 = object => {
    let fruits = { // again, created an object named fruits to organize/reference the fruits:prices (key:value)
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }

    let total = 0; // same as Task01 --> designating a variable for our total 
    let totalApples = 0; // also created 2 new variables to track the count of these 2 fruits that have discounts 
    let totalMangoes = 0; // the goal is to count how many apples/mangoes there are in the object parameter and THEN seeing how we can apply the discount to the total price

    for (const key in object) { // like Task01, using a for...in loop to loop through our object PARAMETER 
        const fruit = key.toLowerCase(); // since I noticed the fruits were capitalized in the examples --> convert our keys (apples, mangoes, etc.) into lowercase letters, for consistency sake. 
        const quantity = object[key]; // SO, created a variable to return the how many fruits of our object's key (in example 1 --> object[key] = 3)
        let fruitPrice = fruits[fruit]; // created another variable to do the same thing, except w/ the prices in our fruits object (in fruits --> fruits[fruit] --> 2.00 (for apple))
       
        // now this is where we will address the discounts 
        if (fruit === 'apple') {  // if our fruit (our key) is equal to apple 
            totalApples += quantity; // then our appleCount increases by 1 and is added to the quantity 

            const discountedApples = Math.floor(totalApples / 2); // in order to calculate the discount we need to account for the discounted apples
            // here this variable addresses that --> whatever total count of apples is, we'll half it and then floor it to get a whole number 
            total += (quantity - discountedApples) * fruitPrice + discountedApples * fruitPrice * 0.5;
            // SO --> our quantity of our apples is subtracted from our discounted apples 
        }
        else if (fruit === 'mango') {
            totalMangoes += quantity;
            const freeMangoes = Math.floor(totalMangoes / 4); // similar to what we did above for the apples 
            // for every 4 mangos --> we divide our total count of mangoes by 4 then and we just floor it to make it a whole number 
            total += (quantity - freeMangoes) * fruitPrice;
            // SO --> our quantity of fruit subtracted by our free mangoes #, then we multiply the overall number by our actual price 
        }
        
        else {
            total += quantity * fruitPrice; // If there are no other discounts, we'll just calculate it as we normally would 
        }
    }
    return total.toFixed(2); // Return the total, rounded to 2 decimal places
}
console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 })); // Expected output: 24.96
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })); // Expected output: 45.81
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })); // Expected output: 0
console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 })); // Expected output: 29.51


console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named nthWord() which takes a string and a number arguments and returns the nth word in the string. 
Note: Function should return empty string if the number argument is greater than the count of the words in the given string.

Examples:
nthWord("I like programming languages", 2) 	   -> "like"
nthWord("QA stands for Quality Assurance", 4)​ 	-> "Quality"
nthWord("Hello World", 3) 		               -> ""
nthWord("Javascript", 1) 			           -> "Javascript”
nthWord("", 1) 
*/
/*
What we need to do: 
1.) Find a way to use the number parameter as our way to identify with word in the string(sentence) is = number's index/place
    - so maybe convert the string --> array --> find a way that we somehow subtract one from the indexes(?)
        - EX: "I like programming languages", 2 --> we know that arrays' indexes start at 0, but we want the SECOND word from sentence [which would
            be located at index 1]
        - SO => index - 1? 
*/
const nthWord = (string, number) => {
    let strArr = string.split(' '); // converted our string into an array to make it easier to return a whole word from the string

    if (number > strArr.length || number < 1) return ''; // this condition is here to address the edge cases, 
    // like if our number parameter is less than 1 [so 0 and negative] --> we don't want that since we're trying to start our indexes from 1 
    // also if our number parameter is MORE than than our array's length
    return strArr[number - 1]; // just like what we mentioned above --> since arrays' indexes start 0 at zero and the word that we want 
    // (according to our number parameter) is going to be one less ==> our index(number parameter) - 1
}
console.log(nthWord("I like programming languages", 2));
console.log(nthWord("QA stands for Quality Assurance", 4));
console.log(nthWord("Hello World", 3));
console.log(nthWord("Javascript", 1));
console.log(nthWord("", 1));


console.log('\n ---------TASK04----------\n');
/*
Requirement:
Write a function named isArmstrong() which takes a number argument 
and returns true if given number is armstrong, return false otherwise.​

Note: An armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits. 
In other words, an n-digit number is an Armstrong number if the sum of its digits, each raised to the nth power, is equal to the number itself.

Let's take an example to understand it better. 
Consider the number 153.​
To determine if 153 is an armstrong number, we need to check if the sum of its digits,
each raised to the power of the number of digits, equals the original number.​

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153​

In this case, the sum of the individual digits raised to the power of 3 (the number of digits in 153) is equal to the original number, 
which means 153 is an armstrong number.

Examples:
isArmstrong(153) 	-> true  
isArmstrong(123) 	-> false  ==>  there are 3 integers --> 1*1*1 [1] + 2*2*2 [8] + 3*3*3 [27] = 36
isArmstrong(1634) 	-> true   ==>  there are 4 integers --> 1*1*1*1 [1] + 6*6*6*6 [1296] + 3*3*3*3 [81] + 4*4*4*4 [256] = 1634
isArmstrong(1111) 	-> false  ==>  there are 4 integers --> just false because 1 * 1 no matter how many times = 1. 
*/
/*
What we need to do: 
1.) This problem is similar to factorials and prime numbers problems --> so we need to understand the logic behind this concept first 
    - SO --> from my understanding an armstrong number is a final number that each number (within it) is multiplied by itself by how many numbers 
    are present in the final number and added to the other numbers that make it up & once they're all added together ==> gives us our final number. 
2.) Find the logical pattern when it comes to armstrong numbers
3.) Might use a for loop(?) to loop through the iterations to see if a number is an armstrong number [true or false]
    - SO --> we need to possibly convert the number into a string + find its length & make it apart our structure + have conditional statements 
        that first --> look at the length of number  + then multiple each integer by itself based on the length of the number + add all the integers up (sum)
        + if our sum === number paramter -> TRUE, else --> FALSE
*/
const isArmstrong = number => {
    let numStrLength = number.toString().length; // this is how we'll find the length of our number (to create a limit for our loop and 
    // find how many times our integers should be multipled)
    let digits = number.toString().split('').map(Number); // in order to look at every digit/integer --> we have to create it into an array 
    // by splitting them individually & eventually converting them back to numbers
    let sum = 0; // since Armstrong numbers are the SUM of all the powers of each integers  
    // --> created a seperate variable for our sum to compare it to our number paramter
    for (let i = 0; i < numStrLength; i++) { // used a for loop with our length we created above to iterate through each integer within our number
        sum += Math.pow(digits[i], numStrLength);  // used Math.pow() to take whatever our digit in our iteration and raised it to the power of our length 
        // every iteration it goes through within our number parameter --> adds to the sum 
    }
    if (sum === number) return true; // if our sum from our for loop === number parameter  ==> THEN it's an Armstrong number = TRUE
    return false;
}
console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(1111));


console.log('\n ---------TASK05----------\n');
/*
Requirement:
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.

Note: Do not convert number to string to complete the task.

Examples:
reverseNumber(371) 	-> 173
reverseNumber(123) 	-> 321
reverseNumber(12) 	-> 21
reverseNumber(0) 	-> 0
reverseNumber(111) 	-> 111
*/
/*
What we need to do: 
1.) We need to find a way to reverse our number parameter WITHOUT converting it into a string 
    - So far --> maybe use recursion somehow? 
        - Recursion ==> the technique of making a function call itself. This technique provides a way to break complicated 
            problems down into simple problems which are easier to solve. 
*/
const reverseNumber = number => {
    let revNum = 0; // this is a variable that will store our reversed number in and eventually return it 

    while (number > 0) { // since we can't convert our number into a string (meaning there are no limits for a loop) 
        // --> used a while loop 
        revNum = (revNum * 10) + (number % 10);
        // (revNum * 10) --> 
        // (number % 10) --> this part seperates each one of our number into their seperate digits
        number = Math.floor(number / 10);
    }
    return revNum;
}
console.log(reverseNumber(371));
console.log(reverseNumber(123));
console.log(reverseNumber(12));
console.log(reverseNumber(0));
console.log(reverseNumber(111));


console.log('\n ---------TASK06----------\n');
/*
Requirement:
Write a function named doubleOrTriple() which takes an array of numbers as argument and a boolean value. 
It will return the array elements doubled if true or tripled if the boolean value is false.​

Examples:
doubleOrTriple([1, 5, 10], true) 	   -> [2, 10, 20]
doubleOrTriple([3, 7, 2], false) 	   -> [9, 21, 6]
doubleOrTriple([-1, -2], true) 	       -> [-2, -4]
doubleOrTriple([0], false) 	           -> [0]
doubleOrTriple([-1, 0, 1], true) 	   -> [-2, 0, 2]
*/
/*
What we need to do: 
1.) Since it's already in the array, maybe we can acutally the map() method 
*/
const doubleOrTriple = (array, boolean) => {
    if(boolean === true) return array.map(ele => ele + ele); 
    return array.map(ele => ele + ele + ele); 
}
console.log(doubleOrTriple([1, 5, 10], true)); 
console.log(doubleOrTriple([3, 7, 2], false)); 
console.log(doubleOrTriple([-1, -2], true)); 
console.log(doubleOrTriple([0], false)); 
console.log(doubleOrTriple([-1, 0, 1], true)); 


console.log('\n ---------TASK07----------\n');
/*
Requirement:
Write a function named splitString() which takes a string and a number arguments and 
returns the string back split by the given number. 

Note: Return empty string if the string shorter than splitting number or the string length is not divisible by the given number.

Examples:
splitString("JavaScript", 5) 	-> "JavaS cript"
splitString("Java", 2) 		    -> "Ja va"
splitString("Automation", 3) 	-> ""
splitString("Hello", 6) 		-> ""
splitString("12", 1) 		    -> "1 2"
*/
/*
What we need to do: 
1.) This seems similar to Task03, where we have a number parameter and we have to use it to execute a task - in this case, 
split a string at given index number 
2.) Again --> we'll probably convert the string --> array, using split('')
3.) Again --> we have to remember that array indexes start at 0, so indexNumber - 1
    - again if the string < splittingNumber --> return empty string ('')
    - if string.length is NOT (!) divisible by 
4.) Once we identified the letter that the string should be split in, we can add a ' ' (space) and then join()
*/
const splitString = (string, number) => {
    if (number > string.length || number < 1 || !(string.length % number === 0)) return ''; 
    // this conditional statement addresses all the edge cases within the problem 
    // --> if number is greater than string.length OR number (index) is less 1 OR if the string.length is NOT divisible by our number 
    for(let i = number - 1; i < string.length; i++) { 
        // again, we know our indexes start at 0, so i wouldn't start at 0, but number - 1 and it should cover the length of string 
        return string.slice(0, number) + ' ' + string.slice(number, string.length); 
        // we know our number is our index to stop --> so we can slice it at that point + add a space in between ' ' + and then the rest of the string
    }
}
console.log(splitString("JavaScript", 5)); 
console.log(splitString("Java", 2)); 
console.log(splitString("Automation", 3)); 
console.log(splitString("Hello", 6)); 