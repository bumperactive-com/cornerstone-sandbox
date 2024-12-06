export default function createDetailItemHtml(designData) {
  const categories = designData.categories.map(category => category.name).join(", ");
  const tags = designData.tags.map(tag => tag.name).join(", ");

  return `
    <div class="design-item">
      <p class="design-title">
        <a href="/design-gallery/design-detail?id=${designData.id}" class="design-title-link">
            <strong>Title:</strong> ${designData.title}
        </a>
      </p>
      <p class="design-categories"><strong>Categories:</strong> ${categories}</p>
      <p class="design-tags"><strong>Tags:</strong> ${tags}</p>
      <p class="design-charity"><strong>Charity:</strong> ${designData.charity}</p>
      <img src="${designData.imageUrl}" alt="${designData.title} image" class="design-image">
    </div>
  `;
}