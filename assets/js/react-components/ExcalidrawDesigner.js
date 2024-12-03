import React from 'react';
import { Excalidraw, exportToCanvas } from '@excalidraw/excalidraw/dist/excalidraw.production.min.js';

export default function ExcalidrawDesigner({ canvasDimensions }) {
  const [excalidrawAPI, setExcalidrawAPI] = React.useState(null);

  return (
    <>
      <div id="excalidraw">
        <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
      </div>
      
      <a onClick={() => handleButtonClick()} className="button button--primary">Review design</a>
    </>
  )

  async function handleButtonClick() {
    // if Excalidraw API ready
    if (!excalidrawAPI) {
      console.error('excalidrawAPI not found');
      return
    }

    // if user created design elements exist
    const excalidrawElements = excalidrawAPI.getSceneElements();
    if (!excalidrawElements || !excalidrawElements.length) {
        // TODO: show message to user
        const errorMsg = 'No scene elements found. Create a design first.';
        console.error(errorMsg);
        return
    }

    const canvas = await exportToCanvas({
        elements: excalidrawAPI.getSceneElements(),
        appState: excalidrawAPI.getAppState(),
        files: excalidrawAPI.getFiles(),
        getDimensions: () => canvasDimensions,
        exportPadding: 0
    });
    
    const imgDataUrl = convertCanvasToDataUrl(canvas);
    localStorage.setItem('excalidrawImg', imgDataUrl);

    // Emit custom event with the img data URL
    const designerReviewEvent = new CustomEvent('openDesignerReviewModal', { detail: imgDataUrl });
    window.dispatchEvent(designerReviewEvent);
  }

  function convertCanvasToDataUrl(canvas, imgType = 'png', quality = 1.0) {
    console.log("this is the canvas", canvas)
    imgType = 'image/' + imgType;
    const ctx = canvas.getContext("2d");
    return canvas.toDataURL(imgType, quality);
  }
}