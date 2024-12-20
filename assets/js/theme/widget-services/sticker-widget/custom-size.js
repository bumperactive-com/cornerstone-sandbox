import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function customSize(hiddenElements, stickerWidgetHTML, calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray) {
    hiddenElements.hiddenWidth.value = stickerWidgetHTML.customSizeSection.querySelector(SELECTORS.BOX1).value;
    hiddenElements.hiddenHeight.value = stickerWidgetHTML.customSizeSection.querySelector(SELECTORS.BOX2).value; 

    
    var customWidth = 0;
    var customHeight = 0;

    if (hiddenElements.hiddenWidth.value < 2) {
        customWidth = 2;
        hiddenElements.hiddenWidth.value = 2;
    } else {
        customWidth = hiddenElements.hiddenWidth.value;
    }

    if(hiddenElements.hiddenHeight.value < 2) {
        customHeight = 2;
        hiddenElements.hiddenHeight.value = 2;
    } else {
        customHeight = hiddenElements.hiddenHeight.value;
    }


    hiddenElements.hiddenResult.value = Math.round((hiddenElements.hiddenQuantity.value * customWidth * customHeight)/10);
    const increment = document.querySelector(SELECTORS.QTY_INCREMENT);
    increment.value = hiddenElements.hiddenResult.value;

     if ((hiddenElements.hiddenResult.value > 0) && (hiddenElements.hiddenQuantity.value > 0)) {
        calculatePricePerSticker(hiddenResultLimit, fullCustomPriceArray, hiddenElements);
    } else {
        return null;
    }
}