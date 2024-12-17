
export default function changeColorButton3(hiddenElements, next2) {
    if (hiddenElements.hiddenWidth.value > 0 && hiddenElements.hiddenHeight.value > 0 && hiddenElements.hiddenQuantity.value) {
        next2.style.backgroundColor = "#00afb9";
        next2.style.color = "#ffffff";
    } else {
        return null;
    }
}