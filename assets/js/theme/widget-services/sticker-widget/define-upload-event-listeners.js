import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function defineUploadEventListeners(uploadFile, addToCart, imageFile) {
    const firstUploadRadio = document.querySelector(SELECTORS.FIRST_UPLOAD_RADIO);
    const secondUploadRadio = document.querySelector(SELECTORS.SECOND_UPLOAD_RADIO);
    const uploadTexts = document.querySelectorAll(SELECTORS.UPLOAD_TEXTS);
    const individualRadios = document.querySelectorAll(SELECTORS.INDIVIDUAL_RADIOS);
    const borderBottom = document.querySelector(SELECTORS.BORDER_BOTTOM);
    const nextButton3 = document.querySelector(SELECTORS.NEXT_BUTTON_3);
    
    individualRadios[1].style.marginBottom = '0';
    
    firstUploadRadio.addEventListener('click', function() {
        nextButton3.style.backgroundColor = '#808080';
        nextButton3.style.color = 'lightgray';

        individualRadios[1].style.marginBottom = '0';
        borderBottom.style.display = 'block';
        uploadFile.style.display = 'block';
        borderBottom.after(uploadFile);
        myImg.style.display = 'block';
        myImg.src = '';
        imageFile.innerText = "";
        uploadTexts[0].style.display = 'block';
        uploadTexts[1].style.display = 'none';
    });

    secondUploadRadio.addEventListener('click', function() {
        nextButton3.style.backgroundColor = '#00afb9';
        nextButton3.style.color = '#ffffff';

        individualRadios[1].style.marginBottom = '0';
        borderBottom.style.display = 'block';
        uploadTexts[0].style.display = 'none';
        uploadTexts[1].style.display = 'block';
        uploadFile.style.display = 'none';
        myImg.style.display = 'none';
        document.querySelector(SELECTORS.FORM_FILE).value = '';
        const iframe = document.querySelector(SELECTORS.IFRAME);
        if (iframe) {
            iframe.style.display = 'none';
        }
    });

    // Prevent default action if addToCart is hidden
    if (addToCart.style.display === 'none') {
        event.preventDefault();
    }
}