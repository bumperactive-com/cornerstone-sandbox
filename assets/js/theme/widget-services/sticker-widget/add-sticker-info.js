import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function addStickerInfo(html) {
    const productThumbnails = document.querySelector(SELECTORS.PRODUCT_THUMBNAILS);
    productThumbnails.insertAdjacentHTML('afterend', html);
}
