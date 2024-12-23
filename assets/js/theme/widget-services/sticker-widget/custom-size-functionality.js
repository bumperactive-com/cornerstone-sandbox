import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function customSizeFunctionality(hiddenElements, stickerFinishRadios, commonWidgetHTML) {
    const box1 = document.querySelector(SELECTORS.BOX1);
    const box2 = document.querySelector(SELECTORS.BOX2);
    const box3 = document.querySelector(SELECTORS.BOX3);
    const next2 = commonWidgetHTML.pageElements.nextButton2;

    function updateButtonState() {
        if (hiddenElements.hiddenQuantity.value > 0 && (stickerFinishRadios[0].checked || stickerFinishRadios[1].checked)) {
            if (box1.value >= 2 && box2.value >= 2 && box3.value !== "") {
                next2.style.backgroundColor = "#00afb9";
                next2.style.color = "#ffffff";
            } else {
                next2.style.backgroundColor = "#808080";
                next2.style.color = "lightgray";
            }
        }
    }

    function restrictDecimals(input) {
        const decimalIndex = input.indexOf('.');
        if (decimalIndex !== -1 && input.substring(decimalIndex + 1).length > 2) {
            return input.substring(0, decimalIndex + 3);
        }
        return input;
    }

    function updateBoxValue(box, value) {
        box.value = restrictDecimals(value);
        updateButtonState();
    }

    function clearBoxIfLessThanTwo(box) {
        if (box.value < 2) {
            box.value = "";
            updateButtonState();
        }
    }

    box1.addEventListener('input', function () {
        updateBoxValue(box1, box1.value);
    });

    box2.addEventListener('input', function () {
        updateBoxValue(box2, box2.value);
    });

    box3.addEventListener('input', function () {
        if (hiddenElements.hiddenQuantity.value > 0 && (stickerFinishRadios[0].checked || stickerFinishRadios[1].checked)) {
            if (box3.value !== "") {
                next2.style.backgroundColor = "#00afb9";
                next2.style.color = "#ffffff";
            } else {
                next2.style.backgroundColor = "#808080";
                next2.style.color = "lightgray";
            }
        }
    });

    // Add blur event listener to reset value if less than 2
    box1.addEventListener('blur', function () {
        clearBoxIfLessThanTwo(box1);
    });

    box2.addEventListener('blur', function () {
        clearBoxIfLessThanTwo(box2);
    });
}