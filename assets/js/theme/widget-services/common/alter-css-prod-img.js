import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function alterCSSForProductImage(position, top) {
  const imageContainer = document.querySelector(SELECTORS.PRODUCT_IMAGE_CONTAINER);
  const defaultImage = imageContainer.querySelector(SELECTORS.PRODUCT_IMAGE_DEFAULT);

    if (position !== null) {
      defaultImage.style.position = position;
      defaultImage.id = position;
    }

    if (top !== null) {
      defaultImage.style.top = top;
    }
}