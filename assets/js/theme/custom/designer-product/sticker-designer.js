import PageManager from '../../page-manager.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
// import ExcalidrawDesigner from '../../../react-components/ExcalidrawDesigner.js';
import CustomExcalidrawDesigner from '../../../react-components/CustomExcalidrawDesigner.js';
import { defaultModal } from '../../global/modal.js';
import { api } from '@bigcommerce/stencil-utils';
import DesignerApiClient from '../util/DesignerApiClient.js';
import parseDimensions from '../util/parseDimensions.js';
import '@bumperactive/excalidraw/index.css';

const excalidrawDesignerSelector = '#excalidraw-designer';
const productViewSelector = '#productViewDesigner';
const modalEditBtnSelector = '[data-designer-modal-edit]';
const modalContinueBtnSelector = '[data-designer-modal-continue]';
const modalImgSelector = '#designer-review-modal img';
const productViewImgSelector = '.productView-large-image';
const addToCartFormSelector = '[data-cart-item-add]';


export default class StickerDesigner extends PageManager {
  constructor(context) {
    super(context)
    this.apiClient = new DesignerApiClient(this.context.serverBaseUrl);
  }

  onReady() {
    this.$excalidrawContainer = $(excalidrawDesignerSelector);
    this.$productViewDesigner = $(productViewSelector);
    this.designerImgDataUrl = null;
    this.modal = null;

    this.$productViewDesigner.hide();
    const canvasDimensions = parseDimensions(this.context.canvasExportDimensions);
    this.renderReactComponent(this.$excalidrawContainer[0], CustomExcalidrawDesigner, {canvasDimensions: canvasDimensions});
    this.bindEvents();
    // console.log($addToCartBtn);

    this.testApiClient();
  }

  parseDimensions(dimensions) {
    // Validate input format
    const regex = /^\d+x\d+$/;
    if (typeof dimensions !== 'string' || !regex.test(dimensions)) {
      throw new Error("Invalid format. Expected a string in the format 'widthxheight', e.g., '200x300'.");
    }

    // Split the string by 'x' to separate width and height
    const [width, height] = dimensions.split('x');

    // Return as object
    return {
      width: parseInt(width, 10),
      height: parseInt(height, 10)
    };
  }

  renderReactComponent(container, ReactComponent, props = {}) {
    const root = createRoot(container);
    root.render(<ReactComponent {...props}/>);
  }

  bindEvents() {
    this.bindExcalidrawDesignerEvents();
  }

  bindExcalidrawDesignerEvents() {
    window.addEventListener('openDesignerReviewModal', (event) => {
      const excalidrawImgDataUrl = event.detail;
      this.openDesignerModal(excalidrawImgDataUrl);
      this.updateImageSource(productViewImgSelector, excalidrawImgDataUrl);
    })
  }

  openDesignerModal(designerImgDataUrl) {
    this.designerImgDataUrl = designerImgDataUrl;
    this.modal = defaultModal();

    // get modal template code
    api.getPage('/sticker-designer', {template: 'products/modals/designerReview'}, (err, content) => {
      if (err) {
          return this.modal.updateContent(this.context.previewError);
      }

      this.modal.updateContent(content);
      this.updateImageSource(modalImgSelector, designerImgDataUrl);
      this.bindDesignerModalEvents();
    });
    this.modal.open();
  }

  bindDesignerModalEvents() {
    if (!this.modal) {
      throw new Error("Unable to bind modal events. Missing modal object. ");
    }

    this.modal.$content.on('click', (event) => {
      if ($(event.target).is(modalEditBtnSelector)) {
        this.modal.close();
      }

      if ($(event.target).is(modalContinueBtnSelector)) {
        this.$excalidrawContainer.hide()
        this.$productViewDesigner.show();
        this.modal.close();
        this.bindProductViewDesignerEvents();
      }
    });
  }

  updateImageSource(selector, imgDataUrl) {
    const $element = $(selector);
    if ($element.length) {
        $element.attr('src', imgDataUrl);
    }
  }

  bindProductViewDesignerEvents() {
    this.$addToCartForm = $(addToCartFormSelector);
    this.$addToCartForm.on('submit', () => {
      let metaDataObj = this.getFormFields(this.$addToCartForm);

      // TEST CODE
      this.testApiClient( this.apiClient.getMockImagesData(this.designerImgDataUrl) );
    })
  }

  // To-do: get form field data
  getFormFields($form) {
    const data = [];
    $form.find('.form-field').each(function() {
        const $field = $(this);
        const fieldValue = data[$field.attr('name')] = $field.val();
        data.push(fieldValue);
    });
    return data;
  }

  async testApiClient(data) {
    const sendImagesResponse = await this.apiClient.sendImagesData(data);
    // console.log('Send images response: ', sendImagesResponse);

    const getImagesResponse = await this.apiClient.getImagesData();
    // console.log('Get images response: ', getImagesResponse);
  }
}

