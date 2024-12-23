import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function addInfoIcon() {
    const stickerSectionLabel = document.querySelector(SELECTORS.STICKER_SECTION_LABEL_ID);
    const stickerInfoImage = document.querySelector(SELECTORS.STICKER_INFO_IMAGE_ID);
    
    const infoIcon = document.createElement("div");
    infoIcon.id = "infoIcon";
    stickerSectionLabel.appendChild(infoIcon);
    stickerSectionLabel.appendChild(stickerInfoImage);

    $('#infoIcon').hover(function () {
        stickerInfoImage.style.display = "block";
        stickerInfoImage.style.position = "absolute";

    }, function () {
        stickerInfoImage.style.display = "none";
    });

}