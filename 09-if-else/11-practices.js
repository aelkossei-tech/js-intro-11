const date = new Date(); 

let dayOfTheWeek = date.getDate(); // 0 - Sunday, 6 - Saturday

/*
Write a program that tells if the day is WEEKEND or WEEKDAY.

0 or 6 --> WEEKEND
1 - 5  --> WEEKDAY
*/

if(dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    console.log('WEEKEND'); 
}
else {
    console.log('WEEKDAY'); 
}


switch(dayOfTheWeek){
    case 0:
    case 6: 
        console.log('WEEKEND'); 
        break; 
    default:
        console.log('WEEKDAY'); 
        break; 
}
/*
if (dayOfTheWeek === 0|| dayOfTheWeek === 0){
    console.log('WEEKEND');}
else{
    console.log('WEEKDAY);}


switch(true){
    case dayOfTheWeek === 0|| dayOfTheWeek === 0: 
        console.log('WEEKEND'); 
        break; 
    default:
        console.log('WEEKDAY'); 
*/

let result = dayOfTheWeek === 0 || dayOfTheWeek === 6 ? 'Weekend' : 'Weekday'; 
console.log(result); 