
export default function alterCSSForProductImage(position, top) {

    const imageContainer = document.getElementsByClassName("productView-img-container")[0];
    const defaultImage = imageContainer.querySelectorAll(".productView-image--default")[0];


    if (position !== null) {
      defaultImage.style.position = position;
      defaultImage.id = position;
    }

    if (top !== null) {
      defaultImage.style.top = top;
    }
}