let app = document.getElementById("app");
app.className = "container"
///Global variables go here 



/* class Model{
  constructor (){ }
  
  Store Data from eventListeners in an Arry, store them in a string. ("click", clickData )
  clickData = [null,null,null];
  
  from Help channel 
  -if (typeof(arr.split('+')) === 'object') {
    firstnum = arr.split('+')[0]
    operator = '+' 
    secondnum = arr.split('+')[1]
}
  as click data reaches num1, operator, num2, sum and move sum to index 0, readying
  index 1 for the next operand. When user clicks =, need to sum current filled indexes and move value
  to controller to distribute to controller.

 setView (v){                                 v = new View();
    this.view = v;
  }




looking at Justins example, view needs to be set to null here as well, and this.number = 0?
as in Display "0 "at default view?


  incrementNumber(){    is this referring to MATH or data array?
    this.number++;
    this.view.updateDisplay(this.number);
    
  }
}
}

*/

//setView (v){}
class View {  
    constructor(controller) {
    this.constructor= controller;
}
    
    buildElement {
        constructor(elementType, classes, id, textContent){
            let element = document.createElement(elementType)
            element.className =classes;
            element.id = id;
            element.innerHTML = textContent;
            return element;
        }
    
    }
    
    
    buildCalc(){
        
    
    let row1 = this.buildElement("div", "row", "", "")
    app.appendChild(row1)
    
    let col1 = this.buildElement("div", "col-md-4 ", "", "") //blank space
    row1.appendChild(col1)
    
    let col2 = this.buildElement("div", "col-md-4 mt-5", "", "")
    row1.appendChild(col2)
    
    let display = this.buildElement("div", "container border rounded text-success bg-secondary m-auto p-3 ", "display", "")
    col2.appendChild(display)
    
    let titleDisplay = this.buildElement("div", "row border rounded-top text-center display-4 font-weight-bold p-1", "", "")
    display.appendChild(titleDisplay)
    
    let titleCol = this.buildElement("div", "col text-center display-5 font-weight-bold bg-dark", "", "Classic")
    titleDisplay.appendChild(titleCol)
    
    let rowA = this.buildElement("div", "row border text-center bg-dark display-4 p-1", " ", "")
    display.appendChild(rowA)
    
    let colB = this.buildElement("div", "col-md-12 display-4 text-right p-1", "numDisplay", "3908")
    rowA.appendChild(colB)
    
    
    
    
    let k = 0;
    let col;
    btnChar = ["C", "", "", "/", "9", "8", "7", "X", "4", "5", "6", "-", "1", "2", "3", "+", "0", "", ".", "="];
    //WOULD LIKE TO ADD FONT AWESOME FOR OPERATORS BUT NOT SURE HOW TO INCORPORATE THEM INTO THE ARRAY BY HTML
    // MAYBE BY CLASS, BUT HOW DO I FIND INDIVIDUAL CLASS ON BUTTONS MADE IN A LOOP?
    //NOT A IMPORTANT AS THE MATH FUNCTIONS I NEED ATM.
    
    for (let i = 0; i < 5; i++) {
        let row2 = this.buildElement("div", "row", "", "")
        display.appendChild(row2)
        for (let j = 0; j < 4; j++) {
            col = this.buildElement("button", "col m-2 border-1 p-2 text-secondary bg-dark", "btn" + k, btnChar[k]);
            k++
            /*ATTACH CLICK HANDLERS TO BTN IDS (btn.addEventListener (click, )) TO SEND BTN INFO TO MODEL TO STORE DATA 
           AND VIEW TO DISPLAY DATA IN DATA WINDOW */
            row2.appendChild(col)
        }
    }
    
    let col3 = this.Element("div", "col-md-4", "", "")
    row1.appendChild(col3)
}



/*   
class Controller {       //    
  constructor(m){  
       getElementByID.numDisplay  = Output numbers as clicked 
       numDisplay.textContent = Display text content from button click
    this.model = m;
  }
  



  handleKeyEvent(){
    this.model.incrementNumber();
  }
}*/


// create my objects
/*var m = new Model();   
var c = new Controller(m);
var v = new View();
m.setView(v);

v.buildUI();
m.incrementNumber();

document.addEventListener("keydown", this.c.handleKeyEvent.bind(this.c)); // sets up the binding of the keydown to the controller
*///                                    c= new Controller 
buildCalc();
