import React from 'react';

export default function ExcalidrawCanvasDisplay({ canvasUrl }) {
  let image;
  if (canvasUrl) {
    image = <img className="excalidraw-img" src={canvasUrl} alt="product design" />;
  }

  return (
    <div className="excalidraw-img-wrapper">
      {image}
    </div>
  )
};