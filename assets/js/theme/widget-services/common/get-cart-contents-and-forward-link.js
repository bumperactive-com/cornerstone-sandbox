       
//Forwards when you get onto a link to the correct one
export default function getCartContentsAndForwardLink(condenseCartItemTitles, getLargestCartTitle, createProductList, condenseFullProductListTitles, createProductLinks, findLinkIncreaseSeqValue, commonWidgetHTML) {
        var titleList = [];
        fetch('/api/storefront/cart', {
        credentials: 'include'
        }).then(function(response) {
        return response.json();
        }).then(function(data) {

          if (data.length > 0) {
            var physicalItems = data[0].lineItems.physicalItems;
            for (var i = 0; i < physicalItems.length; i++) {
              if(!physicalItems[i].name.includes("upcharge")) {
                  titleList.push(physicalItems[i].name);
              }
             } //End of fetch call
          }
          
            function changeLinksPerCartContent() {
                //Condensing titles of all items currently in cart (taken from the fetch request to storefront API above) to get into proper format i.e. CustomSquareStickers 1 as opposed to Custom Square Stickers 1.  The getLargestTitle(); function below 
                var condensedTitleList = condenseCartItemTitles(titleList);
                //Taking the condensed titles and numbers and showing only the largest values of each type.  Need the largest sequence value of each product as we will need to update links to the next sequence value for each product
                var titleListBiggestNumbers = getLargestCartTitle(condensedTitleList);
                //Dynamically create a full custom product list with each having 10 sequence variations
                var fullProductList = createProductList();
                //Condensing titles of all of the product titles created in createProductList(); 
                condenseFullProductListTitles(fullProductList);
                //Creates the URLs from the Full product list titles created in createProductList();
                createProductLinks(fullProductList);
                //Find biggest value in the 1-10 sequence for each type and loop through webpage links and increment depending on what is in cart.
                findLinkIncreaseSeqValue(titleListBiggestNumbers, commonWidgetHTML);
            }

            if (!window.location.href.includes("minimum")) {
                changeLinksPerCartContent();
          
            }
        });
}