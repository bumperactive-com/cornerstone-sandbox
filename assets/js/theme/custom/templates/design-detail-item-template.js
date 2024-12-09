export default function createDetailItemHtml(designData) {
  const categories = designData.categories.map(category => category.name).join(", ");
  const tags = designData.tags.map(tag => tag.name).join(", ");

  return `
    <div class="design-detail--item">
      <p class="design-detail--title"><strong>Title:</strong> ${designData.title}</p>
      <p class="design-detail--categories"><strong>Categories:</strong> ${categories}</p>
      <p class="design-detail--tags"><strong>Tags:</strong> ${tags}</p>
      <p class="design-detail--charity"><strong>Charity:</strong> ${designData.charity}</p>
      <img src="${designData.imageUrl}" alt="${designData.title} image" class="design-detail--image" />
    </div>
  `;
}