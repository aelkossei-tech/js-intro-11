function conncectToServer() {
    return new Promise((resolve, reject) => {
        const serverUp = true; 
        if(serverUp) resolve('Server connection is complete...'); 
        else reject('ERROR: Server is down...'); 
    })
}

conncectToServer()
.then((data) => {
    console.log(data); 
})
.catch((failure) => {
    console.log(failure);
})