
export default function changeColorButton4(hiddenElements, stickerFinishRadios, next2) {
    if (hiddenElements.hiddenQuantity.value > 0 && (stickerFinishRadios[0].checked == true || stickerFinishRadios[1].checked == true)) {
        next2.style.backgroundColor = "#808080";
        next2.style.color = "lightgray";
    } else {
        return null;
    }
}
