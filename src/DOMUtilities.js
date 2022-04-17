 
 import './styles.css'
 
 export let makeElement =  function(elementType, elementClass, elementContent){
    let newElement = document.createElement(elementType);

    if(elementClass){
        newElement.classList.add(elementClass);
    }

    if(elementContent){
        newElement.textContent = elementContent;
    }

    return newElement;
}


