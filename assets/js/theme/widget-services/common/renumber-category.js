//Function used in renumber-category.js. Removes number from title for Custom Products categories
      
export default function renumberCategory() {
    var categoryProdTitle = document.getElementsByClassName("card-title");
      
    for (var i = 0; i < categoryProdTitle.length; i++) {
        if (categoryProdTitle[i].innerText.match(/custom/i)) {
            var removeNumber = categoryProdTitle[i].children[0].innerText.replace(/[0-9]/g, '');
            categoryProdTitle[i].children[0].innerText = removeNumber;
        }
    }
}