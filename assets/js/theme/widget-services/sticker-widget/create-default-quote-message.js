//Creates the default message before size & quantity are chosen by users
// var updatePrice = document.querySelector("body > div.body > div.container > div > div.productView > section:nth-child(3) > div.productView-options > form > div.form-action");
export default function createDefaultQuoteMessage(baseElement, defaultQuoteText, quoteLabelText) {
    const pricePerStickerBox = document.createElement("h1");
    pricePerStickerBox.id = "pricePerSticker";
    pricePerStickerBox.innerText = defaultQuoteText;
    baseElement.before(pricePerStickerBox);

    const quoteLabel = document.createElement("h1");
    quoteLabel.id = "quoteLabel";
    quoteLabel.innerText = quoteLabelText;
    pricePerStickerBox.before(quoteLabel);
}
