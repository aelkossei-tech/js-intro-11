/**
 * ACCESSING DOM ELEMENTS
 */

// Note: Below methods are functions of document object 
console.log(document); 

/**
 * getElementById()
 */
const headingEl = document.getElementById('heading'); 
console.log('headingEl', headingEl);

/**
 * getElementByClassName()
 * Returns - HTMLCollection [similar to arrays]
 */
const carImages = document.getElementsByClassName('car'); 
// HTMLCollection(3) [img.car, img.car, img.car]
console.log('carImages', carImages); 
console.log('first car', carImages[0]); 

for(let i = 0; i < carImages.length; i++) {
    const car = carImages[i]; 
    console.log('car', car); 
}

/**
 * getElementByTagName()
 * Returns - HTMLCollection [similar to arrays]
 */
const carImagesTag = document.getElementsByTagName('img'); 
console.log('carImageTag', carImagesTag); // HTMLCollection(3) [img.car, img.car, img.car]

/**
 * querySelector() - Universal get methods 
 * Returns a single element 
 */
const headingElement = document.querySelector('#heading'); // id --> use a #
const firstCarElement = document.querySelector('.car'); 
const firstCarElement2 = document.querySelector('img'); 
console.log('headingElement', headingElement);
console.log('firstCarElement', firstCarElement);
console.log('firstCarElement2', firstCarElement2);


/**
 * querySelectorAll() 
 * Returns NodeList [similar to arrays]
 */
const carImagesQuery = document.querySelectorAll('img'); 
const carImagesQuery2 = document.querySelectorAll('.car'); 
console.log('carImagesQuery', carImagesQuery); // NodeList(3) [img.car, img.car, img.car]
console.log('carImagesQuery2', carImagesQuery2); // NodeList(3) [img.car, img.car, img.car]

console.log(carImagesQuery[0]); // first ele
console.log(carImagesQuery.item[0]); // first ele 


/**
 * innerHTML 
 */
let author = 'Joe Doe'; 

// Grab element 
const authorEl = document.getElementById('author'); 
// Add content of element using innerHTML 
//authorEl.innerHTML = author; // string 

// Add html to element using innerHTML 
//authorEl.innerHTML = '<h1>Jane Doe</h1>' // html 

// What if I want to append instead of replace? 
//authorEl.innerHTML += '<h1>Alex Doe</h1>' // html 


// Create an array 
const students = ['Jane Doe', 'John Doe', 'Alex Doe'];  // HERE is our student array 
// Inside html file you will have a table element 
const table = document.querySelector('#studentTable'); // in our HTML file --> within our tbody, we have the id="studentTable"
// w/ querySelector --> you can access diff. types of metadata in your code(id [has to used # symbol to access desired id]); 

// Dynamically append a new row with array data --> KEYWORD: Dynamically ==> SO, what so we get as a return from queryselector --> we get a single element 
// How do we add 
for (let i = 0; i < students.length; i++) {
    const studentName = students[i];
    // console.log("student", student)
    table.innerHTML += `<tr><td>${studentName}</td></tr>`
    
}
