/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,
    "W": 87,
    "S": 83,
    "D": 68,
    "A": 65,
  }

  var BOARD_WIDTH = $("#board").width() - $("#walker").width();
  var BOARD_HEIGHT = $("#board").height() - $("#walker").height();
  var LEFT_SIDE = 0;
  var TOP_SIDE = 0;
  
  // Game Item Objects
  

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  $(document).on('keydown',handleKeyDown2);
  $(document).on('keyup', handleKeyUp2);

  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedY = 0; 

  var positionX2 = BOARD_WIDTH;
  var positionY2 = BOARD_HEIGHT;
  var speedX2 = 0;
  var speedY2 = 0;     
   
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem2();
    repositionGameItem();
    setBoundary();
    redrawGameItem2();
    redrawGameItem();
    
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    console.log("Key pressed : " + event.which)
    if (event.which === KEY.LEFT){
      console.log("Left pressed");
      speedX = -5;
    } if(event.which === KEY.DOWN){
      console.log("Down pressed");
      speedY = 5;
    } if(event.which === KEY.RIGHT){
      console.log("Right pressed");
      speedX = 5;
    } if(event.which === KEY.UP){
      console.log("Up pressed");
       speedY = -5;
    } 

  }

  function handleKeyDown2(event){
    if (event.which === KEY.A) {
      speedX2 = 5;
    } if (event.which === KEY.D){
      speedX2 = -5;  
    } if (event.which === KEY.W) {
      speedY2 = -5;
    } if (event.which === KEY.S) {
      speedY2 = 5;
    }
  }
    
  
  
 
  function handleKeyUp(){
    speedX = 0;
    speedY = 0;
  }

  function handleKeyUp2(){
    speedX2 = 0;
    speedY2 = 0;
  }


  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////  
  function  repositionGameItem(){
    positionX += speedX;
    positionY += speedY;
  }

  function repositionGameItem2(){
    positionX2 += speedX2;
    positionY2 += speedY2;
  }

  

  function redrawGameItem(){
    $("#walker").css("left", positionX);                                // draw the box in the new location, positionX pixels away from the "left"
    $("#walker").css("top", positionY);                              // draw the box in the new location, positionX pixels away from the "left"
  }

  function redrawGameItem2(){
    $("#player2").css("left", positionX2);                                // draw the box in the new location, positionX pixels away from the "left"
    $("#player2").css("top", positionY2); 
  }
  
     
  

function setBoundary(){
  //if the position of the walker is greater than or equal to board width stop walker
   if(positionX >= BOARD_WIDTH){
    positionX = BOARD_WIDTH;
   } 
    
   if (positionX <= LEFT_SIDE ){
    positionX = LEFT_SIDE;
   }

   if(positionY >= BOARD_HEIGHT){
    positionY = BOARD_HEIGHT;
   }

   if(positionY <= TOP_SIDE){
    positionY = TOP_SIDE;
   }
/////////////////////////////////////
   if(positionX2 >= BOARD_WIDTH){
    positionX2 = BOARD_WIDTH;
   } 
    
   if (positionX2 <= LEFT_SIDE ){
    positionX2 = LEFT_SIDE;
   }

   if(positionY2 >= BOARD_HEIGHT){
    positionY2 = BOARD_HEIGHT;
   }

   if(positionY2 <= TOP_SIDE){
    positionY2 = TOP_SIDE;
   }
}
  

  
    
 
 
  


  
  
}
