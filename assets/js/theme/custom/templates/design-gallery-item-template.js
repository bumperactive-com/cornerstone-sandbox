export default function createGalleryItemHtml(design) {
  const categories = design.categories.map(category => category.name).join(", ");
  return `
    <div class="design-item">
      <p class="design-title">
        <a href="/design-gallery/design-detail?id=${design.id}">
            <strong>Title:</strong> ${design.title}
        </a>
      </p>
      <p class="design-categories"><strong>Categories:</strong> ${categories}</p>
      <img src="${design.imageUrl}" alt="${design.title} image" class="design-image">
      <p class="design-actions">
        <a href="/design-gallery/design-detail?id=${design.id}" 
           class="button button--small view-button" 
           data-id="${design.id}">
          View
        </a>
      </p>
    </div>
  `;
}