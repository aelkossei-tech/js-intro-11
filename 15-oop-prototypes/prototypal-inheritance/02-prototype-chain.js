const vehicle = {
    move: function(){
        console.log('MOVE'); 
    } 
};

const car = {
    __proto___: vehicle, 
    drive: function() {
        console.log('DRIVE'); 
    }
}; 

const myCar = {
    __proto___: car, 
    electricCharging: true 
}; 

console.log(myCar.electricCharging); // true
myCar.drive(); // DRIVE 
myCar.move(); // MOVE 


// Prototype Chaining 
console.log(myCar.__proto___); // {drive: [Function : drive]}
console.log(myCar.__proto___.__proto___); // {move: [Function : move]}
console.log(myCar.__proto___.__proto___.__proto___); // [Object: null prototype] {} --> will return this if there no Object that goes back that far [our Adam object]
console.log(myCar.__proto___.__proto___.__proto___.__proto___); // null 
console.log(car.__proto___); // {move: [Function : move]}