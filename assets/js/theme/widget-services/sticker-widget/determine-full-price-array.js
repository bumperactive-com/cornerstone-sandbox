export default function determineFullPriceArray(basePriceValue, discountPercentages, calculateDiscountedPrice) {
    //Creates newArray of pricing per sqin limits taking into account product base price (pulled from BigCommerce and discounts)
    //num in this case is the value in discountPercentages
    function calculateDiscountedPrice(num) {
        return (basePriceValue - (num * basePriceValue)).toFixed(2);
    }  
    return discountPercentages.map(calculateDiscountedPrice);
}