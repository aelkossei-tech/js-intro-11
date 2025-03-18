class Program {
    // Instance properties 
    name = 'SDET'; 
    batchNo = 11; 

    // Instance methods 
    funcA() {
        console.log('A'); 
    }
    static funcB() {
        console.log('B')
    }
}

Program.funcA(); // TypeError: Program.funcA is not a function --> You CAN'T access isntance methods/properties w/ class name 
Program.funcB(); // B 