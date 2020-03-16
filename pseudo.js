class Model{
  constructor (){

    

/* 
What is the role of the Model?
The model processes data received from the controller.
The model needs to store the information received from the controller and also needs to send the
data back to the controller to display on the view. When the controller tells
the model that the equation is complete, the model processes the stored data and sends it back 
to the controller to send to the view for display.
The model needs to understand what a number and operator is. It needs to understand
how to store data from button clicks. Create an empty reusable array called calcData to store data.

calcData = [];

set the nums and operator to null.
[0,1,2]
numOne, operator, numTwo


    this.numOne =null;   //array index 0
    this.operator=null //array index 1
    this.numTwo= null;   //array index 2


    // Make a function to process the problem by operator


    function operator {

      if ( opp === -)
    }
if  operator is a +, 
this.numOne array.push [0] & this.operator array.push [1]
this.numTwo array.push [2]



if operator is  -   
this.numOne array.push [0] & this.operator array.push [1]
this.numTwo array.push [2]


if operator is *
this.numOne array.push [0] & this.operator array.push [1]
this.numTwo array.push [2]


if operator is /
this.numOne array.push [0] & this.operator array.push [1]
this.numTwo array.push [2]


if operator is =
sum of array -this.numOne array.push [0] & this.operator array.push [1]
this.numTwo array.push [2]


how to handle . and allow it to only be used once. 

how to handle num / 0 to get an error .

how to handle math from not computing if more than 1 digit in a  number

if operator is C 
CLEAR view

setView (v){
  this.view = v;
*/
  };
  










class Controller {
  constructor(m){
    this.model = m;
  }

  /* What is the role of the controller?
  
  The controller handles all clicks and sends the click information to the model, which gets returned 
  to the controller to distribute to the view. */ 
  
  handleKeyEvent(){
    this.model.incrementNumber();
  }
}

class View {
  constructor (){
    
  }
  buildUI(){
    console.log("built ui");
  }
  
  updateDisplay(n){
    console.log(n);
  }
}


  // create my objects
  var m = new Model();
  var c = new Controller(m);
  var v = new View();
  m.setView(v);
  
  v.buildUI();
  m.incrementNumber();

  document.addEventListener("keydown", this.c.handleKeyEvent.bind(this.c)); // sets up the binding of the keydown to the controller