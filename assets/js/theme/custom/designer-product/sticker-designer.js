import PageManager from '../../page-manager.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import CustomExcalidrawDesigner from '../../../react-components/CustomExcalidrawDesigner.js';
import { defaultModal } from '../../global/modal.js';
import { api } from '@bigcommerce/stencil-utils';
import DesignerApiClient from '../util/DesignerApiClient.js';
import parseDimensions from '../util/parseDimensions.js';
import '@bumperactive/excalidraw/index.css';
import appendSvgToParent from '../util/append-svg-to-parent.js';
import generateUniqueFilename from '../util/generate-unique-filename.js';

const excalidrawDesignerSelector = '#excalidraw-designer';
const productViewSelector = '#productViewDesigner';
const modalEditBtnSelector = '[data-designer-modal-edit]';
const modalContinueBtnSelector = '[data-designer-modal-continue]';
const modalImgWrapperSelector = '#designer-review-excalidraw-img-wrapper';
const productViewDesignImgWrapper = '#productView-design-image-wrapper';
const optionFormFields = '#designer-meta-fields .form-field';
const inputFileSelector = '.form-file';

const DESIGN_FILENAME_PREFIX = 'design';
const DESIGN_FILE_EXTENSION = 'svg';

export default class StickerDesigner extends PageManager {
  constructor(context) {
    super(context)
    this.apiClient = new DesignerApiClient(this.context.serverBaseUrl);
  }

  onReady() {
    this.$excalidrawContainer = $(excalidrawDesignerSelector);
    this.$productViewDesigner = $(productViewSelector);
    this.$optionFormFields = $(optionFormFields);
    this.$fileInput = this.findFileInput(this.$optionFormFields);
    this.modal = null;
    this.excalidrawSvg = null

    this.initializePageContent();
  }

  initializePageContent() {
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
    window.addEventListener('reviewDesign', (event) => {
      this.excalidrawSvg = event.detail; // exported SVG element from Excalidraw
      const excalidrawSvgString = new XMLSerializer().serializeToString(this.excalidrawSvg); // convert svg element to string
      localStorage.setItem('excalidrawSvgString', excalidrawSvgString);

      this.openDesignerModal();
    })
  }

  openDesignerModal() {
    this.modal = defaultModal();

    // get modal template code
    api.getPage('/sticker-designer', {template: 'products/modals/designerReview'}, async (err, content) => {
      if (err) return this.modal.updateContent(this.context.previewError);
      
      await this.modal.updateContent(content);
      appendSvgToParent(this.excalidrawSvg, modalImgWrapperSelector);
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
        appendSvgToParent(this.excalidrawSvg, productViewDesignImgWrapper);
        this.modal.close();
        this.setSvgToFileInputField();
      }
    });
  }

  setSvgToFileInputField() {
    if (!this.$fileInput) {
      console.log("A file input form field could not be found.")
      return;
    }

    if (!this.excalidrawSvg) {
      console.log("Missing exported Excalidraw SVG")
      return;
    }

    const fileContent = localStorage.getItem('excalidrawSvgString');
    const filename = generateUniqueFilename(DESIGN_FILE_EXTENSION, DESIGN_FILENAME_PREFIX);
    const file = new File([fileContent], filename);

    // Create a data transfer object. Similar to what you get from a file 'drag and drop' event as `event.dataTransfer`
    const dataTransfer = new DataTransfer();
    // Add your file to the file list of the object
    dataTransfer.items.add(file);
    // Save the file list to a new variable
    const fileList = dataTransfer.files;
    // Set your input `files` to the file list
    this.$fileInput[0].files = fileList; 
  }

  findFileInput($formFields) {
    for (const field of $formFields) {
        const $fileInput = $(field).children(inputFileSelector);
        if ($fileInput.length > 0) { // Check if there are any matching elements
            return $fileInput;
        }
    }

    console.log("A file input form field could not be found.");
    return null;
  }
}