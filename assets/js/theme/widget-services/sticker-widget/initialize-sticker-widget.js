import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function initializeStickerWidget() {
    nextButton2.style.display = "block";
    const nextButtonText = document.querySelector(SELECTORS.NEXT_BUTTON_TEXT);
    const addToCartButton = document.querySelector(SELECTORS.FORM_ACTION_ADD_TO_CART);

    nextButtonText.innerText = "Upload Artwork >>";
    addToCartButton.value = "Review Your Order";
}