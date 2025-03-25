// import statements 
const { UIHelper } = require('./UIHelper'); 
// above is object destructering 
const DBHelper = require('./DBHelper'); 
const APIHelper = require('./APIHelper'); 

const { connect, teardown } = require('./ServerHelper')

console.log(UIHelper.component); 
console.log(UIHelper.getUrl()); 


console.log(connect());
console.log(teardown());