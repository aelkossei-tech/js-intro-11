const dog = {
    name: 'Johnny',
    age: 3, 
    getInfo: function(){ 
        return this; // this --> { name: 'Johnny', age: 3, getInfo: [Function: getInfo] }
    }
}; 

console.log(dog); 
console.log(dog.getInfo()); 