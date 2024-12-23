//Condensing titles of all of the product titles created in createProductList();
export default function condenseFullProductListTitles(fullProductList) {
    let condensedFullProductList = fullProductList.map(title => {
        const fullProdSplit = title.split(' ');
            if(fullProdSplit.length === 4) {
                return (fullProdSplit[0] + fullProdSplit[1] + fullProdSplit[2] + " " + fullProdSplit[3]);
            } else if (fullProdSplit.length === 5) {
                return (fullProdSplit[0] + fullProdSplit[1] + fullProdSplit[2] + fullProdSplit[3] + " " + fullProdSplit[4]);
            }
        });
    return condensedFullProductList;
}