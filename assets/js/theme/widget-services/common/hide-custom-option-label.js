
//Hides by matching bg color the option label used to attach custom widget to page.  This title isn't needed on the page. 

export default function hideCustomOptionLabel(labelName1, labelName2) {  
    const productSection = document.getElementsByClassName("productView-product");
    const optionLabels = document.getElementsByClassName("form-label--alternate form-label--inlineSmall");
    productSection[0].style.display = "none";
    Array.from(optionLabels).forEach(label => {
        if ((label.innerText.includes(labelName1)) || (label.innerText.includes(labelName2))) {
            label.style.color = "#fdfcdc";
            label.style.fontSize = "0px";
        }
    })
}
