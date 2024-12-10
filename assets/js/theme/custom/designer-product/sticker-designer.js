import PageManager from '../../page-manager.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import CustomExcalidrawDesigner from '../../../react-components/CustomExcalidrawDesigner.js';
import { defaultModal } from '../../global/modal.js';
import { api } from '@bigcommerce/stencil-utils';
import DesignerApiClient from '../util/DesignerApiClient.js';
import parseDimensions from '../util/parseDimensions.js';
import chunkString from '../util/chunk-string.js'
import '@bumperactive/excalidraw/index.css';

const excalidrawDesignerSelector = '#excalidraw-designer';
const productViewSelector = '#productViewDesigner';
const modalEditBtnSelector = '[data-designer-modal-edit]';
const modalContinueBtnSelector = '[data-designer-modal-continue]';
const modalImgSelector = '#designer-review-modal img';
const productViewImgSelector = '.productView-large-image';
const addToCartFormSelector = '[data-cart-item-add]';
const optionFormFields = '#designer-meta-fields .form-field';

export default class StickerDesigner extends PageManager {
  constructor(context) {
    super(context)
    this.apiClient = new DesignerApiClient(this.context.serverBaseUrl);
  }

  onReady() {
    this.$excalidrawContainer = $(excalidrawDesignerSelector);
    this.$productViewDesigner = $(productViewSelector);
    this.$optionFormFields = $(optionFormFields);
    this.designerImgDataUrl = null;
    this.modal = null;

    this.$productViewDesigner.hide();
    const canvasDimensions = parseDimensions(this.context.canvasExportDimensions);
    this.renderReactComponent(this.$excalidrawContainer[0], CustomExcalidrawDesigner, {canvasDimensions: canvasDimensions});
    this.bindEvents();

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
        this.handleImageUrlFields();
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
    })
  }

  handleImageUrlFields() {
    const imgDataUrlChunks = chunkString(this.designerImgDataUrl, 60000);

    this.$optionFormFields.each((index, field) => {
      const $field = $(field);
      const $fieldLabel = $field.find('label');
      const $fieldInput = $field.find('input');
     
      if ( $fieldLabel.text().toLowerCase().includes('image url') ) {
        $field.hide();

        if (imgDataUrlChunks[0]) {
          $fieldInput.val(imgDataUrlChunks.shift());
        }
      }
    })
  }
  
}

