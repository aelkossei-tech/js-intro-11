/*
1. Use prompt() to collect the user's name.
    - If the user provides a name, display a welcome message using alert().
    - If no name is entered, display an error message in the console and exit.
    - Ask if they want to continue:
2. Use confirm() to ask if they want to proceed.
    - If they confirm, show an alert saying they chose to continue.
    - If they cancel, show an alert saying they canceled the action.
3. Log screen details in the console:
    - Log innerWidth (browser window width).
    - Log innerHeight (browser window height).
4. Reload the page after 10 seconds:
    - Display a message in the console informing the user that the page will reload.
    - Use setTimeout() with window.location.reload() to refresh the page after 10 seconds.
*/


/*
1. Use prompt() to collect the user's name.
    - If the user provides a name, display a welcome message using alert().
    - If no name is entered, display an error message in the console and exit.
    - Ask if they want to continue:
*/

const promptAns = prompt('Provide your username.'); 
console.log('promptAns', promptAns); 

if(promptAns) {
    const alertMessage = alert(`Welcome! ${promptAns}`); 
    console.log('alertMessage', alertMessage) 
}
else {
    const errorMessage = alert('ERROR! Did not provide username.'); 
    console.log('errorMessage', errorMessage); 
}

const confirmCont = confirm('Would you like to continue?'); 
console.log('confirmCont', confirmCont); 


/*
2. Use confirm() to ask if they want to proceed.
    - If they confirm, show an alert saying they chose to continue.
    - If they cancel, show an alert saying they canceled the action.
*/
    if(confirmCont) {
        const confirmYes = alert('Okay, you chose to continue');
        console.log('confirmYes', confirmYes); 
    }
    else {
        const confirmNo = alert('Okay, cancelled!');
        console.log('confirmNo', confirmNo); 
    }

/*
3. Log screen details in the console:
    - Log innerWidth (browser window width).
    - Log innerHeight (browser window height).
*/
console.log('Window', window.innerWidth);
console.log('Window', window.innerHeight);

/*
4. Reload the page after 10 seconds:
    - Display a message in the console informing the user that the page will reload.
    - Use setTimeout() with window.location.reload() to refresh the page after 10 seconds.
*/
console.log('Hey, buddy. Just letting you know that the page will reload in 10 seconds!')
setTimeout(() => {
    window.location.reload(); 
}, 10000); 