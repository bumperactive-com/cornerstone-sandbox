export default function changeColorButton2(hiddenElements, stickerFinishRadios, next2) {
    if (hiddenElements.hiddenWidth.value > 0 && hiddenElements.hiddenHeight.value > 0 && (stickerFinishRadios[0].checked == true || stickerFinishRadios[1].checked == true)) {
        next2.style.backgroundColor = "#00afb9";
        next2.style.color = "#ffffff";
    } else {
        return null;
    }
}