export default function addUnionSectionRadioFunctionality() {
    const unionSectionRadios = Array.from(document.getElementById("unionLabelSection").querySelectorAll(".form-radio"));
    unionSectionRadios[0].checked = false;
    unionSectionRadios[1].checked = false;

    unionSectionRadios.forEach(radio => {            
        radio.addEventListener("click", function(){
            const addCartBtn = document.getElementById("form-action-addToCart");
            addCartBtn.style.backgroundColor = "#00AFB9";
            addCartBtn.style.color = "#ffffff";
        });
    })
}
