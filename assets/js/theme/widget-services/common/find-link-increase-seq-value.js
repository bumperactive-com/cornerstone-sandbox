import swal from 'sweetalert';
import getBaseUrl from './get-base-url';

export default function findLinkIncreaseSeqValue(titleListBiggestNumbers, commonWidgetHTML) {
    var numberUrl = window.location.href.split('-');
    var sequenceValue = numberUrl[(numberUrl.length)-1].replace(/\D/g, "");
    var siteURL = getBaseUrl();

    //Gets the window url path (i.e. /custom-square-sticker-1/), removes slashes, removes number and last hyphen.  We will be comparing this to the items in the titleListBiggestNumbers to get a match for what product it is (i.e. custom-square-sticker)
    var windowURLSubstring = (window.location.pathname.replace(/\//g, '').replace(/[^-]+$/, t => t.replace(/\d/g, "")).slice(0, -1));

   //Converts the highest number of each type of product that has been added to cart into url format in order to compare with windowURLSubstring defined above
   var urlifyTitleList = titleListBiggestNumbers.map(x => x.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase());

 //Loops through urlifyTitleList
 for (var i=0; i<urlifyTitleList.length; i++) {

   //Compares just the product name url with the window url (i.e. custom-square-sticker comparing to custom-square-sticker) to see if they match.  If they match, then the code will check for the sequence numbers of each.  
      if(urlifyTitleList[i].replace(/[^-]+$/, t => t.replace(/\d/g, "")).slice(0, -1) == windowURLSubstring) {
       //    console.log("product type match with URL ==", urlifyTitleList[i]);

          //Get sequence value in series from window url i.e. 4 from "custom-square-sticker-4"
          var numberUrl = window.location.href.split('-');
          var sequenceValue = numberUrl[(numberUrl.length)-1].replace(/\D/g, "");
    
       //Get sequence value in series from urlifyTitleList which contains the largest sequence value in customer's cart of each product
          var splitURL = urlifyTitleList[i].split('-');
          var sequenceFromCart = splitURL[splitURL.length-1];
          console.log(sequenceFromCart);
         
          var incrementsequenceFromCart = parseInt(sequenceFromCart) + 1;

//gets title of product from body id
 const prodTitle = document.getElementsByTagName("body")[0].id.replace(/[0-9]/g, '');

       
           if (sequenceValue == 10 && sequenceFromCart == 10) {
               swal({ 
                   title: "Error!", 
                   text: "You can only add 10 of each product type. You have already added 10 " + prodTitle + " products.  If you would like to purchase more than 10, place an order and start a new cart.", 
                   type: "error", confirmButtonText: "Cool" 
                 }).then(function() {
                     // Redirect the user
                     window.location.href = "/";
                     console.log('The Ok Button was clicked.');
                 });
           } else if (sequenceValue == 10 && sequenceFromCart !== 10) {
               console.log("on the 10th product but 10th not added yet");
           } else if (sequenceValue <= sequenceFromCart && sequenceValue !== 10) {
                window.location.href = siteURL + "/" + windowURLSubstring + "-" + incrementsequenceFromCart + "/";
           } else if (sequenceFromCart == 10 && sequenceValue !== 10) {
               // swal("You can only add ten of each sticker shape to cart (You currently have 10 `${prodTitle}`) If you would like to add more than 10, you will need to place an order and then start a new checkout.  ");
           
                 swal({ 
                     title: "Error!", 
                     text: "You can only add 10 of each product type. You have already added 10 " + prodTitle + " products.  If you would like to purchase more than 10, place an order and start a new cart.", 
                     type: "error", confirmButtonText: "Cool" 
                   }).then(function() {
                       // Redirect the user
                       window.location.href = "/";
                       console.log('The Ok Button was clicked.');
                   });
           }
      } else {
       //    console.log("Nope");
      }
 }
}