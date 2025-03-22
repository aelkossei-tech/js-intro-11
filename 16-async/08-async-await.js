function connectToServer() {
    return new Promise((resolve, reject) => {
        const bool = true; 
        if(bool) {
            console.log('Connection successful!')
            resolve(); 
        }
        else {
            console.log('Connection failed!'); 
            reject('ERROR: this connection has failed!'); 
        }
    })
}

async function test1() {
 try{
    await connectToServer(); 
    }
catch(err) {
    console.log(err);   
    }
}

test1(); 