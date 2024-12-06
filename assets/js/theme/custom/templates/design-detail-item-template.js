export default function createDetailItemHtml(designData) {
  const categories = designData.categories.map(category => category.name).join(", ");
  const tags = designData.tags.map(tag => tag.name).join(", ");

    return `
    <div class="design-item">
          <p><strong>Title:</strong> ${designData.title}</p>
          <p><strong>Categories</strong> ${categories}</p>
          <p><strong>Tags:</strong> ${tags}</p>
          <p><strong>Charity:</strong> ${designData.charity}</p>
          <img src="${designData.imageUrl}" alt="Image">
        </div>
    `;
  }
  