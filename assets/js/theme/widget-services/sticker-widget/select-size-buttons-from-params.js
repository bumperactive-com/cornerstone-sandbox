import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function selectSizeButtonsFromParams(hiddenElements) {
    const widthBox = document.querySelector(SELECTORS.BOX1);
    const heightBox = document.querySelector(SELECTORS.BOX2);
    const customSizeForm = document.querySelector(SELECTORS.CUSTOM_SIZE_SECTION);
    const nextButton2 = document.querySelector(SELECTORS.NEXT_BUTTON_2);
    const unionButton = document.querySelector(SELECTORS.FORM_ACTION_ADD_TO_CART);
    const customBox1 = document.querySelector(SELECTORS.CUSTOM_BOX1);

    const width = new URL(document.location).searchParams.get("width");
    const height = new URL(document.location).searchParams.get("height");
 
    if ((!(window.location.href.includes("minimum"))) && width !== null && height !== null) {

        //The code below calculates tens of sqin and adds to hidden.  Is needed to calculate quote
        hiddenElements.hiddenResult.value = Math.round((hiddenElements.hiddenWidth.value*hiddenElements.hiddenHeight.value*hiddenElements.hiddenQuantity.value)/10);
        nextButton2.style.backgroundColor = "#00afb9";
        unionButton.style.backgroundColor = "#00afb9";
        unionButton.style.color = "#ffffff";
        //Converts to format that the button labels use
        const sizeDimension = width + "x" + height;
        const arraySizeLabels = Array.from(document.getElementsByClassName("sizeLabel"));
        //Pulls size list directly from page and puts them into array
        var fullSizeList = [];
        arraySizeLabels.forEach(label => {
        fullSizeList.push(label.innerHTML);
        });


        arraySizeLabels.forEach(label => {
       
            //For each size label, checks if the innerhtml is equal to dimension size determined by taking url params above.  
            if(label.innerHTML === sizeDimension) {
                label.style.color = "#FF6161";
                label.previousSibling.checked = true;
            //If the size dimension is not one of the option labels shown on page and width/height url params are a not empty, select Custom Size and set width/height vlaue
            } else if ((!fullSizeList.includes(sizeDimension)) && (width !=="") && (height !=="")) {
                widthBox.value = hiddenElements.hiddenWidth.value;
                heightBox.value = hiddenElements.hiddenHeight.value;
                customBox1.style.display = "block"; 
                customSizeForm.style.display = "flex"; 
                arraySizeLabels[arraySizeLabels.length-1].style.color = "#FF6161";
                arraySizeLabels[arraySizeLabels.length-1].previousSibling.checked = true;

            }
        })
    
    } else {
        return null;
    }
}
