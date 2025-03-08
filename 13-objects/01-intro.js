const obj1 = new Object(); // new Object(); also --> but not as common 
const obj2 = {}; 

const mouse = {   // Property: key-value pairs 
    name: 'HP Smart', 
    price: 10.99, 
    quantity: 15, 
    delivery: [ 'pick up', 'delivery']
}; 

console.log(mouse); // will show you all the metadata within the object 

// add properties with dot notation OR [] bracket notation 
mouse.colors = ['White', 'Black', 'Blue', 'Pink']; // most of the time --> dot notation 
// mouse['colors'] = ['White', 'Black', 'Blue', 'Pink'];


// remove properties with dot notation OR [] bracket notation 
delete mouse.delivery; 
// delete mouse['White', 'Black', 'Blue', 'Pink']; 

// update property values dot notation OR [] bracket notation 
mouse.price = 15.99; 
// mouse['price'] = 15.99; 

// retrieve property values with dot notation OR [] bracket notation 
console.log(mouse.price); 
// console.log(mouse.price); 

