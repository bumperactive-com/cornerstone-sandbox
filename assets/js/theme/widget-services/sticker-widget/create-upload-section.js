export default function createUploadSection(uploadFile, stickerWidgetHTML) {
    uploadFile.style.display = "none";
    const customStickersHeading = document.querySelector('div[data-product-attribute="input-text"].form-field');
    customStickersHeading.appendChild(stickerWidgetHTML.imageDecision);
}
