import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function createUploadSection(uploadFile, stickerWidgetHTML) {
    uploadFile.style.display = "none";
    const customStickersHeading = document.querySelector(SELECTORS.CUSTOM_STICKERS_HEADING);
    customStickersHeading.appendChild(stickerWidgetHTML.imageDecision);
}
