import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function addUnionSectionRadioFunctionality() {
    const unionSectionRadios = Array.from(document.querySelector(SELECTORS.UNION_LABEL_SECTION).querySelectorAll(SELECTORS.STICKER_FINISH_RADIOS));
    unionSectionRadios[0].checked = false;
    unionSectionRadios[1].checked = false;

    unionSectionRadios.forEach(radio => {            
        radio.addEventListener("click", function(){
            const addCartBtn = document.querySelector(SELECTORS.FORM_ACTION_ADD_TO_CART);
            addCartBtn.style.backgroundColor = "#00AFB9";
            addCartBtn.style.color = "#ffffff";
        });
    })
}
