
//As of 2021, Bumperactive's custom sticker order minimum is $75.  This code runs whenever a $75 product is navigated to.

export default function orderMinimumProductBehavior(clickBackToProduct, updateIncrement, orderMinimumProductView, hiddenElements) {
    if (window.location.href.includes("minimum")) {
        var backToProduct = document.createElement("button");
        var uploadContainer = document.getElementsByClassName("productView-details")[0];
        var url = new URL(document.location);
        var params = url.searchParams;
    
        backToProduct.id = "backTo";
        backToProduct.innerText ="<- Go back to edit size, quantity, & sticker finish."
        
        backToProduct.addEventListener("click", function() {
            clickBackToProduct(hiddenElements);
        });

        uploadContainer.append(backToProduct);

        var width = params.get("quantity");
        
        hiddenElements.hiddenQuantity.value = width;
        updateIncrement(1)
        orderMinimumProductView();
    }
}
       