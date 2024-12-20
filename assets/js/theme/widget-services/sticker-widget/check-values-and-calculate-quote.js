export default function checkValuesAndCalculateQuote(calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray, hiddenElements) {
    if ((hiddenElements.hiddenResult.value > 0) && (hiddenElements.hiddenQuantity.value > 0)) {
        calculatePricePerSticker(hiddenResultLimit, fullCustomPriceArray, hiddenElements);
    } else {
        return null;
    }
}