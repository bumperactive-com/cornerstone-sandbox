//num in this case is the value in discountPercentages
export default function calculateDiscountedPrice(num) {
    return (basePriceValue - (num * basePriceValue)).toFixed(2);
}  
