function get() {
    return 'GET';
}

function del() {
    return 'DELET'
}



const APIHelper = {
    get, 
    del, 
    post, 
    update
}; 

module.exports = APIHelper; 

/*
For the above we could create a class w/ all the functions/methods
and export the class, rather than making a bunch of functions/methods. 
class APIHelper {
    get() {
    return 'GET' 
  }
}

module.exports = Ap

*/