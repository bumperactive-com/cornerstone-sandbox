//Selects Finish and Union buttons from params
export default function selectUnionButtonFromParams() {
    var url = new URL(document.location);
    var params = url.searchParams;
    const unionLabelButtons = document.getElementById("unionLabelSection");
    const unionLabelBtn1 = unionLabelButtons.getElementsByClassName("form-radio")[0];
    const unionLabelBtn2 = unionLabelButtons.getElementsByClassName("form-radio")[1];
    const unionLabel = params.get("unionLabel");

    if (url.href.includes("unionLabel")) {
        if(unionLabel.includes("Yes")) {
            unionLabelBtn1.checked = true;
            unionLabelBtn2.checked = false;
        } else {
            unionLabelBtn2.checked = true;
            unionLabelBtn1.checked = false;
        }
    }
}
