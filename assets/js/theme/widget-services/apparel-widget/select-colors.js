//This function is used to select items from the swatch boxes
export default function selectColors(unisexColor, womensColor) {
    if(unisexColor !== "") {
        var unisexSwatchBoxes = Array.from((document.getElementById("swatchRowContainerUnisex")).children);
        unisexSwatchBoxes.forEach(swatch => {
          if (swatch.title == unisexColor) {
            swatch.click();
          }
        })
      }
    if(womensColor !== "") {
        var womensSwatchBoxes = Array.from((document.getElementById("swatchRowContainerWomens")).children);
        womensSwatchBoxes.forEach(swatch => {
          if (swatch.title == womensColor) {
            swatch.click();
          }
        })
    }
}