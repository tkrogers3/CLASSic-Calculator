let app = document.getElementById("app");
app.className = "container";


//setView (v){}
class View {  
    constructor(controller) {
    this.constructor= controller
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
    
    let colB = this.buildElement("div", "col-md-12 display-4 text-right p-1", "numberDisplay", "3908")
    rowA.appendChild(colB)
    
    
    
    
    let k = 0;
    let col;
    btnChar = ["C", "", "", "/", "9", "8", "7", "X", "4", "5", "6", "-", "1", "2", "3", "+", "0", "", ".", "="];
    for (let i = 0; i < 5; i++) {
        let row2 = this.buildElement("div", "row", "", "")
        display.appendChild(row2)
        for (let j = 0; j < 4; j++) {
            col = this.buildElement("button", "col m-2 border-1 p-2 text-secondary bg-dark", "btn" + k, btnChar[k]);
            k++
            
            row2.appendChild(col)
        }
    }
    
    let col3 = this.Element("div", "col-md-4", "", "")
    row1.appendChild(col3)
}


buildCalc();
