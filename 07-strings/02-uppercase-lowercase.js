let company = 'TechGlobal'; 

let companyLower = company.toLowerCase(); // 

console.log(company); // 'TechGlobal' 
console.log(companyLower); 

/*
toLowerCase(); 
TASK: it converts the string to lowercase version
ARGUMENTS: No argument required 
RETURN (what data type it gives when it runs): returns a new string 
DOES IT CHANGE ORIGINAL VALUE: No 
IS IT STATIC or INSTANCE: instance 
*/

let course = 'Software Engineer in Test'; 
let courseUpper = course.toUpperCase(); 
console.log(course); 
console.log(courseUpper); 

/*
TASK: it converts the string to upper case version 
ARGUMENTS: no arugments 
RETURN (what data type it gives when it runs): a new string 
DOES IT CHANGE ORIGINAL VALUE: NO 
IS IT STATIC or INSTANCE: Instance 
*/

console.log('BofA'.toLowerCase().toUpperCase()); // BOFA ; You can use methods right after each other 

console.log('Saturday'.toLowerCase().length); // 8; you can use a method and a property 

let str = 'Hello'; 
str.toLowerCase(); 