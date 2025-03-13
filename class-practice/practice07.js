console.log('\n ---------TASK01----------\n');

const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
  ];


// Count how many users are older than 30   -> 2 
const olderThan30 = users.reduce((counter, user) => user.age > 30 ? counter + 1 : counter, 0); 
console.log(olderThan30); // 2 

/*
For...of Loop Solution
const olderThan30 = 0; 
for(let user of users){
    if(user.age > 30) olderThan30++; 
}

console.log(olderThan30); 
*/

// Count how many users live in Chicago  -> 2 
const liveInChicago = users.reduce((counter, user) => user.address.city === 'Chicago' ? counter + 1 : counter, 0); 
console.log(liveInChicago); 

// Count how many users live in Illinois  -> 3
const liveInIL = users.reduce((counter, user) => user.address.state === 'IL' ? counter + 1 : counter, 0); 
console.log(liveInIL); 

// Count how many users' emails in Gmail domain  -> 2
const userGmail = users.reduce((counter, user) => user.email.includes('gmail') ? counter + 1 : counter, 0); 
console.log(userGmail); 

// Find and store all the users name younger than 35   -> [ 'Tech', 'Jane', 'Alex' ]
/*
const youngerThan35 = users.filter((user  => user.age < 35).map(user => user.firstName)
console.log(youngerThan35); 


const youngerThan35 = users.reduce((nameArr, user) => user.age < 35 ?  nameArr.concat(user.name) : nameArr, []) --> BEST WAY 
console.log(youngerThan35)
*/
let arr = []; 
for(const user of users) {
    if(user.age < 35) arr.push(user.firstName); 
}
console.log(arr); 

// Find average of ages of all users   -> 28
const averageOfAges = (users.reduce((count, user) => count + user.age, 0))/users.length; 
console.log(averageOfAges); 



console.log('\n ---------TASK02----------\n');
const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];

// Find the most expensive product  -> MacBook Pro 16-inch
const mostExpensive = appleStore.reduce((result, product) => product.price > result.price ? product : result); 
console.log(mostExpensive.productName); 

// Find the product with the biggest quantity   -> Air Pods Pro 
const mostQuantity = appleStore.reduce((result, product) => product.quantity > result.quantity ? product : result); 
console.log(mostQuantity.productName); 

// Find all the product names  -->  ['iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]
const productNames = appleStore.map(product => product.productName); 
console.log(productNames); 


console.log('\n ---------TASK04----------\n');
const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};
// Calculate the total price of products in the cart -> 2444
const totalPrice = shoppingCart.items.reduce((total, item) => total + item.price * item.quantity, 0);  // total is our counter/accum here 
console.log(totalPrice); 

// Find the brands of all the products in the cart -> [ 'Dell', 'Apple', 'Sony' ]
const allBrands = shoppingCart.items.map(item => item.specifications.brand); 
console.log(allBrands); 

// Find all the items in the cart with their quantity  -> [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]
const itemsWithQuantity = shoppingCart.items.map(item => `${item.productName}, ${item.quantity}`); 
console.log(itemsWithQuantity); 