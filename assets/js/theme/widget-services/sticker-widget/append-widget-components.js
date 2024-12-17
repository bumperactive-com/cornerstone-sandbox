import * as stickerWidgetHTML from './sticker-widget-html';


//Checks if item is a custom product, appends custom sticker widget if true.  
export default function appendWidgetComponents(hideElementsSelector, appendElements, afterElements, createDefaultQuoteMessage) {
    const customStickersLabel = document.querySelector(".form-label.form-label--alternate.form-label--inlineSmall");
        //Hides hidden product option fields (width, height, sticker qty, tens of sqin)
        hideElementsSelector(`.form-field[data-product-attribute="input-number"]`);
    
        appendElements(customStickersLabel, stickerWidgetHTML.radioButtonContainer);

        const sizeButtonSection = document.querySelector("#sizeButtons");
        afterElements(sizeButtonSection, stickerWidgetHTML.customSizeSection);

        const quantityButtonSection = document.querySelector("#stickerButtons");
        afterElements(quantityButtonSection, stickerWidgetHTML.customQuantitySection);

        const nextBtnContainer = document.getElementById("nextBackBtnContainer");
        createDefaultQuoteMessage(nextBtnContainer, "--", "Select size & quantity to view price.");
}
