export default function addStickerInfo(html) {
    const productThumbnails = document.getElementsByClassName("productView-thumbnails")[0];
    productThumbnails.insertAdjacentHTML('afterend', html);
}
