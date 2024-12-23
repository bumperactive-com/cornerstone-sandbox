import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function checkAndSetHiddenValuesToZero(stickerWidgetHTML, hiddenElements, setTwoValuesEmpty) {
    const box1 = stickerWidgetHTML.customSizeSection.querySelector(SELECTORS.BOX1);
    const box2 = stickerWidgetHTML.customSizeSection.querySelector(SELECTORS.BOX2);

    // Ensure both box1 and box2 exist before checking their values
    if (box1 && box2 && box1.value !== "" && box2.value !== "") {
        setTwoValuesEmpty(hiddenElements.hiddenWidth, hiddenElements.hiddenHeight);
    }
}