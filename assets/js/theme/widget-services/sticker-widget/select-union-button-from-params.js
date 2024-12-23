import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

//Selects Finish and Union buttons from params
export default function selectUnionButtonFromParams() {
    var url = new URL(document.location);
    var params = url.searchParams;
    const unionLabelBtn1 = document.querySelector(SELECTORS.UNION_LABEL_RADIO_1);
    const unionLabelBtn2 = document.querySelector(SELECTORS.UNION_LABEL_RADIO_2);
    const unionLabel = params.get("unionLabel");

    if (url.href.includes("unionLabel")) {
        if(unionLabel.includes("Yes")) {
            unionLabelBtn1.checked = true;
            unionLabelBtn2.checked = false;
        } else {
            unionLabelBtn2.checked = true;
            unionLabelBtn1.checked = false;
        }
    }
}
