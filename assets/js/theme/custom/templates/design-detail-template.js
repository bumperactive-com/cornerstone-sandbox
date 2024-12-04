export default function createDesignPageHtml(designData) {
    return `
    <div class="design-item">
          <p><strong>Title:</strong> ${designData.title}</p>
          <p><strong>Category:</strong> ${designData.category}</p>
          <p><strong>Tags:</strong> ${designData.tags}</p>
          <img src="${designData.imageUrl}" alt="Image">
        </div>
    `;
  }