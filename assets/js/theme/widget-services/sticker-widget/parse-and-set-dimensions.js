export default function parseAndSetDimensions(value, hiddenElements) {
    if (value.includes("x")) {
        var removeX = value.split("x");
        var width = removeX[0];
        var height = removeX[1];
        hiddenElements.hiddenWidth.value = width;
        hiddenElements.hiddenHeight.value = height;
        hiddenElements.hiddenResult.value = Math.round((hiddenElements.hiddenWidth.value * hiddenElements.hiddenHeight.value * hiddenElements.hiddenQuantity.value)/10);
    } else {
        hiddenElements.hiddenQuantity.value = value; 
    }
}
