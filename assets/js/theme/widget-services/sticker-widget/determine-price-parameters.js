export default function determinePriceParameters(jsContext, getBulkDiscountValues, convertToDecimal, extractPropertyFromObjects, determineFullPriceArray, calculateDiscountedPrice) {
    const basePriceValue = jsContext.productPrice;
    const bulkDiscountRates = jsContext.bulkDiscountRates;
    
    //Puts discount percentages into array 
    const bulkDiscountPercentages = getBulkDiscountValues(bulkDiscountRates);
    const discountPercentages = bulkDiscountPercentages.map(convertToDecimal);     //Converts discount percentages into decimal form
    const hiddenResultLimit = extractPropertyFromObjects(bulkDiscountRates, "max");
    const fullCustomPriceArray = determineFullPriceArray(basePriceValue, discountPercentages, calculateDiscountedPrice);

    return {
        hiddenResultLimit: hiddenResultLimit,
        fullCustomPriceArray: fullCustomPriceArray
    };
}