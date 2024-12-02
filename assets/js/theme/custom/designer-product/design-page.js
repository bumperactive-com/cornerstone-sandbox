import PageManager from '../../page-manager.js';

const designPageContainerSelector = ".design-page-container";

export default class DesignPage extends PageManager {
  constructor(context) {
    super(context);
    this.context = context;
  }

  onReady() {
    const designId = this.getQueryParam('id');
    console.log("Design ID", designId);

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
      const apiUrl = `https://bac-excalidraw-db-staging-f05fe4a443a2.herokuapp.com/[designs-endpoint]/${designId}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching from API, using mock data:", error);
    
      return {
        id: 1, imgPath: "https://cdn11.bigcommerce.com/s-t8h0eqr68h/images/stencil/original/image-manager/fldems.png?t=1733089981", title: 'Mock Design 1', description: 'For testing only', category: 'Philosophy', edit_url: '/edit/1', view_url: '/view/1'
      };
    }
  }

  renderDesignPage(designData) {
    const designPageContainer = document.querySelector(designPageContainerSelector);
    if (designPageContainer) {
      const designHtml = `
        <div class="design-item">
          <p><strong>Title:</strong> ${designData.title}</p>
          <p><strong>Description:</strong> ${designData.description}</p>
          <img src="${designData.imgPath}" alt="Image">
          <p><a href="${designData.edit_url}" class="button button--small">Edit</a></p>
        </div>
      `;
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
