const buttonEl = document.getElementById('btn'); 
const inputEl = document.getElementById('name'); 

// addEventListener( 'eventType', callBackFunc)

// Click event 
buttonEl.addEventListener('click', (event) => { 
    console.log(event); 
    console.log(event); 
    console.log('Button clicked'); 
})

// Change event 
inputEl.addEventListener('change', (event) => {
    console.log('value', event.target.value); 
})

// Input event 
inputEl.addEventListener('input', (event) => {
    console.log('input value', event.target.value); 
})

// Keypress event 
inputEl.addEventListener('keypress', (event) => {
    console.log('code', event.code); 
    if(event .code === 'Enter ') {
        // 'work'
    }
    else {
        // ignore 
    }
    console.log('keypress value', event.target.value); 
})

// Keyup event 
inputEl.addEventListener('keyup', (event) => {
    console.log('keyup value', event.target.value); 
})