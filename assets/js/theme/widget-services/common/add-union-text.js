import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function addUnionText(unionLabel, addUnionSectionRadioFunctionality) {
    unionLabel.innerText = "We're a Union Print Shop!";
    const unionText = document.createElement("div");
    unionText.id = "unionText";
    unionText.innerHTML = `
        <p>We can add a small Union label to your sticker so everyone will know it was printed and shipped by workers earning a living wage with access to quality, affordable health care. Our design team will send a proof!</p>
        <label id="unionLink">Learn More</label>
        <div id="unionBorderBottom" style="display: block;"></div>
    `;
    unionLabel.after(unionText);

    const unionLink = document.querySelector(SELECTORS.UNION_LINK);
    const unionImage = document.querySelector(SELECTORS.UNION_IMAGE);

    unionLink.addEventListener("mouseenter", () => {
        unionImage.style.display = "block";
        unionImage.style.position = "relative";
    });

    unionLink.addEventListener("mouseleave", () => {
        unionImage.style.display = "none";
    });

    const unionBorder = document.querySelector(SELECTORS.UNION_BORDER_BOTTOM);
    unionBorder.appendChild(unionImage);
    addUnionSectionRadioFunctionality();
}