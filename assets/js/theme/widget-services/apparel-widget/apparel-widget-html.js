
//========================================================================================================================================//
//===========================================================PRODUCT DETAILS APPAREL======================================================//
//========================================================================================================================================//

export var dtgProductSpecs = `
  <div id="innerStickerSpecs">
  <ul>
      <li>For orders of more than 50 shirts or any orders with non-standard custom requirements, <a href="https://www.bumperactive.com/direct-to-garment-printing">contact us for a quote!</a> </li>
      <li>Direct to garment printing is the perfect solution when you want custom t-shirts in low quantities. Ideal for birthday presents, baby showers, anniversaries, prototypes, and full color photograph designs.</li>
      <li>Our design team will follow up with a proof of your order after purchase.</li>
      <li>Orders ship in 5 business days from proof approval.</li>
  </ul>              
  <h1 class="matrixTitle">~ Or ~</h1>
  <a href="https://www.bumperactive.com/bumperactive-contact">Contact us for a custom quote</a>
  </div>
`;

//========================================================================================================================================//
//================================================================ICONS SECTION===========================================================//
//========================================================================================================================================//

export var finishIconHTML =  `<i class="fa-regular fa-square-check" style="color: #3079f8; visibility: hidden; margin-top: -20px; margin-bottom: 6px; margin-left: 92%; font-size: 25px;"></i>`;

//Hover
export var printLocationHTML = `<p class="hoverText">Select the location where you’d like your art to be printed. We offer front, back, left chest printing, or a mixture of those options for Direct-To-Garment printing. If you have other needs, please contact us directly!</p>`;
export var garmentTypeHTML = `<p class="hoverText"> <b>Standard:</b> 100% ring spun cotton everyday tee with classic look and fit. <br> <b>Premium:</b> 100% ring spun cotton high-quality tee that offers a smoother, softer, and lightweight feel.<br> <b>USA-made Premium:</b> Premium feel and quality, made in the USA.  Please note that only Unisex sizes are available for this type.</p>`;
export var garmentStyleHTML = `<p class="hoverText"> <b>Unisex:</b> Classic tee with looser, more relaxed fit. <br> <b>Women's:</b>  A slim-fit tee that is tighter and more form fitting with shorter sleeves. Sizes may run small.</p>`;
export var garmentColorSectionHTML = `<p class="hoverText"> Select the color of tee you’d like for your order.  Colors are approximate and may vary slightly from screen to physical tshirt color.</p>`;
export var sizeContainerSectionHTML = `<p class="hoverText">Enter the quantities of each garment size.  There are price breaks at order shirt totals of 1, 2, 3, 4, 5, 10, 20, 30, 40, 50 and upcharges for 2XL-4XL.</p>`;

//========================================================================================================================================//
//===========================================================IMAGE DECISION SECTION=======================================================//
//========================================================================================================================================//
export var stickerPricingMatrix = document.createElement("div");
stickerPricingMatrix.id = "stickerPricingMatrixSection";
stickerPricingMatrix.innerHTML = `
    <div id="innerStickerSection">
        <h1 class="matrixTitle">Direct-To-Garment Prices</h1>
        <p>Prices may vary slightly from the app calculator.  <br> Garment prices are included. No minimum order!</p>
        <a href="https://www.bumperactive.com/bumperactive-contact">Contact us for a custom quote</a>
        <img class="matrixImage" >
    </div>
`;

//Only one radio button in a group can be selected at the same time. Note: The radio group must have share the same name (the value of the name attribute) to be treated as a group
export var imageDecisionFront = document.createElement('div');
imageDecisionFront.id = 'imageDecisionFront';
imageDecisionFront.style.display = "none";
imageDecisionFront.innerHTML += `  
    <h1 class="uploadSectionLabel">Upload Front Artwork</h1>
        <div class="individualRadioFront1">
            <input class="inputFront" type="radio" name="uploadFront">
            </input>
            <div class="radioLabelContainer">
                <p class="uploadLabel">
                    Upload now
                </p>
            </div>
                <br>
        </div>
        <div class="individualRadioFront2">
            <input class="inputFront" type="radio" name="uploadFront">
            </input>
            <div class="radioLabelContainer">
                <p class="uploadLabel">
                    I'll send later via email
                </p>
            </div>
        </div>
        <div class="individualRadioFront3">
            <input class="inputFront" type="radio" name="uploadFront">
            </input>
            <div class="radioLabelContainer">
                <p class="uploadLabel">
                    I Need Design Help!
                </p>
            </div>
        </div>

        <div id="borderBottomFront">Bottom Bar</div>
        <br>

        <br><img id="myImgFront" src=""></img>

        <div class="uploadTextFront" style="display:none;">
        <p id="imageFile1"></p>
            <h1>20 MB Maximum file.</h1> <br>
            <h1>We accept .eps, .ai, .psd, .png, .jpg, .jpeg, .gif, .bmp, .svg, .tiff, .pdf.</h1>
        </div>

        <div class="uploadTextFront" style="display:none;">
            <h1 id="sendLaterTextFront">Great! Our design team will be in touch via the email address you provide in checkout.</h1>
        </div>

        
        <div class="uploadTextFront" style="display:none;">
            <h1 id="sendLaterTextFront">Excellent, we'll still get your order going! 
            <br>
            <br>
            Orders that require design assistance will ship within 5 business days of final art approval.
            <br>
            <br>
            Our design team will be in touch by the end of next business day via the email you provide in checkout.
        </div>
`;



    

