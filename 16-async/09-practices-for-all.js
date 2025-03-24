// Using callback BEFORE ES6
function gotoAmazon1(callback, error) {
    const bool = true; 
    setTimeout(() => {
        if(bool) {
            console.log('Amazon is loaded...'); 
            callback(); 
        }
        else error(); 
    }, 500); 
}

function clickOnLocationHeaderItem1(callback, error) {
    const bool = true; 
    setTimeout(() => {
        if(bool) {
            console.log('Location header item is clicked...');
            callback(); 
        }
        else error(); 
    }, 200); 
}

function validateDialogueIsVisible(callback, error) {
    setTimeout(() => {
        const bool = true; 
        if(bool) {
            callback(); 
            console.log('Dialogue is visible...'); 
        } 
        else error(); 
    }, 300); 
}

function test1() {
    gotoAmazon1(() => {
        clickOnLocationHeaderItem1(() => {
            validateDialogueIsVisible(() => {
                console.log('Location dialogue visibility test case PASSED!')
            }, 
            () => {
                console.log('Location dialogue visibility test case FAILED!')
            });
        }, 
        () => {
            console.log('Location header item FAILED!'); 
        }); 
    }, 
    () => {
        console.log('Go to amazon FAILED!'); 
    }); 
}

// test1(); 

// AFTER ES6 - using promises w/ then-catch methods
function gotoAmazon2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let bool = true;
        if (bool) {
          console.log("Amazon is loaded...");
          resolve();
        } else {
          reject("ERROR: Go to amazon FAILED!");
        }
      }, 500);
    });
  }
  
  function clickOnLocationHeaderItem2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let bool = true;
        if (bool) {
          console.log("Location header item is clicked...");
          resolve();
        } else {
          reject("Location header item FAILED!");
        }
      }, 200);
    });
  }
  
  function validateDialogIsVisible2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let bool = true;
        if (bool) {
          console.log("Dialog is visible...");
          resolve();
        } else {
          reject("Location dialod visibility FAILED!");
        }
      }, 200);
    });
  }

function test2() {
    gotoAmazon2() // do this first
        .then(() => clickOnLocationHeaderItem2()) // THEN work on this 
        .then(() => validateDialogIsVisible2()) // THEN work onthis 
        .catch((err) => console.log(err)); 
}

// test2(); 

// AFTER ES6 - using promises w/ async-await keywords 
async function test3() {
    try {
        await gotoAmazon2(); // whatever method returns a promise 
    // --> asynchronous, SO await is placed in front of ONLY ASYNC 
    await clickOnLocationHeaderItem2();
    await validateDialogIsVisible2(); 
    }
    catch(err) {
        console.log(err); 
    }
}

test3(); 