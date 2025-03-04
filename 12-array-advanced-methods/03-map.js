const numbers = [5, 3, 2, 20];

// ['odd', 'odd', 'even', 'even']

/*
const oddEven = []; 
for(const num of numbers){
    if(num % 2 === 0) oddEven.push('even'); 
    else oddEven.push('odd'); 
}
console.log(oddEven); 
*/

console.log(numbers.map((el) => el % 2 === 0 ? 'even' : 'odd'));  // always returns the SAME size of the original array 

// each sentence's first word -> ['Good', 'I', 'It'];
const sentences = ['Good evening', 'I like arrays', 'It is Monday'];

console.log(sentences.map((word) => word.split(' ')[0])); // word.slice(0, sen.indexOf(' '))



// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]

const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];

console.log(salaries.map((salary) => salary.toFixed(2))); 