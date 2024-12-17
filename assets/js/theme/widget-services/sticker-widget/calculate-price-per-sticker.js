//The function below calculates the sticker quote and is called whenever a size/radio button are both selected.  It takes into account -
//discounts (price breaks) Bumperactive offers when customer orders a certain number of tens of sq. inches of stickers.
// Consider re-using this function when customer edits product from cart page by taking in URL parameters
// Abstract tasks out by defining functions outside of this functions. You can define the functions at the bottom and call/execute them anywhere you want.

export default function calculatePricePerSticker(hiddenResultLimit, fullCustomPriceArray, hiddenElements) {
    const pricePerSticker = document.getElementById("pricePerSticker");
    for (var i = 0; i < hiddenResultLimit.length; i++) {
          //Here it is checking if the total sqin is less than the limits set by Bumperactive for pricing
        if (hiddenElements.hiddenResult.value <= hiddenResultLimit[i]) {
            pricePerSticker.innerText = "$" + (hiddenElements.hiddenQuantity.value * ((fullCustomPriceArray[i] * hiddenElements.hiddenResult.value) / (hiddenElements.hiddenQuantity.value))).toFixed(2) + " / " + "$" + ((fullCustomPriceArray[i] * hiddenElements.hiddenResult.value) / (hiddenElements.hiddenQuantity.value)).toFixed(2) + " Ea.";
            break;
        } else {
            pricePerSticker.innerText = "$" + (hiddenElements.hiddenQuantity.value * ((fullCustomPriceArray[i] * hiddenElements.hiddenResult.value) / (hiddenElements.hiddenQuantity.value))).toFixed(2) + " / " + "$" + ((fullCustomPriceArray[i] * hiddenElements.hiddenResult.value) / (hiddenElements.hiddenQuantity.value)).toFixed(2) + " Ea.";
        }
    }
}



