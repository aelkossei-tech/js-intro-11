console.log('\n ---------TASK13----------\n');
/*
Requirement: 
Write a method named mostRepeated() takes an array argument 
and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.

Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) 			                    -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) 	-> "pen"
mostRepeated([10]) 				                                       	-> 10
mostRepeated(["TechGlobal"]) 			                             	-> "TechGlobal"
*/
const mostRepeated = arr => {
    let count = {}; 
    
    let mostRepeated; 
    let mostRepeatedCount = Infinity; 

    for(let ele of arr) {
        if(count[ele] !== undefined) count[ele] += 1; 
        else count[ele] = 1; 

        if(count[ele] > mostRepeatedCount){
            mostRepeated = ele; 
            mostRepeatedCount = count[ele]; 
        }
    }
    return count; 
}

/*
sort() solution 

const mostRepeated = arr => arr.sort((a, b) => arr.filter(ele => ele === a).length - arr.filter(ele => ele === b).length).pop()

*/


console.log('\n ---------TASK12----------\n');
/*
Requirement: 
Write a method named secondMin() takes an array argument 
and returns the second min number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.

Examples:
secondMin([7, 4, 4, 4, 23, 23, 23]) 	-> 7
secondMin([3, 4, 5, 6]) 		        -> 4
secondMin([10]) 		                -> 10
*/
const secondMin = arr => {
       return arr.sort((a, b) => a-b).filter(ele => ele !== Math.max(...arr))[0] || arr[0]; 
}

console.log('\n ---------TASK10----------\n');
/*
Requirement: 
Write a method named isDateFormatValid() that takes a string as an argument 
and returns true if the given date is valid or returns false otherwise.

Expected Format: nn/nn/nnnn
So, it must be presented as <2digits> / <2digits> / <4digits>

Examples:
isDateFormatValid("") 			        -> false
isDateFormatValid("15/30/2020") 		-> false
isDateFormatValid("10-30-2020") 		-> false
isDateFormatValid("10.30.2020") 		-> false
isDateFormatValid("5/30/2020") 		    -> false
isDateFormatValid("05/30/2020") 		-> true
isDateFormatValid("10/2/2020") 		    -> false
isDateFormatValid("10/02/2020") 		-> true
*/

const isDateFormatValid = date => {
    let dateArr = date.split(' / '); 
    let month = dateArr[0]; 
    let day = dateArr[1]; 
    let year = dateArr[2]; 

    // verifying format 
    if(month.length !== 2 || day.length !== 2 || year.length !== 4) return false; 
    if(dateArr.length !== 3) return false; 

    // verifying month 
    if(Number(month) > 12 || Number(month) < 1) return false; 

    // day
    if([])

    return true; 
}