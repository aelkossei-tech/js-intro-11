// DOM - Day 2 

/**
 * innerHTML vs. innerText vs. textContent 
 */
const contentEl = document.getElementById('content'); 

contentEl.innerHTML = 'innerHTML text'; 
//contentEl.innerText = 'innerText text'; 
//contentEl.textContent = 'textContent text'; 

// contentEl.innerHTML = `<h2>innerHTML elememt </h2>`  --> works [most versatile]
// contentEl.textContent = `<h2>textContent elememt</h2>` --> doesn't work  
// contentEl.innerText = `<h2>innerText elememt</h2>` --> doesn't work  


/**
 * Create an element 
 * - createElement()
 * - append()
 * - createTextNode()
 */

const customElement = document.createElement('h3'); 
const bodyEl = document.body; 
// 1st Way
customElement.innerHTML = `<h3>Hello World</h3>`; 
bodyEl.innerHTML += customElement.innerHTML; 

// 2nd Way 
const customElement2 = document.createElement('h3'); 
customElement2.innerHTML = 'Hello World 2'; 
bodyEl.append(customElement2); 

// 3rd Way 
const customElement3 = document.createElement('h3'); 
const textNode = document.createTextNode('Hello World 3'); 
customElement3.append(textNode); 
bodyEl.append(customElement3); 

console.log("customElement", customElement); 

/**
 * Change DOM attributes 
 */
const lionImage = document.querySelector('img'); 

// 1st Way
//console.log(lionImage.src); 
//lionImage.src = 'https://i.natgeofe.com/k/1d33938b-3d02-4773-91e3-70b113c3b8c7/lion-male-roar.jpg?wp=1&w=1084.125&h=609'; 

// 2nd Way
//console.log(lionImage.getAttribute('src')); 
//lionImage.setAttribute('src', 'https://i.natgeofe.com/k/0ad655d5-f3c4-4673-854a-53e0116d26fc/lion-cub-yawning.jpg?wp=1&w=1084.125&h=609')


/**
 * className vs. classList
 */
const listEl = document.querySelector('.lists'); 
console.log('ul > className', listEl.className)
console.log('ul > classList', listEl.classList); 

const listEl2 = document.querySelector('.another'); 
console.log('ul2 > className', listEl2.className)
console.log('ul > classList', listEl2.classList); 

listEl2.className += 'list4'; // add another class 
listEl2.classList.add('list5'); // add another class 

// Remove 1 class from element 
listEl2.className  // add another class 
const classArray = listEl2.className .split(' ').filter(c => c !== 'list2'); 
console.log(classArray); 
listEl2.className = classArray.join(''); 
console.log(classArray); 

listEl2.classList.remove('list3'); 

// toggle 
const randomDiv = document.querySelector('#randomDiv'); 
const randomNumber = Math.floor(Math.random() * 10); 
console.log(randomNumber, 'randomNumber'); 

if(randomNumber < 5) {
    randomDiv.classList.toggle('color'); 
}

/**
 * Styling elements using JavaScript 
 */

const containerEl = document.querySelector('#container'); 
const boxEls = document.querySelectorAll('.box'); 

console.log(containerEl.style); // CSSStyleDeclaration {...} --> huge object 
containerEl.style.border = "1px solid"; 
containerEl.style.fontSize = "40px"; 


boxEls.forEach(boxEl => {
    console.log('boxEl', boxEl); 
    boxEl.style.backgroundColor = 'lightgray'
}); 


console.log(containerEl.previousSibling); 
console.log(containerEl.nextElementSibling); 

console.log(containerEl.previousElementSibling); 
console.log(containerEl.nextElementSibling); 