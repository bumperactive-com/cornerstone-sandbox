import getBaseUrl from '../common/get-base-url';
import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

//Have specs div and upload file div alternate being in view
//Sticker Finish and Union Label are built in BC prod options that we add styling to.
export default function nextAndBackBehavior(commonWidgetHTML, roundAttributeValue, roundToTwoDecimals, stickerWidgetHTML, addToCart, hiddenElements) {
    const specsDiv = document.querySelector(SELECTORS.SPECS_DIV);
    const radioProdOptions = document.querySelectorAll(SELECTORS.RADIO_PROD_OPTIONS);


    radioProdOptions.forEach(value => {
        if(value.innerText.includes("Union Label")) {
            value.id= 'unionLabelSection';
        } else if (value.innerText.includes("Sticker Finish")) {
            value.id = 'stickerFinishSection';
        }
    });
    
    const unionLabelSection = document.querySelector(SELECTORS.UNION_LABEL_SECTION);
    const stickerFinishSection = document.querySelector(SELECTORS.STICKER_FINISH_SECTION);
    unionLabelSection.style.display = "none";

 
    //Next Button 2 Functionality
    commonWidgetHTML.pageElements.nextButton2.onclick = function () { 
        const hiddenWidthInput = document.querySelectorAll('[data-product-attribute="input-number"]')[0].childNodes[3]; 
        const hiddenHeightInput = document.querySelectorAll('[data-product-attribute="input-number"]')[1].childNodes[3]; 
        const quoteLabel = document.querySelector(SELECTORS.QUOTE_LABEL);

        quoteLabel.style.display = "none";
        //Rounds the hidden values run when next button clicked
        roundAttributeValue('attribute_number_128', 2);
        roundAttributeValue('attribute_number_129', 2); 

        roundToTwoDecimals(hiddenWidthInput, hiddenHeightInput);
      
        
        function nextButton2SwalScenarios() {
            //Gets order minimum from local storage (this is set in base.html where it pulls directly from BC)
            var orderMin = localStorage.getItem("orderMinimum");
            var orderMinimum = +orderMin; //Converts string to number
            const stickerFinishInputs = document.querySelectorAll(SELECTORS.STICKER_FINISH_INPUTS);
            const pricePerSticker = document.querySelector(SELECTORS.PRICE_PER_STICKER);
            
            if (pricePerSticker.innerText !== "--") {
                var secondPart = (pricePerSticker.innerText.split('/')[0]);
                var onlyNumber = secondPart.split('$')[1];
            } else {
                onlyNumber = 0;
            }
        
        
            if ((hiddenElements.hiddenHeight.value > 0) && (hiddenElements.hiddenWidth.value > 0) && (hiddenElements.hiddenQuantity.value > 0) && (onlyNumber > orderMinimum) && (stickerFinishInputs[0].checked === true || stickerFinishInputs[1].checked === true)) {
                // showStepTwoSection();
                unionLabelSection.style.display = "none";
                specsDiv.style.display = "none";
                addToCart.style.display = "none";
                stickerWidgetHTML.imageDecision.style.display = "block";
                stickerFinishSection.style.display = "none";
                
                commonWidgetHTML.pageElements.nextButton2.style.display = "none";
                commonWidgetHTML.pageElements.nextButton3.style.display = "block";
                nextButtonText.innerText = "Add a Union Label? >>";
                commonWidgetHTML.pageElements.backButton2.style.display = "block";
                commonWidgetHTML.pageElements.backButton3.style.display = "none";
                
            } else if ((stickerFinishInputs[0].checked === false && stickerFinishInputs[1].checked === false)) {
                swal({
                    closeOnClickOutside: false,
                    text: "Please select a sticker finish.",
                    button: "OK",
                });
            } else if ((hiddenElements.hiddenHeight.value > 0) && (hiddenElements.hiddenWidth.value === "") && (hiddenElements.hiddenQuantity.value > 0)){
                swal({
                    closeOnClickOutside: false,
                    text: "Please enter a Width.",
                    button: "OK",
                });
            } else if ((hiddenElements.hiddenHeight.value === "") && (hiddenElements.hiddenWidth.value > 0) && (hiddenElements.hiddenQuantity.value > 0)) {
                swal({
                    closeOnClickOutside: false,
                    text: "Please enter a Height.",
                    button: "OK",
                });
            } else if ((hiddenElements.hiddenHeight.value > 0) && (hiddenElements.hiddenWidth.value > 0) && (hiddenElements.hiddenQuantity.value === "")) {
                swal({
                    closeOnClickOutside: false,
                    text: "Please enter a quantity.",
                    button: "OK",
                });
            } else if ((hiddenElements.hiddenHeight.value === "") && (hiddenElements.hiddenWidth.value === "") && (hiddenElements.hiddenQuantity.value > 0)) {
                swal({
                    closeOnClickOutside: false,
                    text: "Please choose a size",
                    button: "OK",
                });
            } else if ((hiddenElements.hiddenHeight.value === "") && (hiddenElements.hiddenWidth.value > 0) && (hiddenElements.hiddenQuantity.value === "")) {
                swal({
                    closeOnClickOutside: false,
                    text: "Please enter a height and quantity",
                    button: "OK",
                });
            } else if ((hiddenElements.hiddenHeight.value > 0) && (hiddenElements.hiddenWidth.value === "") && (hiddenElements.hiddenQuantity.value === "")) {
                swal({
                    closeOnClickOutside: false,
                    text: "Please enter a width and quantity",
                    button: "OK",
                });    
        
            } else if ((hiddenElements.hiddenHeight.value === "") && (hiddenElements.hiddenWidth.value === "") && (hiddenElements.hiddenQuantity.value === "")) {
                swal({
                    closeOnClickOutside: false,
                    text: "Please choose a size and quantity",
                    button: "OK",
                });
            } else if ((hiddenElements.hiddenHeight.value > 0) && (hiddenElements.hiddenWidth.value > 0) && (hiddenElements.hiddenQuantity.value  > 0) && (onlyNumber < orderMinimum)) {
                
                swal("The order minimum for custom stickers is $75.", {
                    closeOnClickOutside: false,
                    buttons: {
                      cancel: "I will increase size and/or quantity to reach $75 minimum.",
                      next: {
                        text: "That's ok, I will pay $75 for the current specs.",
                        allowOutsideClick: false
                      },
                    },
                  })
                  .then((value) => {
                    switch (value) { 
                      case "next": 
                        function next() {
                            var hiddenWidth = document.querySelectorAll('[data-product-attribute="input-number"]')[0].childNodes[3].value;
                            var hiddenHeight = document.querySelectorAll('[data-product-attribute="input-number"]')[1].childNodes[3].value;
                            var hiddenQuantity = document.querySelectorAll('[data-product-attribute="input-number"]')[2].childNodes[3].value; 
                            var url = window.location.href;
                            var newURL = url.replace(/[0-9]/g, '');
                            var fields = newURL.split('/');
                            
                            //Sticker Finish radio buttons
                            const finishRadioButtons = document.querySelectorAll(SELECTORS.STICKER_FINISH_RADIO_BUTTONS);
        
                           //Passes in sticker finish selection for the $75 product
                           if(finishRadioButtons[0].checked === true) {
                               var finish = "Glossy";
                           } else {
                               var finish = "Matte";
                           }
             
                           var urlWithNumber = url.split('/');
                           var titleList;
                           //The code below checks the storefront API if a $75 item is in cart aready.
                           fetch('/api/storefront/carts?include=lineItems.digitalItems.options,lineItems.physicalItems.options', {
                           credentials: 'include'
                           }).then(function(response) {
                           return response.json();
                           }).then(function(data) {
                               console.log(data);
                               if (data == "") {
                                    console.log("no items in cart");
                                    var maxSequenceNumber = 1;
                               } else {
                                var physicalItems = data[0].lineItems.physicalItems;
                                  titleList = [];
                                  for (var i = 0; i < physicalItems.length; i++) {
                                      titleList.push(physicalItems[i].name);
                                  }
        
                                    //Gets page title from the ID
                                    const pageTitle = document.querySelector("body").id;
                                    //Removes numbers from page title
                                    const pageTitleNoNumbers = pageTitle.replace(/\d+/g, '');
                                    
                                    //Filters $75 products with the same
                                    var exactProducts = titleList.filter(title => title.includes(pageTitleNoNumbers) && title.includes("Minimum"));
                                    console.log(exactProducts);
        
                                    if(exactProducts == "") {
                                        var maxSequenceNumber = 1;
                                    } else {
                                        var sequenceNumbers = [];
                                        exactProducts.forEach(product => {
                                            sequenceNumbers.push(product.replace(/\D/g, ""));
                                        });
                                        var maxSequenceNumber = Math.max(...sequenceNumbers) + 1;
                                    }
                               }
                                 
                            //Accounts for the if a url in the doesn't have a hyphenated number.  Sets the new URL to path i.e. custom-square-sticker
                            if (fields[3].charAt(fields[3].length-1) == "-") {
                                var newString = fields[3].substr(0, fields[3].length-1);
                              } else {
                                 var newString = fields[3];
                              }
                        
                        var siteURL = getBaseUrl();
              
                        window.location.href = `${siteURL}/${newString}-minimum-${maxSequenceNumber}/?width=${hiddenWidth}&height=${hiddenHeight}&quantity=${hiddenQuantity}&finish=${finish}&originalURL=${urlWithNumber[3]}`;
                        });
                     }
                        const thatsOkButton = document.querySelector(SELECTORS.THATS_OK_BUTTON);
                        thatsOkButton.addEventListener("click", next);
                        next();
                        break;
                      default:
                    }
                  });
        
            } else {
                return null;
            }
        }
        nextButton2SwalScenarios()

        

        //scrolls to top of page
        window.scrollTo(0, 0);
    }

    //Next Button 3 is defined in product.js

    //Back Button 2 functionality
    commonWidgetHTML.pageElements.backButton2.onclick = function () { ;

        const quoteLabel = document.querySelector(SELECTORS.QUOTE_LABEL);
        quoteLabel.style.display = "block";
        const nextButtonText = document.querySelector(SELECTORS.NEXT_BUTTON_TEXT);        
        nextButtonText.style.display = "block";
        specsDiv.style.display = "block";
        stickerWidgetHTML.imageDecision.style.display = "none";
        addToCart.style.display = "none";

        commonWidgetHTML.pageElements.backButton2.style.display = "none";
        commonWidgetHTML.pageElements.backButton3.style.display = "none";
        commonWidgetHTML.pageElements.nextButton2.style.display = "block";
        nextButtonText.innerText = "Upload Artwork >>";
        commonWidgetHTML.pageElements.nextButton3.style.display = "none";

        stickerWidgetHTML.imageDecision.style.display = "none";
        stickerFinishSection.style.display = "block";
        unionLabelSection.style.display = "none";
    }

    //Back Button 3 functionality
    commonWidgetHTML.pageElements.backButton3.onclick = function () { 
        specsDiv.style.display = "none";
        stickerWidgetHTML.imageDecision.style.display = "block";
        const imageDecision = document.querySelector(SELECTORS.IMAGE_DECISION_SECTION);
        imageDecision.style.display = "block";
        nextButtonText.style.display = "block";

        addToCart.style.display = "none";
        commonWidgetHTML.pageElements.backButton3.style.display = "none";
        commonWidgetHTML.pageElements.nextButton2.style.display = "none";
        commonWidgetHTML.pageElements.nextButton3.style.display = "block";
        nextButtonText.innerText = "Add a Union Label? >>";

        if (window.location.href.includes("minimum") == false) {
            commonWidgetHTML.pageElements.backButton2.style.display = "block";
        }
     
        stickerFinishSection.style.display = "none";
        unionLabelSection.style.display = "none";
    }
}