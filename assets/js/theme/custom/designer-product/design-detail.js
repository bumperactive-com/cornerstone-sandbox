import PageManager from '../../page-manager.js';
import createDetailItemHtml from '../templates/design-detail-item-template.js';
import singleDesignTestData from '../api-test-data/design.json';

const designPageContainerSelector = ".design-detail-container";

export default class DesignPage extends PageManager {
  constructor(context) {
    super(context);
    this.context = context;
    this.customerId = context.customerId;
  }

  onReady() {
    const designId = this.getQueryParam('id');

    if (designId) {
      this.fetchDesignDetails(designId).then(designData => {
        this.renderDesignPage(designData);
      }).catch(error => {
        console.error("Error fetching design details:", error);
        this.renderErrorPage();
      });
    } else {
      console.error("No design ID found in query params.");
    }
  }

  getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  async fetchDesignDetails(designId) {
    try {
      const apiUrl = `https://bac-excalidraw-db-staging-f05fe4a443a2.herokuapp.com/designs/${designId}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching from API, using mock data:", error);
      return singleDesignTestData;
    }
  }

  renderDesignPage(designData) {
    const designPageContainer = document.querySelector(designPageContainerSelector);
    if (designPageContainer) {
      const designHtml = createDetailItemHtml(designData);
      designPageContainer.innerHTML = designHtml;
    } else {
      console.error("Design page container not found.");
    }
  }

  renderErrorPage() {
    const designPageContainer = document.querySelector(designPageContainerSelector);
    if (designPageContainer) {
      designPageContainer.innerHTML = '<p>Error: Unable to load the design details.</p>';
    }
  }
}
