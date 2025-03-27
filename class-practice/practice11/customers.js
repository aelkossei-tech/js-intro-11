/*
TASK-PART-4: 

Create a customer object with below information
customer1 = { name: 'Jane Smith', age: 35, membershipType: 'Basic', membershipCost: 50 }
*/
const Customer = require('./Customer'); 


const customer1 = new Customer('Jane Smith', 35, 'Basic', 50); 

/*
TASK-PART-5: 

Create a VIP customer object with below information
vipCustomer = { name: 'Jane Smith', age: 35, membershipType: 'Gold', membershipCost: 100 }
*/
const VIPCustomer = require('./VIPCustomer'); 

const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100); 


/*
TASK-PART-6: 

Create a business customer object with below information
businessCustomer = { name: 'David Johnson', age: 40, membershipType: 'Platinum', membershipCost: 200, duration: 2 }
*/
const BusinessCustomer = require('./BusinessCustomer'); 

const businessCustomer = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2); 


/*
TASK-PART-7: 

Execute the upgradeMembership() method for customer1
    -this will upgrade the membership type of customer1 to 'Premium'
Execute the applyDiscount() method for vipCustomer
    -this will apply a discount of 10% to the membership type of vipCustomer
Execute the extendContract() method for businessCustomer
    -this will extend the contract of businessCustomer by 1 year
*/
customer1.upgradeMembership(); // updates membership from basic to premium + adds 20% to cost 
vipCustomer.applyDiscount(); // updates cost to 10% less 
businessCustomer.extendContract(); // add 1 year duration + subtract 15% cost 

/*
TASK-PART-7: 

Print information of all the customers using getDetails() method

EXPECTED OUTPUT:
John Doe is 30 years old and has a Premium membership with $60.
Jane Smith is 35 years old and has a Gold membership with $90.
David Johnson is 40 years old and has a Platinum membership with $170.
*/
console.log(customer1.getDetails()); 
console.log(vipCustomer.getDetails()); 
console.log(businessCustomer.getDetails());

/*

const customers = [customer1, vipCustomer, businessCustomer]; 

for(const customer of customers) {
    console.log(customers.getDetails()); 
}
    
*/ 