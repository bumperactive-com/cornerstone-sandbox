export default function checkAndSetHiddenValuesToZero(stickerWidgetHTML, hiddenElements, setTwoValuesEmpty) {
    if (stickerWidgetHTML.customSizeSection.querySelectorAll("#box1")[0].value !== "" && stickerWidgetHTML.customSizeSection.querySelectorAll("#box2")[0].value !== "") {
        setTwoValuesEmpty(hiddenElements.hiddenWidth, hiddenElements.hiddenHeight);
    }
}
