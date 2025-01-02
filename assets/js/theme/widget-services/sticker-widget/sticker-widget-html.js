import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export var hiddenElements = {
    hiddenWidth: document.querySelectorAll('[data-product-attribute="input-number"]')[0]?.childNodes[3],
    hiddenHeight: document.querySelectorAll('[data-product-attribute="input-number"]')[1]?.childNodes[3],
    hiddenQuantity: document.querySelectorAll('[data-product-attribute="input-number"]')[2]?.childNodes[3],
    hiddenResult: document.querySelectorAll('[data-product-attribute="input-number"]')[3]?.childNodes[3]
}


export var innerStickerSection = 
    `<div id="innerStickerSection">
        <h1 class="matrixTitle">Sticker Pricing Matrix</h1>
        <p>Prices may vary slightly from the app calculator</p>
        <a href="https://www.bumperactive.com/bumperactive-contact">Contact us for a custom quote</a>
        <img class="matrixImage" src="https://cdn11.bigcommerce.com/s-1gqkiz2hyx/product_images/uploaded_images/stickermatrix.jpg?t=1637528650&_gl=1*1st86b8*_ga*MTY1NDExNjYyNy4xNjM2NjY5NTE2*_ga_WS2VZYPC6G*MTYzNzUyNTc3NC4zMS4xLjE2Mzc1Mjg2MzEuMjk." >
    </div>`;



export var stickerSpecs = 
`<div id="customProductsSpecs">
    <div id="innerStickerSpecs">
        <ul>
            <li>3 year outdoor vinyl</li>
            <li>Our design team will send a proof.</li>
            <li>Orders ship in 5 days from approval.</li>
            <li id="freeShipping">FREE shipping on all custom sticker orders!</li>
        </ul>              
        <h1 class="matrixTitle">~ Or ~</h1>
        <a href="https://www.bumperactive.com/bumperactive-contact">Contact us for a custom quote</a>
    </div>
</div>
`;



export var radioButtonContainer = document.createElement("div");
radioButtonContainer.id = "radioSize";
radioButtonContainer.innerHTML += `  
            <h1 class="sizeTitle">Sticker Size (inches)</h1>
            <div class = "formSection1">
                <form class="form" id="sizeButtons">

                </form>
           </div>


           <h1 class="quantityTitle">Sticker Quantity</h1>
           <div class = "formSection2">
         
                <form class="form" id="stickerButtons">
                </form>
        </div>
    `;




export var customSizeSection = document.createElement("div");
customSizeSection.id = "customBox1";
customSizeSection.innerHTML += `
     <div id="customSizeForm">
            <div class="customWidth">
                <th class="boxTitle1">Width</th>
                <input id="box1" type="text" />
            </div>
            <div class="customWidth">
            <th class="boxTitle1">Height</th>
            <input id="box2" type="text" />
            </div>
        <div class="minimumDiv">
            <p id="customSizeMinimum">Minimum side length: 2 in.</p>
        </div>
    </div>

<br><a id="size-chart-mobile">Custom Size</a>`;


export var customQuantitySection = document.createElement("div");
customQuantitySection.id = "customBox2";

customQuantitySection.innerHTML += `
    <div id="customQuantityForm">
        <div class="customQuantity">
            <th class="boxTitle">Sticker Quantity</th>
            <input id="box3" type="text" />
        </div>
    </div>
<br><a id="size-chart-mobile">Custom Quantity</a>`;


export var imageDecision = document.createElement('div');
imageDecision.id = 'imageDecision1';
imageDecision.style.display = "none";
imageDecision.innerHTML += `  
    <div id="imageDecision">
    <h1 class="uploadSectionLabel">Upload Artwork</h1>
        <div class="individualRadio">
            <input class="input" type="radio" name="upload">
            </input>
            
            <div class="radioLabelContainer">
                <p class="uploadLabel">
                    Upload now
                </p>
            </div>
                <br>
        </div>
        <div class="individualRadio">
            <input class="input" type="radio" name="upload">
            </input>
            <div class="radioLabelContainer">
                <p class="uploadLabel">
                    I'll send later via email
                </p>
            </div>
        </div>
        <div id="borderBottom">Bottom Bar</div>
        <br>

        <br><img id="myImg" src=""></img>

        <div class="uploadText" style="display:none;">
        <p id="imageFile"></p>
            <h1>20 MB Maximum file.</h1> <br>
            <h1>We accept .eps, .ai, .psd, .png, .jpg, .jpeg, .gif, .bmp, .svg, .tiff, .pdf.</h1>
        </div>

        <div class="uploadText" style="display:none;">
            <h1 id="sendLaterText">Great! Our design team will be in touch via the email address you provide in checkout.</h1>
        </div>
    </div>`;

