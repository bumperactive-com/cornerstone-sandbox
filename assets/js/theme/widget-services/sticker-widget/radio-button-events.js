
//Function that handles events when radio buttons are selected -- including what happens when customer inputs values into -
//custom size and quantity sections
export default function radioButtonEvents(updateIncrement, fullCustomPriceArray, hiddenResultLimit, hiddenElements, stickerWidgetHTML, calculatePricePerSticker, setValueEmpty, setTwoValuesEmpty,toggleCustomSection, customSize, customQuantity, checkAndSetHiddenValuesToZero, changeElementColor, parseAndSetDimensions, checkValuesAndCalculateQuote,changeColorButton1, changeColorButton2, changeColorButton3, changeColorButton4, changeColorButton5, setLabelColors, stickerFinishRadios, roundToTwoDecimals) {
    var next2 = document.getElementById("nextButton2");
    // Abstract HTML elements to the commonWidgetHTML.js file and call on them like below:console.log("hiddenElements", hiddenElements.hiddenResult);
    var labels = document.querySelectorAll("label");
    var arrayFormatLabels = Array.from(labels);
    var sizeLabel = [];
    var quantityLabel = sizeLabel;

    
    arrayFormatLabels.forEach(label => {
        if (label.className === "sizeLabel") {
            sizeLabel.push(label);
        } else if (label.className === "quantityLabel") {
            quantityLabel.push(label);
        } else {
           return null;
        }
    })
    
    //Now selecting only radio buttons by attribute and putting them in array
    const radios = document.querySelectorAll('[type="radio"]');
    const myBox3 = document.getElementById('box3');
    const customBox1 = document.getElementById("customBox1");
    const customBox2 = document.getElementById("customBox2");


    for (let i = 0; i < radios.length; i++) {
        //Size radio button
        const radioText = radios[i].value;
        radios[i].addEventListener("click", function() {
            if (radios[i].className == "inputSize") {   
                changeColorButton1(hiddenElements, stickerFinishRadios, next2);

                customBox1.style.display = "none";
                stickerWidgetHTML.customSizeSection.childNodes[1].style.display = "none";
                setTwoValuesEmpty(stickerWidgetHTML.customSizeSection.querySelectorAll("#box1")[0], stickerWidgetHTML.customSizeSection.querySelectorAll("#box2")[0]);
                setLabelColors('sizeLabel', 'black');
                changeElementColor(sizeLabel[i], '#FF6161');
                parseAndSetDimensions(radioText, hiddenElements);
                checkValuesAndCalculateQuote(calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray, hiddenElements); 
                updateIncrement(hiddenElements.hiddenResult.value);
            } else if (radios[i].className == "inputSizeCustom") {
                const box1 = document.getElementById("box1");
                const box2 = document.getElementById("box2");
                

                changeColorButton4(hiddenElements, stickerFinishRadios, next2);
                customBox1.style.display = "flex";
                checkAndSetHiddenValuesToZero(stickerWidgetHTML, hiddenElements, setTwoValuesEmpty);
                toggleCustomSection(stickerWidgetHTML.customSizeSection, "flex");
        
                setLabelColors('sizeLabel', 'black');
                changeElementColor(sizeLabel[i], '#FF6161');
                customSize(hiddenElements, stickerWidgetHTML, calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray);
    
                box1.addEventListener("input", function() {
                    customSize(hiddenElements, stickerWidgetHTML, calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray);
                });
                box2.addEventListener("input", function() {
                    customSize(hiddenElements, stickerWidgetHTML, calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray);
                });
                const customRadioButton = document.querySelector("#button_5");
                customRadioButton.checked = true;
               
                roundToTwoDecimals(box1, box2);
            }  else if (radios[i].className == "inputQuantity") {   
                changeColorButton2(hiddenElements, stickerFinishRadios, next2);

                customBox2.style.display = "none";
                stickerWidgetHTML.customQuantitySection.childNodes[1].style.display = "none";
                setLabelColors('quantityLabel', 'black');

                changeElementColor(quantityLabel[i], '#FF6161');
                hiddenElements.hiddenQuantity.value = radioText;
                hiddenElements.hiddenResult.value = Math.round((radioText * hiddenElements.hiddenWidth.value * hiddenElements.hiddenHeight.value)/10);
                setValueEmpty(myBox3);
                updateIncrement(hiddenElements.hiddenResult.value);
                checkValuesAndCalculateQuote(calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray, hiddenElements);
        } else if (radios[i].className == "inputQuantityCustom") {
                changeColorButton5(next2);
                toggleCustomSection(stickerWidgetHTML.customQuantitySection, "block");

                customBox2.style.display = "block";
                hiddenElements.hiddenQuantity.value = "";

                setLabelColors('quantityLabel', 'black');
                changeElementColor(quantityLabel[i], '#FF6161');
                customQuantity(hiddenElements, calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray);

                document.getElementById("box3").addEventListener("input", function() {
                    customQuantity(hiddenElements, calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray);
                });
              
                const customRadioButton = document.querySelector("#button_10");
                customRadioButton.checked = true;
            } else if (radios[i].parentNode.id == "stickerFinishSection") {
                changeColorButton3(hiddenElements, next2);
            } else {
                return null;
            }
         }
        )}

}
