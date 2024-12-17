export default function customQuantity(hiddenElements, calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray) {
    console.log("custom");
    hiddenElements.hiddenQuantity.value = document.getElementById("box3").value;
    hiddenElements.hiddenResult.value = Math.round((hiddenElements.hiddenQuantity.value * hiddenElements.hiddenWidth.value * hiddenElements.hiddenHeight.value)/10);
    
    var increment = document.querySelector("#qty\\[\\]");
    increment.value = hiddenElements.hiddenResult.value;

     if ((hiddenElements.hiddenResult.value > 0) && (hiddenElements.hiddenQuantity.value > 0)) {
        console.log("hiddenResultValue + customQuanity",  hiddenElements.hiddenResult.value)

        calculatePricePerSticker(hiddenResultLimit, fullCustomPriceArray, hiddenElements);
    } else {
        return null;
    }
}