export var imageDecisionBack = document.createElement('div');
imageDecisionBack.id = 'imageDecisionBack';
imageDecisionBack.style.display = "none";
imageDecisionBack.innerHTML += `  
    
    <h1 class="uploadSectionLabel">Upload Back Artwork</h1>
        <div class="individualRadioBack1">
            <input class="inputBack" type="radio" name="uploadBack">
            </input>
            <div class="radioLabelContainer">
                <p class="uploadLabel">
                    Upload now
                </p>
            </div>
                <br>
        </div>
        <div class="individualRadioBack2">
            <input class="inputBack" type="radio" name="uploadBack">
            </input>
            <div class="radioLabelContainer">
                <p class="uploadLabel">
                    I'll send later via email
                </p>
            </div>
        </div>
        <div class="individualRadioBack3">
            <input class="inputBack" type="radio" name="uploadBack">
            </input>
            <div class="radioLabelContainer">
                <p class="uploadLabel">
                    I Need Design Help!
                </p>
            </div>
        </div>

        <div id="borderBottomBack">Bottom Bar</div>
        <br>

        <br><img id="myImgBack" src=""></img>

        <div class="uploadTextBack" style="display:none;">
        <p id="imageFile2"></p>
            <h1>20 MB Maximum file.</h1> <br>
            <h1>We accept .eps, .ai, .psd, .png, .jpg, .jpeg, .gif, .bmp, .svg, .tiff, .pdf.</h1>
        </div>

        <div class="uploadTextBack" style="display:none;">
            <h1 id="sendLaterTextBack">Great! Our design team will be in touch via the email address you provide in checkout.</h1>
        </div>

        <div class="uploadTextBack" style="display:none;">
            <h1 id="sendLaterTextFront">Excellent, we'll still get your order going! 
            <br><br>
            Orders that require design assistance will ship within 5 business days of final art approval.
            <br><br>
            Our design team will be in touch by the end of next business day via the email you provide in checkout.
        </div>

    `;



//========================================================================================================================================//
//==========================================================BOTTOM QUOTE BAR SECTION======================================================//
//========================================================================================================================================//

export var totalShirts = document.createElement('div');
totalShirts.id = 'totalShirts';
totalShirts.style.display = "none";
totalShirts.innerHTML += `  
<div class="apparelQuoteCloseIcon"></div>

    <div class="outerTotalShirts">
        <div class = "innerTotalShirtsLeft">
            <div class="leftInnerTotalShirts">
                <h1>Total Shirts:</h1>
            </div>
            <div class="rightInnerTotalShirts">
                <h1 id="totalNumberText">0</h1>
            </div>
        </div>

        <div class= "innerTotalShirtsRight">
            <div class="leftInnerTotalShirts">
                <h1>Estimated Cost:</h1>
            </div>
            <div class="rightInnerTotalShirts">
                <h1 id="totalCost">--</h1>
            </div>
        </div>
    </div>
    `;



    
//========================================================================================================================================//
//=============================================================SIZE QUANTITY SECTION======================================================//
//========================================================================================================================================//

export var sizesSection = document.createElement('div');
sizesSection.id = 'sizesSection';
sizesSection.style.display = "none";
sizesSection.innerHTML += `  
    <label class="form-label form-label--alternate form-label--inlineSmall">
        Sizes and Quantities
    </label>
`;


