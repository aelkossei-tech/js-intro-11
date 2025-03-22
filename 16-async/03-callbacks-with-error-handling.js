const { getRandomNumber } = require('./../utils/MathHelper.js')

function getEven(successCallBack, errorCallBack) {
    setTimeout(() => {
        const ran = getRandomNumber(1, 10); 
        console.log(`The number you get is ${ran}...`); 
        if(ran % 2 === 0) successCallBack(); 
        else errorCallBack(); 
    }, 1000); 
}

getEven(() => {
    console.log('SUCCESS!'); 
}, () => {
    console.log('ERROR!'); 
}); 