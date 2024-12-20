import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function orderMinimumProductView() {
    const uploadDiv = document.getElementById("Upload File"); 
    var backToProduct = document.createElement("button");
    const nextButton3 = document.querySelector(SELECTORS.NEXT_BUTTON_3)
    const specsDiv = document.querySelector(SELECTORS.SPECS_DIV);
    const addToCart = document.querySelector(SELECTORS.FORM_ACTION_ADD_TO_CART);
    const imageDecision1 = document.querySelector(SELECTORS.IMAGE_DECISION_1);
    const stickerFinishSection = document.querySelector(SELECTORS.STICKER_FINISH_SECTION);
    
    imageDecision1.style.display = "block";
    specsDiv.style.display = "none";
    uploadDiv.style.display = "none";
    addToCart.style.display = "none";
    nextButton2.style.display = "none";
    nextButton3.style.display = "block";

    backToProduct.style.display = "block";
    stickerFinishSection.style.display = "none";
}