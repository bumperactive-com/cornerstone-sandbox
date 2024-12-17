
export default function selectQuantityButtonsFromParams(hiddenElements) {
    const numberBox = document.getElementById("box3");
    const customQuantityForm = document.getElementById("customQuantityForm");     
    const quantity = new URL(document.location).searchParams.get("quantity");
    const arrayQuantityLabels = Array.from(document.getElementsByClassName("quantityLabel"));

    if ((window.location.href.includes("minimum") == false) && quantity !== null) {
    //Pulls size list directly from page and puts them into array
        var fullQuantityList = [];
        arrayQuantityLabels.forEach(label => {
            fullQuantityList.push(label.innerHTML);
        });
        
        arrayQuantityLabels.forEach(label => {
            if(label.innerHTML === quantity) {
                label.style.color = "#FF6161";
                label.previousSibling.checked = true;
            } else if (!fullQuantityList.includes(quantity) && (quantity !=="")) {
                numberBox.value = hiddenElements.hiddenQuantity.value;
                customQuantityForm.style.display = "block"; 
                arrayQuantityLabels[arrayQuantityLabels.length-1].style.color = "#FF6161";
                arrayQuantityLabels[arrayQuantityLabels.length-1].previousSibling.checked = true;
            }
        })
    } else {
        return null;
    }
}
