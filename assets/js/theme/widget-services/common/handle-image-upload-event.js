//Event listener for when a file is uploaded to the image manager
export default function handleImageUploadEvent(ai, tiff, svg, psd, eps, bmp) {
    document.querySelector('.form-file').addEventListener('change', function(e) {
        console.log("handleimagee")
        //if there is a file iframe (used to show pdfs) already being displayed, remove it
        var nextButton3 = document.getElementById("nextButton3");
        var iframeExists = document.getElementById("iframe");
                if (iframeExists) {
                    iframeExists.remove();
                } 
  
        //when the image is loaded, files are in window object
        if (this.files) {
            var imageLabel = document.getElementById("imageFile");
            imageLabel.innerText = this.files[0].name;

            nextButton3.style.backgroundColor = "#00afb9";
            nextButton3.style.color = "#ffffff";

            const img = document.getElementById('myImg');
            //remove current image displayed if there is one 
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory.  Removes the previous url added from a createObjectURL method
            }

            //Finds the last "." in a file name.  Anything after this last . is the file extension i.e. jpg or
            const splitFile = this.files[0].name.split(".");
            //Gets the file extension of what was just uploaded by user
            const fileExtension = splitFile[splitFile.length-1];
            const fileExtensionsFillerImage = ["eps", "ai", "psd", "bmp", "svg", "tiff"];
            const displayUploadExtensions = ["jpg", "png", "jpeg", "gif"];
            //Loops through and filters out if the uploaded imge's extension matches that of one of the extensions in the fileExtensionsFillerImage array.
            const result = fileExtensionsFillerImage.filter(fileTypeName => fileExtension === fileTypeName);
            if (fileExtension == "pdf") {
                    img.src = "";
                    const blob = new Blob((this.files), {type: 'application/pdf'});
                    const url = URL.createObjectURL(blob);
                    //Checks if a pdf already displayed, if it does, it simpy replaces with the new pdf that the user uploads
                    const iframeExists = document.getElementById("iframe");
                    if (iframeExists) {
                        iframeExists.setAttribute('src',url);
                        iframeExists.setAttribute('href',url);
                    } else {
                        const iframe = document.createElement('iframe');
                        iframe.id = "iframe";
                        iframe.setAttribute('width', "100%");
                        iframe.setAttribute('height', 400);
                        iframe.setAttribute('src',url);
                        iframe.setAttribute('href',url);
                        img.after(iframe);
                    }
            //else if one of the display upload extensions
            } else if (displayUploadExtensions.includes(fileExtension)) {
                img.src = URL.createObjectURL(this.files[0]);
            } else if (fileExtensionsFillerImage.includes(fileExtension)) {
                // img.src = "https://via.placeholder.com/300x250.png?text=." + result[0] + "+file";
                if(fileExtension == "ai") {
                    img.src = ai;
                } else if(fileExtension == "psd") {
                    img.src = psd;
                } else if(fileExtension == "tiff") {
                    img.src = tiff;
                } else if(fileExtension == "svg") {
                    img.src = svg;
                } else if(fileExtension == "bmp") {
                    img.src = bmp;
                } else if(fileExtension == "eps") {
                    img.src = eps;
                }
                
            } else if (result !== ""){
                //Removes image and deletes file from input if it isn't an accepted file type
                img.src = "";
                nextButton3.style.backgroundColor = "#808080";
                nextButton3.style.color = "lightgray";
                const imageLabel = document.getElementById("imageFile");
                imageLabel.innerText = "";
                document.querySelectorAll('.form-file[type="file"]')[0].value = "";
         
                swal({
                    closeOnClickOutside: false,
                    text: "File type is not supported.  Please upload an accepted file type.",
                    button: "OK",
                });
            } else {
                nextButton3.style.backgroundColor = "black";
                nextButton3.style.color = "black";
                return null;
            }
            myImg.style.display = "block"; // set src to blob url
        }
    });
}