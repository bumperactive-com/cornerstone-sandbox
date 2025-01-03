export default function appendSvgToParent(svg, parent) {
  // Validate svg
  if (svg.nodeName.toLowerCase() !== "svg") {
      console.error("Provided element is not a valid SVG element.");
      return;
  }

  // Determine the parent element
  let parentElement;
  if (typeof parent === "string") {
      parentElement = document.querySelector(parent);
      if (!parentElement) {
          console.error("Target element not found for the provided selector:", parent);
          return;
      }
  } else if (parent instanceof HTMLElement) {
      parentElement = parent;
  } else {
      console.error("Provided parent is neither a valid selector nor a DOM node.");
      return;
  }

  return parentElement.appendChild(svg);
}