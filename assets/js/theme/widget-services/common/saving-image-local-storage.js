//checks for when the image has been loaded.  If there has been one loaded, it will run the code below.  
//sets the image to local storage when item has been added to cart
export default function savingImageToLocalStorage(getBase64Image, nextButton3display, commonWidgetHTML) {
    var uploadInput = document.getElementsByClassName("form-file");

    const img = document.getElementById('myImg');
    const nextButton3 = document.querySelector("#nextButton3");
    var iframeExists = document.getElementById("iframe");
    var uploadFile = document.querySelectorAll(".form-file[type=file]")[0];

    //Next Button 3 functionality
    nextButton3.onclick = function () { 
        const unionLabel = document.getElementById("unionLabelSection").getElementsByClassName("form-label--inlineSmall")[0];
        unionLabel.innerText = "We're a Union Print Shop";


        //Have specs div and upload file div alternate being in view
        const uploadNowButton = document.getElementsByClassName("individualRadio")[0].getElementsByClassName("input")[0];
        const sendLaterBtn = document.getElementsByClassName("individualRadio")[1].getElementsByClassName("input")[0];
        var key = document.querySelector('body').id;

        if (uploadNowButton.checked && img.src.includes("blob") || uploadInput[0].value !== "") {
            //When the third next button is clicked, the image is converted to base 64.  Then the local storage is set to be equal to "key" which is the name of the product. 
            const excludeFromLocalStorage = [".bmp", ".tiff", ".eps", ".psd", ".pdf", ".ai"];
            //filters out a file type if there is a match with the exclude section.  If no match, it'll save the image to local storage
            const result = excludeFromLocalStorage.filter(fileExtension => uploadFile.value.includes(fileExtension));
            console.log(img);
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
            var key = document.querySelector('body').id;
            localStorage.removeItem(`${key}`);
            nextButton3display(commonWidgetHTML);
        } else {
            console.log("Neither"); 

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