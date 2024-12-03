import PageManager from '../../page-manager.js';
import createMyDesignsHtml from '../templates/my-designs-template.js';
import customerDesigns from '../api-test-data/customer-designs.json';

const myDesignsContainerSelector = '.my-designs-container';

export default class MyDesigns extends PageManager {
  constructor(context) {
    super(context);
    this.customerName = context.customerName;
    this.customerId = context.customerId;
  }

  onReady() {
    console.log(this.context);
    console.log("these are the customer designs", customerDesigns);
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
        designs: customerDesigns
      };
    }
  }

  renderDesigns(customerData) {
    const container = document.querySelector(myDesignsContainerSelector);
    container.innerHTML = '';

    // grouping the designs by category
    const designsByCategory = customerData.designs.reduce((acc, design) => {
        const category = design.category; 
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(design);
        return acc;
    }, {});
    
    console.log("designsByCategory", designsByCategory)

    Object.entries(designsByCategory).forEach(([category, designs]) => {
        container.insertAdjacentHTML('beforeend', `<h1>${category}</h1>`);
   
        designs.forEach(design => {
            const designHtml = createMyDesignsHtml(design);
            container.insertAdjacentHTML('beforeend', designHtml);
        });
    });
  }

}
