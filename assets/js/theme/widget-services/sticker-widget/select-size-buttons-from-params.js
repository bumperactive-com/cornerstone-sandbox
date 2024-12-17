export default function selectSizeButtonsFromParams(hiddenElements) {
    const widthBox = document.getElementById("box1");
    const heightBox = document.getElementById("box2");
    const customSizeForm = document.getElementById("customSizeForm");
    const width = new URL(document.location).searchParams.get("width");
    const height = new URL(document.location).searchParams.get("height");
    const nextButton2 = document.getElementById("nextButton2");
    const unionButton = document.getElementById("form-action-addToCart");
 
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
                let customBox1 = document.getElementById("customBox1");
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
