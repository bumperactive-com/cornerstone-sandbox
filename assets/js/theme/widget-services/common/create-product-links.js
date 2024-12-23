//Creates the URLs from the Full product list titles created in createProductList();

export default function createProductLinks(fullProductList) {
    let arrayLinks = fullProductList.map(function(product) {
        return (product.replace(/\s+/g, '-').toLowerCase())
    });
    return arrayLinks;
  //   console.log(arrayLinks);
}