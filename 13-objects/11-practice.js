/*
Create a student object with below info
firstName: Alex
lastName: Smith
hobbies: soccer - watching movies
examScore: midterm: 60, final: 90

Create an object + output in the console 
*/
const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: ['soccer', 'watching movies'],
    examScores: {
        midterm: 60,
        final: 90
    }
}
console.log(student); 

/*
Print hobbies --> [ 'soccer', 'watching movies' ]
Print examScores --> { midterm: 60, final: 90 }
Print first hobby --> soccer
Find and print average of exam scores --> 75
*/

console.log(student.hobbies); 
console.log(student.examScores); 
console.log(student.hobbies[0]); 
// console.log((student.examScores.midterm + student.examScores.final) / 2); ---> less dynamic 

const allExamValues = Object.values(student.examScores); // [60, 90]
let average = allExamValues.reduce((accum, curr) => accum + curr, 0) / allExamValues.length
console.log(average); 

