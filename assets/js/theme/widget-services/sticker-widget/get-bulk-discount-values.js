export default function bulkDiscountPercentages(bulkDiscountRates) {
    const bulkDiscountPercentages = [];
    for (var i in bulkDiscountRates) {
        bulkDiscountPercentages.push(bulkDiscountRates[i].discount.value);
    }
    return bulkDiscountPercentages;
}