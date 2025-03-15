class Product {
    constructor(name, quantity, price) {
        this.name = name; 
        this.quantity = quantity; 
        this.price = price; 
    }

    sell(num) {
        if(this.quantity >= num) this.quantity -= num; 
        else throw new Error(`We don't have ${num} of ${this.name} in stock!`)
    }
    return(num) {
        this.quantity += num; 
    }
    applyDiscount(percentage) { // 0.1 
        if(percentage <= 1) this.price -= this.price * percentage; 
    }
}

module.exports = Product; 
