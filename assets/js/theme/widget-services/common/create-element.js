//This function handles creating new elements dynamically with innerHTML added
export default function createElement(elementType, innerHTML) {
    let newElement = document.createElement(elementType);
    newElement.innerHTML = innerHTML;
    return newElement;
 }