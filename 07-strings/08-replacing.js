let str = '123 Street 123'; 

let strReplaced = str.replace('123', '###'); // 123 Street 123
let strReplaceAll = str.replaceAll('123', '###'); 

console.log(str); // 123 Street 123 
console.log(strReplaced); // ### Street 123 --> replaces the first instance 
console.log(strReplaceAll); // ### Street ### --> replaces ALL 


/*
replace()
TASK: replaces the first found occurence of searchString with another string 
ARGUMENTS: 2 arguments ==> searchString, newValue 
RETURN (what data type it gives when it runs): returns a new a string with replacement applied 
DOES IT CHANGE ORIGINAL VALUE: No
IS IT STATIC or INSTANCE: Instance
*/

//EDGE 
let str1 = 'Today is Sunday'; 
console.log(str1.replace('Saturday', 'Monday')); // nothing changes ==> 'Today is Sunday' 

console.log(str1.replaceAll('day', 'XXX')); // ToXXX is SunXXX --> it will find the value and replace it 

/*
replaceAll()
TASK: replaces the all the  found occurence of searchString with another string 
ARGUMENTS: 2 arguments ==> searchString, newValue 
RETURN (what data type it gives when it runs): returns a new a string with replacement applied 
DOES IT CHANGE ORIGINAL VALUE: No
IS IT STATIC or INSTANCE: Instance
*/
