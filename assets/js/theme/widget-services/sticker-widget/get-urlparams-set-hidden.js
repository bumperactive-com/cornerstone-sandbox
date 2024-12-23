export default function getURLParamsSetHidden(hiddenElements) {
    const url = new URL(document.location);
    const params = url.searchParams;
    
    // Get value of params
    const width = params.get("width");
    const height = params.get("height");
    const quantity = params.get("quantity");
    
    hiddenElements.hiddenWidth.value = width;
    hiddenElements.hiddenHeight.value = height;
    hiddenElements.hiddenQuantity.value = quantity;
}

