export default function createGalleryItemHtml(design) {
  const categories = design.categories.map(category => category.name).join(", ");

  return `
    <div class="design-gallery--item">
      <p class="design-gallery--title">
        <a href="/design-gallery/design-detail?id=${design.id}" class="design-gallery--link">
          <strong>Title:</strong> ${design.title}
        </a>
      </p>
      <p class="design-gallery--categories">
        <strong>Categories:</strong> ${categories}
      </p>
      <img src="${design.imageUrl}" alt="${design.title} image" class="design-gallery--image" />
      <p class="design-gallery--actions">
        <a href="/design-gallery/design-detail?id=${design.id}" 
           class="design-gallery--button button--small" 
           data-id="${design.id}">
          View More Details
        </a>
      </p>
    </div>
  `;
}
