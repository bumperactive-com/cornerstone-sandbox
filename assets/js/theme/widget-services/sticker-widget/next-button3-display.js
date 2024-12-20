import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function nextButton3display(commonWidgetHTML) {
    const specsDiv = document.querySelector(SELECTORS.SPECS_DIV);
    const addToCart = document.querySelector(SELECTORS.FORM_ACTION_ADD_TO_CART);
    const imageDecision = document.querySelector(SELECTORS.IMAGE_DECISION_SECTION);
    const nextButtonText = document.querySelector(SELECTORS.NEXT_BUTTON_TEXT)
    const quoteLabel = document.querySelector(SELECTORS.QUOTE_LABEL)
    const imageDecision1 = document.querySelector(SELECTORS.IMAGE_DECISION_1);

    unionLabelSection.style.display = "block";
    specsDiv.style.display = "none";
    imageDecision.style.display = "none";
    imageDecision1.style.display = "none";
    addToCart.style.display = "block";
    nextButtonText.style.display = "none";
    quoteLabel.style.display = "none";
    
    commonWidgetHTML.pageElements.nextButton2.style.display = "none";
    commonWidgetHTML.pageElements.nextButton3.style.display = "none";
    commonWidgetHTML.pageElements.backButton2.style.display = "none";
    commonWidgetHTML.pageElements.backButton3.style.display = "block";
}
