class Customer {
    // Private property => # 
    notSecret = 'Hi'; 
    #secretInformation = 'Hello'; // put a pound(#) in front of variable name to make it private [only within a class]
}

const cust1 = new Customer(); 

console.log(cust1.notSecret); // Hi
console.log(cust1.secretInformation); // undefined 

