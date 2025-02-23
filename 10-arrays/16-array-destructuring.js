let dates = '02/23/2025'; 

// Get the date and make sure it is today's date.
const dateArr = dates.split('/'); 

//let month = dateArr[0]; 
//let day = dateArr[1]; 
//let year = dateArr[2]; 

const [month, day, year] = dateArr; // [ '02', '23', '2025' ] --> const usually with deconstrucing BUT if you're going to edit --> let 
const currentDate = new Date(); 

if(month+1 === currentDate.getMonth + 1 
&& day === currentDate.getDate() && 
year === currentDate.getFullYear); 
{
    console.log(`the day restrieved is today`); 
}

console.log(currentDate.getDate()); 
console.log(currentDate.getFullYear()); 
console.log(currentDate.getMonth()); 


// array destructuring 
const credentials = ['techglobal', 'techglobal@gmail.com', 'Test1234']; 

const [username, email, password] = credentials;  // you can skip over , , 

console.log(username); 
console.log(password); 


const favs = ['Shish Kabob', 'Amok', 7, 'Batch-11', true]; 
const [, favBook, , favBatch] = favs; 
console.log(favBook); // Amok
console.log(favBatch); // Batch-11