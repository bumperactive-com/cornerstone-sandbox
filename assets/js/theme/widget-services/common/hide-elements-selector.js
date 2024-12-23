// This function is used to hide width, height, sticker qty, tens of sqin as client facing interface does not need to display this.
// These fields are what accepts the data and transmits to BigCommerce

export default function hideElementsSelector(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.display = "none";
    });
}

