export default function defineAddToCartEventListener(addCartBtn) {
    const unionLabelSection = document.getElementById("unionLabelSection");
    //Add To Cart Button functionality.  Checked that a union label option was chosen
    addCartBtn.style.display = "none";

    addCartBtn.onclick = function () { 
        var unionSectionInputs = unionLabelSection.getElementsByTagName('input');
        var unionSectionInputsArray = Array.from(unionSectionInputs);

        if(unionSectionInputsArray[0].checked === true || unionSectionInputsArray[1].checked === true) {
    
        } else {
            event.preventDefault();
            
            swal({
                closeOnClickOutside: false,
                text: "Please select an option.",
                button: "OK",
                showCancelButton: true,
            })

        }
    }  
}