/*
TASK-PART-1: 

Create a class called Customer
- Create a constructor for this class which takes 4 arguments: 
    name
    age
    membershipType
    membershipCost
- Create a method called getDetails() which returns the customer's information in the format: 
    {name} is {age} years old and has a {membershipType} membership with ${membershipCost}.
- Create a method called upgradeMembership() 
    which upgrades the membership type of the customer to 'Premium' and increases the cost by 20%.
*/

class Customer {
    constructor(name, age, membershipType, membershipCost) { 
        this.name = name; 
        this.age = age; 
        this.membershipType = membershipType; 
        this.membershipCost = membershipCost; 
    }

    getDetails() {
        return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}`; 
    }

    upgradeMembership() {
        this.membershipCost *= 1.2; // Since we're INCREASING the cost of our membership --> you're adding 20% more on top of 100% 
        // SO --> our cost *= 1.2 
        // OR --> this.membershipCost += this.membershipCost * 0.2; 
        this.membershipType = 'Premium'; 
    }
}; 

module.exports = Customer; 