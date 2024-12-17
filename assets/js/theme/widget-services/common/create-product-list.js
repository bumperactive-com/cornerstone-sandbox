export default function createProductList() {
    var customProductTitles = ["Custom Square Stickers", "Custom Rectangle Stickers", "Custom Bumper Stickers", "Custom Circle Stickers", "Custom Oval Stickers", "Custom Rounded Rectangle Stickers", "Custom Shape Stickers", "Custom Sticker Sheets"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    var fullProductList = [];
    customProductTitles.forEach(product => {
        for(var j=0; j<numbers.length; j++) {
            var newValue = product + " " + numbers[j];
            fullProductList.push(newValue);
        }
    });
    return fullProductList;
}
