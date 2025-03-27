/*
TASK-PART-2: 

Create a class called VIPCustomer and inherit the Customer class
- Create a constructor for this class which takes 4 arguments: 
    name
    age
    membershipType
    membershipCost
    - Inherit the Customer class constructor and the other methods
- Create a method called applyDiscount() which applies a discount of 10% to the VIP customer's membershipCost.
*/
const Customer = require('./Customer'); 

class VIPCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost) {
        super(name, age, membershipType, membershipCost);
    }
    applyDiscount() {
        this.membershipCost *= 0.90; 
        //  this.membershipCost -= this.membershipCost * 0.1;
    }
}

module.exports = VIPCustomer; 