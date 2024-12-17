

export default function handlePageLoadQuote(calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray, hiddenElements, orderMinimum) {
    //Only run the quote calculation on product pages that have had URL params passed to it
    var url = new URL(document.location);
    var params = url.searchParams;
    
    if (params.get("width") > 0) {
        if (window.location.href.includes("minimum") == false) {
        calculatePricePerSticker(hiddenResultLimit, fullCustomPriceArray, hiddenElements);
        } else {
            var pricePerSticker = document.getElementById("pricePerSticker");
            pricePerSticker.innerText = "$" + orderMinimum + " / " + "$" + (orderMinimum/hiddenElements.hiddenQuantity.value).toFixed(2) + " Ea."; // baseRate = 0.0128;
        }
    }
}