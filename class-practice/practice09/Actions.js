/*
1. Create a class called Actions --> *** Interview Question ***
    - I use the "class" keyword and then create the class name 

2. Create 3 static asynchronous functions w/ the details given below in this class 
     a.) Create a function called as visitUrl()
         - it takes an argument url
         - it returns a Promise which will be resolved if url starts with 'www' or 'https://'
         - resolve message will be 'URL visited successfully'
         - the Promise will be rejected if url does not start with 'www' or 'https://' with a message 'Wrong URL'
         - delay this method for 1 second for demo purposes

    b.) Create a function called as login()
        - it takes 2 arguments username and password
        - it returns a Promise which will be resolved if username = 'TechGlobal' and password = 'Test1234'
        - resolve message will be 'Logged in successfully'
        - the Promise will be rejected whether username or password is wrong with a message 'Wrong credentials'
        - delay this method for 3 seconds for demo purposes

    c.) Create a function called as validateTitle()
        - it takes an argument title
        - it returns a Promise which will be resolved if the title is not empty, undefined or null
        - resolve message will be 'Title validated successfully'
        - the Promise will be rejected if title is empty, null or undefined with a message 'Wrong title'
        - delay this method for half a second for demo purposes
 
 - SIDE NOTE: research a way to create a static method w/ a stand-alone function 
*/
export class Actions {
    static visitUrl(url) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(url.startsWith('www') || url.startsWith('https://')) resolve('URL visited successfully');
                else reject('Wrong URL'); 
                
            }, 1000); 
        })
    }

    static login(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(username === 'TechGlobal' && password === 'Test1234') resolve('Logged in successfully');
                else reject('Wrong credentials'); 
            }, 3000); 
        })
    }

    static validateTitle(title) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(title) resolve('Title validated successfully'); // since we want a TRUTHY value and not a FALSY value(null, undefined, empty string) --> can just use title
                // title != '' && title != null && title !== undefined
                else reject('Wrong title'); 
            }, 500); 
        })
    }

}; 


// OR export { Actions }