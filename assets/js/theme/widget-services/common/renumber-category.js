import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

//Function used in renumber-category.js. Removes number from title for Custom Products categories
    
export default function renumberCategory() {
    const categoryProdTitle = document.querySelectorAll(SELECTORS.CATEGORY_PRODUCT_TITLE);
      
    for (var i = 0; i < categoryProdTitle.length; i++) {
        if (categoryProdTitle[i].innerText.match(/custom/i)) {
            var removeNumber = categoryProdTitle[i].children[0].innerText.replace(/[0-9]/g, '');
            categoryProdTitle[i].children[0].innerText = removeNumber;
        }
    }
}