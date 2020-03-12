   function build(elements, class, id, htmlText){
        let element=document.getElement(elements);
         element.className= class;
         element.id= id;
         element.innerHTML=htmlText;
    return element;
}

// 