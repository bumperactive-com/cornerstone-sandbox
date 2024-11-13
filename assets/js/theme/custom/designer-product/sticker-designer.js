import PageManager from '../../page-manager.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import ExcalidrawDesigner from '../../../react-components/ExcalidrawDesigner.js';
import { defaultModal } from '../../global/modal.js';
import { api } from '@bigcommerce/stencil-utils';

export default class StickerDesigner extends PageManager {
  constructor(context) {
    super(context)
    this.$excalidrawContainer = $('#excalidraw-designer');
    this.$productViewDesigner = $('#productViewDesigner');
  }

  onReady() {
    this.$productViewDesigner.hide();
    const canvasDimensions = this.parseDimensions(this.context.canvas_export_dimensions);
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
      this.updateProductViewImage(excalidrawImgDataUrl);
    })
  }

  openDesignerModal(imgDataUrl) {
    this.modal = defaultModal();
    
    // get modal template code
    api.getPage('/sticker-designer', {template: 'products/modals/designerReview'}, (err, content) => {
      if (err) {
          return this.modal.updateContent(this.context.previewError);
      }
      
      this.modal.updateContent(content);
      $('.excalidraw-img').attr('src', imgDataUrl);

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
      }
    });
  }

  updateProductViewImage(imgDataUrl) {
    $('.productView-large-image').attr('src', imgDataUrl);
  }
}

