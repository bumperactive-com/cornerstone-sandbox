import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

//Checks for when the image has been loaded.  If there has been one loaded, it will run the code below.  
//Sets the image to local storage when item has been added to cart
export default function savingImageToLocalStorage(getBase64Image, nextButton3display, commonWidgetHTML) {
    const uploadInput = document.querySelectorAll(SELECTORS.FORM_FILE);
    const img = document.querySelector(SELECTORS.MY_IMG);
    const nextButton3 = document.querySelector(SELECTORS.NEXT_BUTTON_3); // get nextButton3 element
    const iframeExists = document.querySelector(SELECTORS.IFRAME); 
    const uploadFile = document.querySelector(SELECTORS.FILE_INPUT);

    //Next Button 3 functionality
    nextButton3.onclick = function () { 
        const unionLabel = document.querySelector(SELECTORS.UNION_LABEL_SECTION).querySelector(SELECTORS.OPTION_LABELS); 
        unionLabel.innerText = "We're a Union Print Shop";


        //Have specs div and upload file div alternate being in view
        const uploadNowButton = document.querySelectorAll(SELECTORS.INDIVIDUAL_RADIOS)[0].querySelector(SELECTORS.INPUT);
        const sendLaterBtn = document.querySelectorAll(SELECTORS.INDIVIDUAL_RADIOS)[1].querySelector(SELECTORS.INPUT);
        const key = document.querySelector(SELECTORS.BODY).id;

        if (uploadNowButton.checked && img.src.includes("blob") || uploadInput[0].value !== "") {
            //When the third next button is clicked, the image is converted to base 64.  Then the local storage is set to be equal to "key" which is the name of the product. 
            const excludeFromLocalStorage = [".bmp", ".tiff", ".eps", ".psd", ".pdf", ".ai"];
            //filters out a file type if there is a match with the exclude section.  If no match, it'll save the image to local storage
            const result = excludeFromLocalStorage.filter(fileExtension => uploadFile.value.includes(fileExtension));
            if(result=="") {
                console.log("Saving image to local storage");
                const imgData = getBase64Image(img);
                localStorage.setItem(`${key}`, imgData);
            } else {
                console.log("Not saving to local host");
            }
            nextButton3display(commonWidgetHTML);
        } else if (uploadNowButton.checked && !img.src.includes("blob") && !iframeExists) {
            swal({
                closeOnClickOutside: false,
                text: "Please upload an image.",
                button: "OK",
            });
        } else if (sendLaterBtn.checked) {
            //Removes any local storage item that may be leftover from one that was deleted from cart
            localStorage.removeItem(`${key}`);
            nextButton3display(commonWidgetHTML);
        } else { 
            swal({
                closeOnClickOutside: false,
                text: "Please choose an option",
                button: "OK",
            });
        } 
        //scrolls to top of page
        window.scrollTo(0, 0);
    }
}