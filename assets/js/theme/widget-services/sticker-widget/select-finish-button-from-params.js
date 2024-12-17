export default function selectFinishButtonFromParams() {
    var url = new URL(document.location);
    var params = url.searchParams;
    const finishButtons = document.getElementById("stickerFinishSection");
    const finishBtn1 = finishButtons.getElementsByClassName("form-radio")[0];
    const finishBtn2 = finishButtons.getElementsByClassName("form-radio")[1];

    var finish = params.get("finish");

    if (finish === "Glossy") {
        finishBtn1.checked = true;
    } else if (finish === "Matte") {
        finishBtn2.checked = true;
    } else {
        finishBtn1.checked = true;
    }
}
