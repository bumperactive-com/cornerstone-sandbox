import * as stickerWidgetHTML from './sticker-widget-html';
import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

//Checks if item is a custom product, appends custom sticker widget if true.  
export default function appendWidgetComponents(hideElementsSelector, appendElements, afterElements, createDefaultQuoteMessage) {
        const customStickersLabel = document.querySelector(SELECTORS.CUSTOM_STICKERS_LABEL);
        
        //Hides hidden product option fields (width, height, sticker qty, tens of sqin)
        hideElementsSelector(SELECTORS.HIDDEN_PRODUCT_OPTION_FIELDS);
    
        appendElements(customStickersLabel, stickerWidgetHTML.radioButtonContainer);

        const sizeButtonSection = document.querySelector(SELECTORS.SIZE_BUTTON_SECTION);
        afterElements(sizeButtonSection, stickerWidgetHTML.customSizeSection);

        const quantityButtonSection = document.querySelector(SELECTORS.QUANTITY_BUTTON_SECTION);
        afterElements(quantityButtonSection, stickerWidgetHTML.customQuantitySection);

        const nextBtnContainer = document.querySelector(SELECTORS.NEXT_BTN_CONTAINER);
        createDefaultQuoteMessage(nextBtnContainer, "--", "Select size & quantity to view price.");
}
