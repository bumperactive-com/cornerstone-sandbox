export default function roundAttributeValue(attributeId, decimalPlaces) {
    var newVal = parseFloat($('#' + attributeId).val(), 10).toFixed(decimalPlaces);
    $('#' + attributeId).val(newVal);
}
