import PageManager from '../../page-manager.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import ExcalidrawDesigner from '../../../react-components/ExcalidrawDesigner.js';
import { defaultModal } from '../../global/modal.js';
import { api } from '@bigcommerce/stencil-utils';

export default class StickerDesigner extends PageManager {
  constructor(context) {
    super(context)
    this.$excalidrawContainer = $('#excalidraw-root')[0];
    this.$productViewDesigner = $('.productView--designer');
    this.currentStep = 1;
  }

  onReady() {
    // this.$productViewDesigner.hide();
    const canvasDimensions = this.parseDimensions(this.context.canvas_export_dimensions);
    this.renderReactComponent(this.$excalidrawContainer, ExcalidrawDesigner, {canvasDimensions: canvasDimensions});
    this.modal = null;
    this.bindEvents();

    this.showStep(this.currentStep);
    this.bindStepEvents();
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

  bindStepEvents() {
    document.querySelectorAll('.next-btn').forEach(button => {
      button.addEventListener('click', () => {
        this.currentStep = parseInt(button.getAttribute('data-next'), 10);
        this.showStep(this.currentStep);
      });
    });

    document.querySelectorAll('.back-btn').forEach(button => {
      button.addEventListener('click', () => {
        this.currentStep = parseInt(button.getAttribute('data-back'), 10);
        this.showStep(this.currentStep);
      });
    });
  }

  showStep(step) {
    document.querySelectorAll('.form-step').forEach(div => {
      div.style.display = 'none';
    });
    document.getElementById('step-' + step).style.display = 'block';
  }

  bindEvents() {
    this.bindExcalidrawDesignerEvents();
  }

  bindExcalidrawDesignerEvents() {
    window.addEventListener('openDesignerReviewModal', (event) => {
      const excalidrawImgDataUrl = event.detail;
      this.openDesignerReviewModal(excalidrawImgDataUrl);
    })
  }

  openDesignerReviewModal(imgDataUrl) {
    this.modal = defaultModal();
    
    
    // get modal template code
    api.getPage('/sticker-designer', {template: 'products/modals/designerReview'}, (err, content) => {
      if (err) {
          return this.modal.updateContent(this.context.previewError);
      }
      
      this.modal.updateContent(content);
      $('.excalidraw-img').attr('src', imgDataUrl);
    });

    this.modal.open();
  }
}

