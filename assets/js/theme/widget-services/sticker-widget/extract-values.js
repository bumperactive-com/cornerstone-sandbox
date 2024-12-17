//Extracts values from jsContext productOptions

export default function extractValues(productOptions, display_name) {
    const filteredOptions = productOptions.filter(option => option.display_name === display_name);
    if (filteredOptions.length > 0) {
        return Array.from(filteredOptions[0].values).map(value => value.label);
    }
    return [];
}