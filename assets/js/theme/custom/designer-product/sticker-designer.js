import PageManager from '../../page-manager.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import ExcalidrawDesigner from '../../../react-components/ExcalidrawDesigner.js';
import { defaultModal } from '../../global/modal.js';
import { api } from '@bigcommerce/stencil-utils';
import DesignerApiClient from '../util/DesignerApiClient.js';

export default class StickerDesigner extends PageManager {
  constructor(context) {
    super(context)
    this.apiClient = new DesignerApiClient(this.context.serverBaseUrl);
    this.$excalidrawContainer = $('#excalidraw-designer');
    this.$productViewDesigner = $('#productViewDesigner');
    this.$designerMetaFields = $('#designer-meta-fields');
    this.designerImgDataUrl = null;
    
  }

  onReady() {
    this.$productViewDesigner.hide();
    const canvasDimensions = this.parseDimensions(this.context.canvasExportDimensions);
    this.renderReactComponent(this.$excalidrawContainer[0], ExcalidrawDesigner, {canvasDimensions: canvasDimensions});
    this.modal = null;
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
      this.updateImageSource('.productView-large-image', excalidrawImgDataUrl);
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
      this.updateImageSource('.designer-review-excalidraw-img', imgDataUrl);

      this.bindDesignerModalEvents();
    });
    this.modal.open();
  }

  bindDesignerModalEvents() {
    if (!this.modal) {
      throw new Error("Unable to bind modal events. Missing modal object. ");
    }

    this.modal.$content.on('click', (event) => {
      if ($(event.target).is('[data-designer-modal-edit]')) {
        this.modal.close();
      }

      if ($(event.target).is('[data-designer-modal-continue]')) {
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
    this.$addToCartBtn = $('#form-action-addToCart');
    this.$addToCartBtn.on('click', () => {
      let metaDataObj = this.collectFormMetaData(this.$designerMetaFields);
      console.log(metaDataObj);

      // test code
      this.testApiClient(this.getMockImagesData())
    })
  }

  collectFormMetaData($form) {
    const data = [];
    $form.find('.form-field').each(function() {
        const $field = $(this);
        // data[$field.attr('name')] = $field.val();
        data.push($field);
    });
    return data;
  }

  async testApiClient(data) {
    const sendImagesResponse = await this.apiClient.sendImagesData(data);
    console.log('Send images response: ', sendImagesResponse);

    const getImagesResponse = await this.apiClient.getImagesData();
    console.log('Get images response: ', getImagesResponse);
  }

  getMockImagesData() {
    return {
      id: "7b343752-bb90-411a-9247-a73a101d91b3",
      customer_id: 12,
      customer_email: "test@mock.com",
      customer_name: "Mock Customer Name",
      image: this.designerImgDataUrl,
      name: "Mock Name",
      description: "mock description"
    }
  }
}

