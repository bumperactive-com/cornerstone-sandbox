import * as commonWidgetHTML from '../../widget-services/common/common-widget-html';
import * as stickerWidgetHTML from '../../widget-services/sticker-widget/sticker-widget-html';
import SELECTORS from './sticker-dom-selectors';

import ai from '../../../../img/fillerai.jpg';
import tiff from '../../../../img/fillertiff.jpg';
import svg from '../../../../img/fillersvg.jpg';
import psd from '../../../../img/fillerpsd.jpg';
import eps from '../../../../img/fillereps.jpg';
import bmp from '../../../../img/fillerbmp.jpg';

import alterCSSForProductImage from '../../widget-services/common/alter-css-prod-img';
import hideCustomOptionLabel from '../../widget-services/common/hide-custom-option-label';
import addStickerMatrixSection from '../../widget-services/sticker-widget/add-sticker-matrix-section';
import addStickerInfo from '../../widget-services/sticker-widget/add-sticker-info';
import hideElementsById from '../../widget-services/common/hide-elements-by-id';
import hideElementsBySelectorPosition from '../../widget-services/common/hide-elements-by-selector-position';
import afterElements from '../../widget-services/common/after-elements';
import appendElements from '../../widget-services/common/append-elements';
import createDefaultQuoteMessage from '../../widget-services/sticker-widget/create-default-quote-message';
import hideElementsSelector from '../../widget-services/common/hide-elements-selector';
import appendWidgetComponents from '../../widget-services/sticker-widget/append-widget-components';
import createRadioButtons from '../../widget-services/sticker-widget/create-radio-buttons';
import extractValues from '../../widget-services/sticker-widget/extract-values';
import createCustomButton from '../../widget-services/sticker-widget/create-custom-button';
import initializeProductOptions from '../../widget-services/sticker-widget/initialize-product-options';
import convertToDecimal from  '../../widget-services/common/convert-to-decimal';
import extractPropertyFromObjects from '../../widget-services/common/extract-property-from-objects';
import getBulkDiscountValues from '../../widget-services/sticker-widget/get-bulk-discount-values';
import calculateDiscountedPrice from '../../widget-services/sticker-widget/calculate-discounted-price';
import determineFullPriceArray from '../../widget-services/sticker-widget/determine-full-price-array';
import determinePriceParameters from '../../widget-services/sticker-widget/determine-price-parameters';
import calculatePricePerSticker from '../../widget-services/sticker-widget/calculate-price-per-sticker';
import addUnionSectionRadioFunctionality from '../../widget-services/common/add-union-section-radio-functionality';
import addUnionText from '../../widget-services/common/add-union-text';
import setValueEmpty from '../../widget-services/common/set-value-empty';
import setTwoValuesEmpty from '../../widget-services/common/set-two-values-empty';
import roundAttributeValue from '../../widget-services/common/round-attribute-value';
import createUploadSection from '../../widget-services/sticker-widget/create-upload-section';
import defineUploadEventListeners from '../../widget-services/sticker-widget/define-upload-event-listeners';
import defineAddToCartEventListener from '../../widget-services/sticker-widget/define-add-to-cart-event-listener';
import toggleCustomSection from '../../widget-services/sticker-widget/toggle-custom-section';
import customSize from '../../widget-services/sticker-widget/custom-size';
import customQuantity from '../../widget-services/sticker-widget/custom-quantity';
import updateIncrement from '../../widget-services/sticker-widget/update-increment';
import checkAndSetHiddenValuesToZero from '../../widget-services/sticker-widget/check-and-set-hidden-values-to-zero';
import changeElementColor from '../../widget-services/common/change-element-color';
import roundToTwoDecimals from '../../widget-services/common/round-to-two-decimals';
import parseAndSetDimensions from '../../widget-services/sticker-widget/parse-and-set-dimensions';
import checkValuesAndCalculateQuote from  '../../widget-services/sticker-widget/check-values-and-calculate-quote';
import changeColorButton1 from  '../../widget-services/sticker-widget/change-color-button1';
import changeColorButton2 from  '../../widget-services/sticker-widget/change-color-button2';
import changeColorButton3 from  '../../widget-services/sticker-widget/change-color-button3';
import changeColorButton4 from  '../../widget-services/sticker-widget/change-color-button4';
import changeColorButton5 from  '../../widget-services/sticker-widget/change-color-button5';
import customSizeFunctionality from '../../widget-services/sticker-widget/custom-size-functionality';
import setLabelColors from '../../widget-services/sticker-widget/set-label-colors';
import addInfoIcon from '../../widget-services/sticker-widget/add-info-icon';
import getURLParamsSetHidden from '../../widget-services/sticker-widget/get-urlparams-set-hidden';
import deselectFinishAndUnionBtns from '../../widget-services/sticker-widget/deselect-finish-and-union-btns';
import clickBackToProduct from '../../widget-services/sticker-widget/click-back-to-product';
import orderMinimumProductBehavior from '../../widget-services/sticker-widget/order-minimum-product-behavior';
import handlePageLoadQuote from '../../widget-services/sticker-widget/handle-page-load-quote';
import selectUnionButtonFromParams from '../../widget-services/sticker-widget/select-union-button-from-params';
import selectFinishButtonFromParams from '../../widget-services/sticker-widget/select-finish-button-from-params';
import selectSizeButtonsFromParams from '../../widget-services/sticker-widget/select-size-buttons-from-params';
import selectQuantityButtonsFromParams from '../../widget-services/sticker-widget/select-quantity-buttons-from-params';
import nextButton3display from '../../widget-services/sticker-widget/next-button3-display';
import getBase64Image from '../../widget-services/common/get-base-64-image';
import condenseCartItemTitles from '../../widget-services/common/condense-cart-item-titles';
import getLargestCartTitle from '../../widget-services/common/get-largest-cart-title';
import createProductList from '../../widget-services/common/create-product-list';
import condenseFullProductListTitles from '../../widget-services/common/condense-full-product-list-titles';
import createProductLinks from '../../widget-services/common/create-product-links';
import findLinkIncreaseSeqValue from '../../widget-services/common/find-link-increase-seq-value';
import getCartContentsAndForwardLink from '../../widget-services/common/get-cart-contents-and-forward-link';
import orderMinimumProductView from '../../widget-services/sticker-widget/order-minimum-product-view';
import handleImageUploadEvent from '../../widget-services/common/handle-image-upload-event';
import savingImageToLocalStorage from '../../widget-services/common/saving-image-local-storage';
import initializeStickerWidget from '../../widget-services/sticker-widget/initialize-sticker-widget';
import nextAndBackBehavior from '../../widget-services/sticker-widget/next-and-back-behavior';
import radioButtonEvents from '../../widget-services/sticker-widget/radio-button-events';


