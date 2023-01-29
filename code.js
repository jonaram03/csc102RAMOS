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

    
        //this is the countdown comment itself, it subtracts a value of 5 for every 5000 miliseconds and displays it in the html <span>
        setTimeout(function(){
            countdownElem.innerHTML = currTime;
            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + timeoutIncrement;

        setTimeout(function(){
            countdownElem.innerHTML = currTime;
            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + timeoutIncrement;

        setTimeout(function(){
            countdownElem.innerHTML = currTime;
            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + timeoutIncrement;

        setTimeout(function(){
            countdownElem.innerHTML = currTime;
            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + timeoutIncrement;

        setTimeout(function(){
            countdownElem.innerHTML = currTime;
            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + timeoutIncrement;

        setTimeout(function(){
            countdownElem.innerHTML = currTime;
            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + timeoutIncrement;

        setTimeout(function(){
            countdownElem.innerHTML = currTime;
            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + timeoutIncrement;

        setTimeout(function(){
            countdownElem.innerHTML = currTime;
            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + timeoutIncrement;

        setTimeout(function(){
            countdownElem.innerHTML = currTime;
            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + timeoutIncrement;

        setTimeout(function(){
            countdownElem.innerHTML = currTime;
            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + timeoutIncrement;

        setTimeout(function(){
            countdownElem.innerHTML = currTime;
        currTime = currTime - 5            
        }, timeout);
        timeout = timeout + timeoutIncrement;

        
        //this is another time out command I added to allow the countdown increment to hit 0 before the JavaScript alert freezes the countdown
        setTimeout(function() { alert("Blast off!!!"); }, 50100);
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
