import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function addStickerMatrixSection(html) {
    const footer = document.querySelector(SELECTORS.FOOTER);
    var stickerPricingMatrix = document.createElement("div");
    stickerPricingMatrix.id = "stickerPricingMatrixSection";
    stickerPricingMatrix.innerHTML = `${html}`;
    footer.before(stickerPricingMatrix);
}