import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function customQuantity(hiddenElements, calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray) {
    hiddenElements.hiddenQuantity.value = document.querySelector(SELECTORS.BOX3).value;
    hiddenElements.hiddenResult.value = Math.round((hiddenElements.hiddenQuantity.value * hiddenElements.hiddenWidth.value * hiddenElements.hiddenHeight.value)/10);
    
    var increment = document.querySelector(SELECTORS.QTY_INCREMENT);
    increment.value = hiddenElements.hiddenResult.value;

     if ((hiddenElements.hiddenResult.value > 0) && (hiddenElements.hiddenQuantity.value > 0)) {
        calculatePricePerSticker(hiddenResultLimit, fullCustomPriceArray, hiddenElements);
    } else {
        return null;
    }
}