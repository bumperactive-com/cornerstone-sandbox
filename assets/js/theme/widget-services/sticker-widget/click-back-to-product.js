import getBaseUrl from '../common/get-base-url';

//This function runs when button on the $75 product is clicked
export default function clickBackToProduct(hiddenElements) {
    var hiddenWidth = hiddenElements.hiddenWidth.value;
    var hiddenHeight = hiddenElements.hiddenHeight.value;
    var hiddenQuantity = hiddenElements.hiddenQuantity.value;
    var siteURL = getBaseUrl();

    var url = new URL(document.location);
    var params = url.searchParams;
    var originalURL = params.get("originalURL");
    var stickerFinish = params.get("finish");

    window.location.href = `${siteURL}/${originalURL}/?width=${hiddenWidth}&height=${hiddenHeight}&quantity=${hiddenQuantity}&finish=${stickerFinish}`;
}