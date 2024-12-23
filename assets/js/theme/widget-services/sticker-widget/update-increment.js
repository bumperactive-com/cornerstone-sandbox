
import SELECTORS from '../../product/widget-base-code/sticker-dom-selectors';

export default function updateIncrement(value) {
    var increment = document.querySelector("#qty\\[\\]");
    increment.value = value;
}


