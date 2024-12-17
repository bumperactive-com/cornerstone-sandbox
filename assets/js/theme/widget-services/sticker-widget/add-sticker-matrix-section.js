export default function addStickerMatrixSection(html) {
    const footer = document.getElementsByClassName("footer")[0];
    var stickerPricingMatrix = document.createElement("div");
    stickerPricingMatrix.id = "stickerPricingMatrixSection";
    stickerPricingMatrix.innerHTML = `${html}`;
    footer.before(stickerPricingMatrix);
}