//Converts image to Base64 (string format that takes up less space since localstorage is limited)

export default function getBase64Image(img) {
    //The HTML5 <canvas> tag is used to draw graphics, on the fly, with JavaScript.
    var canvas = document.createElement("canvas");
    //sets the canvas width and height to that of the image
    canvas.width = img.width;
    canvas.height = img.height;

    //method returns a drawing context on the canvas
    var ctx = canvas.getContext("2d");
    //"drawing" the image onto the canvas
    ctx.drawImage(img, 0, 0, img.width, img.height);
    //.toDataUrl method returns a data URI containing a representation of the image in the format specified by the type parameter  
    var dataURL = canvas.toDataURL("image/png");
    
    //The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

