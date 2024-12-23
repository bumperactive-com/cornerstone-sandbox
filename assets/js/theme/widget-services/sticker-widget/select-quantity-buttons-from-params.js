import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function selectQuantityButtonsFromParams(hiddenElements) {
    const numberBox = document.querySelector(SELECTORS.BOX3);
    const customQuantityForm = document.querySelector(SELECTORS.CUSTOM_QUANTITY_FORM);
    const quantity = new URL(document.location).searchParams.get("quantity");
    const arrayQuantityLabels = Array.from(document.querySelectorAll(SELECTORS.QUANTITY_LABELS));
    const customBox2 = document.querySelector(SELECTORS.CUSTOM_BOX2);

    if ((window.location.href.includes("minimum") == false) && quantity !== null) {
    //Pulls size list directly from page and puts them into array
        var fullQuantityList = [];
        arrayQuantityLabels.forEach(label => {
            fullQuantityList.push(label.innerHTML);
        });
        
        arrayQuantityLabels.forEach(label => {
            if(label.innerHTML === quantity) {
                label.style.color = "#FF6161";
                label.previousSibling.checked = true;
            } else if (!fullQuantityList.includes(quantity) && (quantity !=="")) {
                numberBox.value = hiddenElements.hiddenQuantity.value;
                customBox2.style.display = "block"; 
                customQuantityForm.style.display = "block"; 
                
                arrayQuantityLabels[arrayQuantityLabels.length-1].style.color = "#FF6161";
                arrayQuantityLabels[arrayQuantityLabels.length-1].previousSibling.checked = true;
            }
        })
    } else {
        return null;
    }
}
