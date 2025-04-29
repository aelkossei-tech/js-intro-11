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

    for(const key in object) { // used a for...in loop since we're it's an objects --> we're iterating through our PARAMETER 
        total += object[key] * fruits[key]  // object[key] = whatever keys are present in our parameter * fruits[key]
        // every iteration we are adding to our total (+=)
    }
    
    return total; // return our total price 
}
console.log(calculateTotalPrice1({ apple: 3, mango: 1 }));
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }));
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0}));
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 }));


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
*/ 
const calculateTotalPrice2 = object => {
    let fruits = { //create a seperate object to put the fruits and their prices again 
        apple: 2.00, 
        orange: 3.29, 
        mango: 4.99, 
        pineapple: 5.25
    }

    let total = 0; // again, we need a variable to return the final price(with the discount and all)

    for(const key in object) {
        if(object[key] === 'apple') 
        total += object[key] * fruits[key]
    }

}


console.log('\n ---------TASK03----------\n');
/*
Requirement:
Write a function named nthWord() which takes a string and a number arguments and returns the nth word in the string. 
Note: Function should return empty string if the number argument is greater than the count of the words in the given string.

Examples:
nthWord("I like programming languages", 2) 	-> "like"
nthWord("QA stands for Quality Assurance", 4)​ 	-> "Quality"
nthWord("Hello World", 3) 		-> ""
nthWord("Javascript", 1) 			-> "Javascript”
nthWord("", 1) 
*/
/*
What we need to do: 
1.) 
*/