//next two functions are empty functions, code will be added later in future assignments.
function startButtonClick(){}

function stopButtonClick(){}




//condenses the code for the 50 second countdown into an easily executable function
function runTimer(countdownElem){
    //variables for the timeout, currTime is the time showed on the countdown
    var currTime = 50; 
  
    //tracks the time out
    var timeout = 0; 
  
    //this is the 5 second delay for the countdown
    var timeoutIncrement = 5000;
    //this is is our for loop, which will run the code that is inside of the {} 11 times
    for(var counter=0; counter < 11; counter++){
      //this is the countdown comment itself, it subtracts a value of 5 for every 5000 miliseconds and displays it in the html <span>
      setTimeout(function(){
        //runes code to check for the timer counter to = 0, when this happens the alert "Blast off!!!" will display and countdownElem.innerHTML will display "launch Successful!"
        if(currTime == 0 ){
          alert("Blast off!!!");
          countdownElem.innerHTML = "Launch Successful!"
        }
        //this argument checks for currtime to be less than 25 seconds, when it does it will display the warning as well as the current time on the countdown
        else if(currTime <25){
          countdownElem.innerHTML = "Warning Less than half way to launch, time left = " + currTime;
        }
        else{
        //this display only the countdown timer if neither of the two mentioned conditions are met
          countdownElem.innerHTML = currTime;
        }
  
        currTime = currTime - 5;
      }, timeout);
      timeout = timeout + timeoutIncrement;
    }
  }
//function that condenses the code to hide and unhide a gif.
function launchGif(gif){
    //initially hides gif
    gif.style.display = "none";
    //used to display the gif after 49,999 miliseconds(49.99 seconds)
    setTimeout(function(){
        gif.style.display = "block";
        }, 49999);

}
