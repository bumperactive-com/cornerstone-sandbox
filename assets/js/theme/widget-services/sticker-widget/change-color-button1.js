export default function changeColorButton1(hiddenElements, stickerFinishRadios, next2) {
    if (hiddenElements.hiddenQuantity.value && (stickerFinishRadios[0].checked == true || stickerFinishRadios[1].checked == true)) {
        next2.style.backgroundColor = "#00afb9";
        next2.style.color = "#ffffff";
    } else {
        return null;
    }
}