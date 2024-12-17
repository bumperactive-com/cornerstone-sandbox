
export default function defineUploadEventListeners(uploadFile, addToCart, imageFile) {
    const firstUploadRadio = document.querySelector('.individualRadio:first-of-type .input');
    const secondUploadRadio = document.querySelector('.individualRadio:nth-of-type(2) .input');
    const uploadTexts = document.querySelectorAll('.uploadText');
    const individualRadios = document.querySelectorAll('.individualRadio');
    const borderBottom = document.getElementById('borderBottom');
    const nextButton3 = document.getElementById('nextButton3');
    
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
        document.querySelector('.form-file').value = '';
        const iframe = document.getElementById('iframe');
        if (iframe) {
            iframe.style.display = 'none';
        }
    });

    // Prevent default action if addToCart is hidden
    if (addToCart.style.display === 'none') {
        event.preventDefault();
    }
}
