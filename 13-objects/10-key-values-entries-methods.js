const phone = {
    brand:'iPhone', 
    storage: 64, 
    color: 'Yellow', 
    price: 1000
}; 

// keys --> array of keys [ brand, storage, color, price ]
// values --> array of values [ 'iPhone', 64, "Yellow", 1000 ]
// properties --> nested array of properties [ [brand: 'iPhone'], [storage: 64], [color: "Yellow"], [price: 1000] ]

console.log(Object.keys(phone)); // [ 'brand', 'storage', 'color', 'price' ]
console.log(Object.values(phone)); // [ 'iPhone', 64, 'Yellow', 1000 ]
console.log(Object.entries(phone)); 
/*
  [ 'brand', 'iPhone' ],
  [ 'storage', 64 ],
  [ 'color', 'Yellow' ],
  [ 'price', 1000 ]
]; 
*/
for(const feature of Object.keys(phone)){
    console.log(feature); 
}

for(const value of Object.values(phone)){
    console.log(value); 
}

for(const [key, value] of Object.entries(phone)){
    // console.log(`The entry is '${entry[0]}, and the entry value is ${entry[1]}'.`); 
    console.log(`The entry key is '${key}, and the entry value is '${value}`); 
}
