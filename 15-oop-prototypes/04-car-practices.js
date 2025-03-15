const Car = require("./prototypes/Car"); // import our Car class from other file 

/*
Create 3 car objects with below infor: 
car1 --> 2023 Tesla X 80000
car2 --> 2022 BMW X& 60000
car3 --> 2020 Tesla Y 27000
*/

const car1 = new Car('Tesla', 'X', 2023, 80000); 
const car2 = new Car('BMW', 'X7', 2022, 60000); 
const car3 = new Car('Tesla', 'Y', 2020, 27000); 

const cars = [car1, car2, car3]; 

cars.forEach(car => {
    console.log(car); 
    car.drive(); 
    car.brakes(); 
    console.log(`${car.year} ${car.make} ${car.model} is $${car.price}.`);
    console.log();  
}) // could also work w/ for...of loop 