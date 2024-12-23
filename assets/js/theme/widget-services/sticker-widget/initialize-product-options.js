//Inputs values and labels for the Sizes and Quantity radio buttons by pulling the product options directly from back-end of BC
// Consider identifying custom sticker option by display_name rather than using array orderW
export default function initializeProductOptions(jsContext, extractValues, createRadioButtons, createCustomButton) {
    const productOptions = jsContext.productOptions;
    const sizesValues = extractValues(productOptions, "RadioLabelSizes");
    const quantitiesValues = extractValues(productOptions, "RadioLabelQuantities");

    createRadioButtons(sizesValues, "sizeButtons", "sizeLabel", "inputSize");
    createRadioButtons(quantitiesValues, "stickerButtons", "quantityLabel", "inputQuantity");

    createCustomButton("Custom Size", "sizeButtons", "sizeLabel", "inputSizeCustom", "button_5");
    createCustomButton("Custom Quantity", "stickerButtons", "quantityLabel", "inputQuantityCustom", "button_10");
}
