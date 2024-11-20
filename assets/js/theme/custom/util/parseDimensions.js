export default function parseDimensions(dimensions) {
  // Validate input format
  const regex = /^\d+x\d+$/;
  if (typeof dimensions !== 'string' || !regex.test(dimensions)) {
    throw new Error("Invalid format. Expected a string in the format 'widthxheight', e.g., '200x300'.");
  }

  // Split the string by 'x' to separate width and height
  const [width, height] = dimensions.split('x');
  
  // Return as object
  return {
    width: parseInt(width, 10),
    height: parseInt(height, 10)
  };
}