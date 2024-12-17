export default function addInfoIcon() {
    var stickerSectionLabel = document.getElementById("stickerFinishSection").querySelectorAll(".form-label--inlineSmall")[0];
    const infoIcon = document.createElement("div");
    infoIcon.id = "infoIcon";
    stickerSectionLabel.appendChild(infoIcon);
    var stickerInfoImage = document.getElementById("stickerInfoImage");
    stickerSectionLabel.appendChild(stickerInfoImage);

    $('#infoIcon').hover(function () {
        stickerInfoImage.style.display = "block";
        stickerInfoImage.style.position = "absolute";

    }, function () {
        stickerInfoImage.style.display = "none";
    });

}