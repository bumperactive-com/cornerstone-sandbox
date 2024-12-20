import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

//Hides by matching bg color the option label used to attach custom widget to page.  This title isn't needed on the page. 
export default function hideCustomOptionLabel(labelName1, labelName2) {  
    const productSection = document.querySelectorAll(SELECTORS.PRODUCT_SECTION);
    const optionLabels = document.querySelectorAll(SELECTORS.OPTION_LABELS);
    productSection[0].style.display = "none";
    Array.from(optionLabels).forEach(label => {
        if ((label.innerText.includes(labelName1)) || (label.innerText.includes(labelName2))) {
            label.style.color = "#fdfcdc";
            label.style.fontSize = "0px";
        }
    })
}
