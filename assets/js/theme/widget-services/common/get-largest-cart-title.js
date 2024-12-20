 //Condensing titles of all the items that are currently in cart to get into proper format i.e. CustomSquareStickers 1 as opposed to Custom Square Stickers 1
 
 export default function getLargestCartTitle(condensedTitleList) {
    var titleListAllItems = condensedTitleList;
    const temp = {};
    titleListAllItems.forEach(item => {
    //splits each based on space -- i.e. CustomSquareSticker 1 would split to "CustomSquareSticker" and "1"
      const [name, value] = item.split(' ');
      //Sets the name keys in the object
      temp[name] = Math.max(value, temp[name] || 0);
    });
    return Object.entries(temp).map(item => `${item[0]} ${item[1]}`);
   //  console.log("productjs TitleList Biggest Numbers:",titleListBiggestNumbers);
}