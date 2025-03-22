function gotoCarvana() {
    setTimeout((callback) => {
      console.log('Carvana website is loaded...'); 
      callback(); 
    }, 500);
  }

  function clickOnFinancing(callback) {
    setTimeout(() => {
        console.log('Carvana financing page is loaded...'); 
        callback(); 
      }, 1000);
  }

  function validateHeading(expected) {
    setTimeout(() => {
        console.log(`${expected} heading is loaded...`); 
      }, 750);
  }

  /*
  function test1() { // should take at least 2250 
    setTimeout(() => {
        gotoCarvana(); 
        setTimeout(() => {
            clickOnFinancing(); 
            setTimeout(() => {
                validateHeading(); 
            }, 750); 
        }, 1000); 
    }, 500)
  }
*/


function test1() {
    gotoCarvana(() => {
        clickOnFinancing(() => {
            validateHeading('FINANCING MADE EASY'); 
        }); 
    }); 

}
  test1(); 

  /*
Expected flow: 
  
  Carvana website is loaded...
  Carvana financing page is loaded...
  FINANCING MADE EASY heading is loaded...

Acutal flow w/o handling async operation:  

  Carvana website is loaded...
  FINANCING MADE EASY heading is loaded...
  Carvana financing page is loaded...
  */
