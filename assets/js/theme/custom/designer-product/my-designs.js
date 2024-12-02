import PageManager from '../../page-manager.js';
import createMyDesignsHtml from '../templates/my-designs-template.js'; // Adjust the path if necessary

const myDesignsContainerSelector = '.my-designs-container';

export default class MyDesigns extends PageManager {
  constructor(context) {
    super(context);
    this.customerName = context.customerName;
    this.customerId = context.customerId;
  }

  onReady() {
    console.log(this.context);
    console.log("customerName", this.customerName, "customerId", this.customerId);
    this.fetchCustomerData().then(customerData => {
      this.renderDesigns(customerData);
    });
  }

  // fetching customer data (with fallback to mock data)
  async fetchCustomerData() {
    try {
      const apiUrl = 'https://bac-excalidraw-db-staging-f05fe4a443a2.herokuapp.com/[designs-endpoint]';
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching customer data, using mock data", error);
      
      return {
        designs: [
          { id: 1, imgPath: "https://cdn11.bigcommerce.com/s-t8h0eqr68h/images/stencil/original/image-manager/fldems.png?t=1733089981", title: 'Mock Design 1', description: 'For testing only', category: 'Philosophy', view_url: '/view/1' },
          { id: 2, imgPath: "https://cdn11.bigcommerce.com/s-t8h0eqr68h/images/stencil/original/image-manager/akdems.png?t=1733089982", title: 'Mock Design 2', description: 'Another design example', category: 'Politics', view_url: '/view/2' }
        ]
      };
    }
  }

  renderDesigns(customerData) {
    const container = document.querySelector(myDesignsContainerSelector);
    container.innerHTML = '';
    customerData.designs.forEach(design => {
      const designHtml = createMyDesignsHtml(design);
      container.insertAdjacentHTML('beforeend', designHtml);
    });
  }
}
