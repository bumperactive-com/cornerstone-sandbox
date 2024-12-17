export default function orderMinimumProductView() {
    var backToProduct = document.createElement("button");
    var nextButton3 = document.getElementById("nextButton3");
    var specsDiv = document.getElementById("radioSize");
    var uploadDiv = document.getElementById("Upload File");
    var addToCart = document.querySelector("#form-action-addToCart");
    var imageDecision1 = document.querySelector("#imageDecision1");
    var stickerFinishSection = document.querySelector("#stickerFinishSection");

    imageDecision1.style.display = "block";
    specsDiv.style.display = "none";
    uploadDiv.style.display = "none";
    addToCart.style.display = "none";
    nextButton2.style.display = "none";
    nextButton3.style.display = "block";

    backToProduct.style.display = "block";
    stickerFinishSection.style.display = "none";
}