export default function customDetailsSticker() {
    const hiddenElements = stickerWidgetHTML.hiddenElements;
    const uploadFile = document.querySelector(SELECTORS.UPLOAD_FILE_SECTION);
    console.log("yoo", uploadFile);
    const addToCart = document.querySelector(SELECTORS.FORM_ACTION_ADD_TO_CART);

    initializeStickerWidget();
  
    alterCSSForProductImage("absolute", "0rem");
    
    hideCustomOptionLabel("CUSTOM STICKERS", "Custom Stickers");

    addStickerMatrixSection(stickerWidgetHTML.innerStickerSection);

    addStickerInfo(stickerWidgetHTML.stickerSpecs);

    hideElementsById(["backButton4", "nextButton3", "nextButton4", "nextButton5", "nextButton6"]);

    hideElementsBySelectorPosition([".form-input--small[type=text], 0"]);

    appendWidgetComponents(hideElementsSelector, appendElements, afterElements, createDefaultQuoteMessage);

    //Inputs values and labels for the Sizes and Quantity radio buttons by pulling the product options directly from back-end of BC
    initializeProductOptions(jsContext, extractValues, createRadioButtons, createCustomButton);

    const result = determinePriceParameters(jsContext, getBulkDiscountValues, convertToDecimal, extractPropertyFromObjects, determineFullPriceArray, calculateDiscountedPrice); // Call determinePriceParameters to get required variables
    const hiddenResultLimit = result.hiddenResultLimit;
    const fullCustomPriceArray = result.fullCustomPriceArray;

    nextAndBackBehavior(commonWidgetHTML, roundAttributeValue, roundToTwoDecimals, stickerWidgetHTML, addToCart, hiddenElements);
    
    const stickerFinishRadios = Array.from(document.querySelector(SELECTORS.STICKER_FINISH_SECTION).querySelectorAll(SELECTORS.STICKER_FINISH_RADIOS));

    radioButtonEvents(updateIncrement, fullCustomPriceArray, hiddenResultLimit, hiddenElements, stickerWidgetHTML, calculatePricePerSticker, setValueEmpty, setTwoValuesEmpty,toggleCustomSection, customSize, customQuantity, checkAndSetHiddenValuesToZero, changeElementColor, parseAndSetDimensions, checkValuesAndCalculateQuote,changeColorButton1, changeColorButton2, changeColorButton3, changeColorButton4, changeColorButton5, setLabelColors, stickerFinishRadios, roundToTwoDecimals);
    
    createUploadSection(uploadFile, stickerWidgetHTML);
    
    defineUploadEventListeners(uploadFile, addToCart, imageFile);   
    
    defineAddToCartEventListener(addToCart);

    const unionLabel = document.querySelector(SELECTORS.UNION_LABEL_SECTION).querySelector(SELECTORS.UNION_LABEL_INLINE_SMALL);

    customSizeFunctionality(hiddenElements, stickerFinishRadios, commonWidgetHTML);
    
    addUnionText(unionLabel, addUnionSectionRadioFunctionality);
   
    addInfoIcon();
  
    const orderMinimum = localStorage.getItem("orderMinimum");
        
    getURLParamsSetHidden(hiddenElements);
    
    selectSizeButtonsFromParams(hiddenElements); 
    
    selectQuantityButtonsFromParams(hiddenElements);
    
    updateIncrement(hiddenElements.hiddenResult.value);
    
    selectFinishButtonFromParams();
    
    selectUnionButtonFromParams();
    
    deselectFinishAndUnionBtns();
    
    orderMinimumProductBehavior(clickBackToProduct, updateIncrement, orderMinimumProductView, hiddenElements, commonWidgetHTML);
   
    handlePageLoadQuote(calculatePricePerSticker, hiddenResultLimit, fullCustomPriceArray, hiddenElements, orderMinimum);
    
    getCartContentsAndForwardLink(condenseCartItemTitles, getLargestCartTitle, createProductList, condenseFullProductListTitles, createProductLinks, findLinkIncreaseSeqValue, commonWidgetHTML)
        
    handleImageUploadEvent(ai, tiff, svg, psd, eps, bmp);
    
    savingImageToLocalStorage(getBase64Image, nextButton3display, commonWidgetHTML);
} 
