export default function addUnionText(unionLabel, addUnionSectionRadioFunctionality) {
    unionLabel.innerText = "We're a Union Print Shop!";

    var unionText = document.createElement("div");
    unionText.id = "unionText"
    unionText.innerHTML= `<p>We can add a small Union label to your sticker so everyone will know it was printed and shipped by workers earning a living wage with access to quality, affordable health care. Our design team will send a proof!</p>
        <label id="unionLink">Learn More</label>
        <div id="unionBorderBottom" style="display: block;"></div>
    `;
    unionLabel.after(unionText);

    const unionBorder = document.querySelector("#unionLink");

    var unionText = document.createElement("div");
    unionLabel.appendChild(unionText);
    const unionImage = document.getElementById("unionImage")

    unionBorder.appendChild(unionImage);
    addUnionSectionRadioFunctionality();


    $('#unionLink').hover(function () {
        unionImage.style.display = "block";
        unionImage.style.position = "absolute";
    }, function () {
        unionImage.style.display = "none";
    });
}