

export default function nextButton3display(commonWidgetHTML) {
    const specsDiv = document.getElementById("radioSize");
    const addToCart = document.querySelector("#form-action-addToCart");
    const imageDecision = document.querySelector("#imageDecision");
    const nextButtonText = document.getElementById("nextButtonText");
    const quoteLabel = document.getElementById("quoteLabel");

    unionLabelSection.style.display = "block";

    specsDiv.style.display = "none";
    imageDecision.style.display = "none";
    const imageDecision1 = document.querySelector("#imageDecision1");
    imageDecision1.style.display = "none";
    addToCart.style.display = "block";
    nextButtonText.style.display = "none";
    quoteLabel.style.display = "none";
    
    commonWidgetHTML.pageElements.nextButton2.style.display = "none";
    commonWidgetHTML.pageElements.nextButton3.style.display = "none";
    commonWidgetHTML.pageElements.backButton2.style.display = "none";
    commonWidgetHTML.pageElements.backButton3.style.display = "block";
}
