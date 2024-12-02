export default function createDesignPageHtml(designData) {
    return `
    <div class="design-item">
          <p><strong>Title:</strong> ${designData.title}</p>
          <p><strong>Description:</strong> ${designData.description}</p>
          <img src="${designData.imgPath}" alt="Image">
        </div>
    `;
  }