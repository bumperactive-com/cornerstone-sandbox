import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function selectFinishButtonFromParams() {
    var url = new URL(document.location);
    var params = url.searchParams;
    const finishButtons = document.querySelector(SELECTORS.STICKER_FINISH_SECTION);
    const finishBtn1 = finishButtons.querySelectorAll(SELECTORS.STICKER_FINISH_RADIOS)[0];
    const finishBtn2 = finishButtons.querySelectorAll(SELECTORS.STICKER_FINISH_RADIOS)[1];

    var finish = params.get("finish");

    if (finish === "Glossy") {
        finishBtn1.checked = true;
    } else if (finish === "Matte") {
        finishBtn2.checked = true;
    } else {
        finishBtn1.checked = true;
    }
}
