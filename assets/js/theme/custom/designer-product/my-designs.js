import PageManager from '../../page-manager.js';

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
          { id: 1, imgPath: "https://cdn11.bigcommerce.com/s-t8h0eqr68h/images/stencil/original/image-manager/fldems.png?t=1733089981", title: 'Mock Design 1', description: 'For testing only', category: 'Philosophy', edit_url: '/edit/1', view_url: '/view/1' },
          { id: 2, imgPath: "https://cdn11.bigcommerce.com/s-t8h0eqr68h/images/stencil/original/image-manager/akdems.png?t=1733089982", title: 'Mock Design 2', description: 'Another design example', category: 'Politics', edit_url: '/edit/2', view_url: '/view/2' }
        ]
      };
    }
  }

  renderDesigns(customerData) {
    const container = document.querySelector(myDesignsContainerSelector);
    container.innerHTML = '';
    customerData.designs.forEach(design => {
      const designHtml = `
        <div class="design-item">
          <p><strong>Title:</strong> ${design.title}</p>
          <p><strong>Category:</strong> ${design.category}</p>
           <img src="${design.imgPath}" alt="Image">
          <p><a href="${design.edit_url}" class="button button--small">Edit</a></p>
          <p><a href="/my-designs/design-page?id=${design.id}" class="button button--small view-button" data-id="${design.id}">View</a></p>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', designHtml);
    });
  }
}
