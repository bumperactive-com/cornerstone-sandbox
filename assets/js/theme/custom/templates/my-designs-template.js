export default function createMyDesignsHtml(design) {
    return `
      <div class="design-item">
        <p><strong>Title:</strong> ${design.title}</p>
        <p><strong>Category:</strong> ${design.category}</p>
        <img src="${design.imageUrl}" alt="Image">
        <p>
          <a href="/my-designs/design-page?id=${design.id}" 
             class="button button--small view-button" 
             data-id="${design.id}">
            View
          </a>
        </p>
      </div>
    `;
  }