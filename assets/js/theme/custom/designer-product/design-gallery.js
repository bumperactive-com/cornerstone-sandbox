import PageManager from '../../page-manager.js';
import createGalleryItemHtml from '../templates/design-gallery-item-template.js';
import allDesignsTestData from '../api-test-data/customer-designs.json';

const isTesting = true; 
const testCustomerId = 1;
const myDesignsContainerSelector = '.design-gallery-container';
const baseApiUrl = 'https://bac-excalidraw-db-staging-f05fe4a443a2.herokuapp.com/designs?customerId=';

export default class MyDesigns extends PageManager {
  constructor(context) {
    super(context);
    this.customerId = context.customerId;
  }

  onReady() {
    this.fetchCustomerData().then(customerData => {
      this.renderDesigns(customerData);
    });
  }

  // fetching customer data (with fallback to mock data)
  async fetchCustomerData() {
    const customerId = isTesting ? testCustomerId : this.customerId; 
    const urlWithCustomerId = `${baseApiUrl}${customerId}`;
    try {
      const response = await fetch(urlWithCustomerId);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching customer data, using mock data", error);
      return allDesignsTestData;
    }
  }

  renderDesigns(customerData) {
    const container = document.querySelector(myDesignsContainerSelector);
    customerData.forEach(design => {
        const designHtml = createGalleryItemHtml(design);
        container.insertAdjacentHTML('beforeend', designHtml);
      });
    }
  }
