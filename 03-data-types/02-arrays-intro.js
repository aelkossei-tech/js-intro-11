//Arrays 
let studentName = 'Ayah'; 

//Multiple names, numbers, objects, strings, prices, etc. 

const names = ['John', 'Alex', 'James','Max']; //once you see [] --> array [string array]
const numbers = [5, 6, 10, 15]; //number array 

console.log(names); //[ 'John', 'Alex', 'James', 'Max' ]
console.log(numbers); //[ 5, 6, 10, 15 ]

names = 'Hello'; //Error because you can't reasign the value

// 

const favoriteMovies = ['Matrix', 'Avengers', 'Fast and Furious']; 

console.log(favoriteMovies); // ['Matrix', 'Avengers', 'Fast and Furious']
console.log(typeof favoriteMovies); //object

//Getting the size of the array - how many elements you have in the array
favoriteMovies.length //easier way to figure out your extent of your contents 
let sizeofArray = favoriteMovies
console.log(sizeofArray); //3

//Access a specific element in the array 
let secondMovie = favoriteMovies[1]; 
console.log(secondMovie); 

/* So above, we're assigning a variable 
(secondMovie) to the favoriteMovies[array element number #1  = 'Avengers']
*/

console.log(favoriteMovies [2]); //'Fast and Furious' is Index #2 in the array 
console.log(typeof favoriteMovies [2]); // string

// *if you want to change a bunch, right click, "Rename Symbol"

console.log(favoriteMovies [3]); //undefined, because there's only 0 - 2 

const cities = ['Rome', 'Berlin']; 

console.log(cities.length); // 2 

//Update an existing element
cities[1] = 'Chicago'

console.log(cities); // ['Rome', and 'Chicago'] --> you can modify the inner elements but not cities (brackets are your safe haven)

//Add a new element 
// cities[2] = 'Miami'; 
cities.push('Miami'); 
cities.push('Milan', 'Gent'); 

console.log(cities); //[ 'Rome', 'Chicago', 'Miami' ]

const ids = [100, 101, 102, 103, 104]; 

let firstElement = ids[0]; 
let lastElement = ids[ids.length - 1]; //ids[ids.length-1] helps with changes in array
console.log(firstElement); 
console.log(lastElement); 

//
const mixArray = [5, 'John', true, 3 === 0, Symbol('Foo'), 10.99, undefined, null, NaN, {}, []]


let favoriteSongs = ['Wicked Games', 'Space Song', 'Euphoria']; 
console.log(favoriteSongs.length); // 3 
console.log(favoriteSongs[0]); 
favoriteSongs.push('Middle Child'); 
console.log(favoriteSongs); 