export var sizeContainer = document.createElement('div');
sizeContainer.id = "sizeContainer";
sizeContainer.innerHTML = `

  <label class="form-label form-label--alternate form-label--inlineSmall" >
    <div class="apparelInfoIcon"></div>
    Sizes and Quantities
  </label>


  <div class="sizeColumnTitle" id="unisexSizeTitle"><p>Unisex Sizes</p></div>

  <div class="unisexValues">
    <div class="sizeRow">
      <p>XS</p>
      <input class="form-input" type="number" oninput="this.value = 
      !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">
    </div>
    <div class="sizeRow">
      <p>S</p>
      <input class="form-input" type="number" oninput="this.value = 
      !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">
    </div>
    <div class="sizeRow">
      <p>M</p>
      <input class="form-input" type="number" oninput="this.value = 
      !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">
    </div>
    <div class="sizeRow">
      <p>L</p>
      <input class="form-input" type="number" oninput="this.value = 
      !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">
    </div>
    <div class="sizeRow">
      <p>XL</p>
      <input class="form-input" type="number" oninput="this.value = 
      !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">
    </div>
    <div class="sizeRow">
      <p>2XL</p>
      <input class="form-input" type="number" oninput="this.value = 
      !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">  
    </div>
    <div class="sizeRow">
      <p>3XL</p>
      <input class="form-input" type="number" oninput="this.value = 
      !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">
    </div>
    <div class="sizeRow">
      <p>4XL</p>
      <input class="form-input" type="number" oninput="this.value = 
      !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">
    </div>
  </div>


  <div class="sizeColumnTitle" id="womensSizeTitle"><p>Women's Sizes</p></div> 
  <div class="womensValues">
  
  <div class="sizeRow">
    <p>XS</p>
    <input class="form-input" type="number" oninput="this.value = 
    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">
  </div>
  <div class="sizeRow">
    <p>S</p>
    <input class="form-input" type="number" oninput="this.value = 
    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">
  </div>
  <div class="sizeRow">
    <p>M</p>
    <input class="form-input" type="number" oninput="this.value = 
    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">
  </div>
  <div class="sizeRow">
    <p>L</p>
    <input class="form-input" type="number" oninput="this.value = 
    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">
  </div>
  <div class="sizeRow">
    <p>XL</p>
    <input class="form-input" type="number" oninput="this.value = 
    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">
  </div>
  <div class="sizeRow">
    <p>2XL</p>
    <input class="form-input" type="number" oninput="this.value = 
    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" min="0">  
  </div>
</div>
`;


//========================================================================================================================================//
//===========================================================SWATCH EXPORT FUNCTIONS======================================================//
//========================================================================================================================================//

export var swatchContainer = document.createElement('div');
swatchContainer.className = "swatchContainer"; swatchContainer.id = "apparelDropdown";
swatchContainer.innerHTML = `
  <label class="form-label form-label--alternate form-label--inlineSmall" for="attribute_select_2208">Garment Color:<div class="apparelInfoIcon"></div></label>
  <p class="specInstructions" style="margin-bottom: 10px">Please choose a garment type and garment style to view garment color offerings.</p>
  <div class="swatchRow" style="display: none; flex-direction: row; flex-wrap: wrap; width: 90%; margin: auto; margin-bottom: 10px;"></div>
`

export var swatchRowContainerUnisex = document.createElement("div"); 
swatchRowContainerUnisex.id = "swatchRowContainerUnisex"; swatchRowContainerUnisex.className = "swatchRowContainer";

export var swatchRowContainerWomens = document.createElement("div"); 
swatchRowContainerWomens.id = "swatchRowContainerWomens"; swatchRowContainerWomens.className = "swatchRowContainer";


export var swatchRowContainerUnisexTitle = document.createElement("div"); swatchRowContainerUnisexTitle.className = "swatchRowContainerTitle";
swatchRowContainerUnisexTitle.innerHTML = `
<div class="colorBoxTitle">
  <p class="colorBoxStyleTitle">Selected Unisex Color:</p>

  <div class="colorSelectedBox"><p id="unisexSelectedColor">None</p></div>
</div>`;

export var swatchRowContainerWomensTitle = document.createElement("div"); swatchRowContainerWomensTitle.className = "swatchRowContainerTitle";
swatchRowContainerWomensTitle.innerHTML = `<div class="colorBoxTitle">
<p class="colorBoxStyleTitle">Selected Women's Color:</p>
  <div class="colorSelectedBox"><p id="womensSelectedColor">None</p></div>
</div>`




//========================================================================================================================================//
//===============================================================UNION LABEL SECTION======================================================//
//========================================================================================================================================//
export var unionText = document.createElement("div");
unionText.id = "unionText"
unionText.innerHTML= `
  <p>We can add a small Union label to your sticker so everyone will know it was printed and shipped by workers earning a living wage with access to quality, affordable health care. Our design team will send a proof!</p>
  <label id="unionLink">Learn More</label>
  <div id="unionBorderBottom" style="display: block;"></div>
`;