import PageManager from '../../page-manager.js';
import createMyDesignsHtml from '../templates/design-gallery-template.js';
import allDesignsTestData from '../api-test-data/customer-designs.json';

const myDesignsContainerSelector = '.design-gallery-container';
const baseApiUrl = 'https://bac-excalidraw-db-staging-f05fe4a443a2.herokuapp.com/[designs-endpoint]';

export default class MyDesigns extends PageManager {
  constructor(context) {
    super(context);
    this.customerName = context.customerName;
    this.customerId = context.customerId;
  }

  onReady() {
    this.fetchCustomerData().then(customerData => {
      this.renderDesigns(customerData);
    });
  }

  // fetching customer data (with fallback to mock data)
  async fetchCustomerData() {
    try {
      const response = await fetch(baseApiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching customer data, using mock data", error);
      
      // returns object with the property 'designs'.  the response data is in array format
      return {
        designs: allDesignsTestData
      };
    }
  }

  renderDesigns(customerData) {
    const container = document.querySelector(myDesignsContainerSelector);
    container.innerHTML = '';

    // groups the designs by category
    const designsByCategory = customerData.designs.reduce((acc, design) => {
        const category = design.category; 
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(design);
        return acc;
    }, {});

    // Object.entries returns an array of key value pairs -- allows for iteration
    Object.entries(designsByCategory).forEach(([category, designs]) => {
        container.insertAdjacentHTML('beforeend', `<h1>${category}</h1>`);
   
        designs.forEach(design => {
            const designHtml = createMyDesignsHtml(design);
            container.insertAdjacentHTML('beforeend', designHtml);
        });
    });
  }

}
