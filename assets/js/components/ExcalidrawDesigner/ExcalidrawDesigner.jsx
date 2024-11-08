import React from 'react';
import { Excalidraw, exportToCanvas } from '@excalidraw/excalidraw/dist/excalidraw.development.js';
import ExcalidrawCanvasDisplay from '../ExcalidrawCanvasDisplay/ExcalidrawCanvasDisplay.jsx';

export default function ExcalidrawDesigner() {
  const [excalidrawAPI, setExcalidrawAPI] = React.useState(null);
  const [canvasUrl, setCanvasUrl] = React.useState("");
  const canvasDisplayDimensions = { width: 600, height: 200 };

  return (
    <>
      <div id="excalidraw">
        <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
      </div>
      
      <a href="#excalidraw-preview" data-reveal-id="excalidraw-preview" onClick={() => handleButtonClick()} className="button button--primary">Preview design</a>

      <div id="excalidraw-preview" className="modal" data-reveal>
        <ExcalidrawCanvasDisplay canvasUrl={canvasUrl} />
        <div className="button-wrapper">
          <a className="button">Edit design</a>
          <a href="/sample-unisex-tee-white"className="button button--primary">Continue</a>
        </div>
        
      </div>
    </>
  )


  async function handleButtonClick() {
    // if Excalidraw API ready
    if (!excalidrawAPI) {
      console.error('no excalidrawAPI found');
      return
    }

    // if user created design elements exist
    const excalidrawElements = excalidrawAPI.getSceneElements();
    if (!excalidrawElements || !excalidrawElements.length) {
        const errorMsg = 'No scene elements found. Create a design first.';
        console.error(errorMsg);
        return
    }

    const canvas = await exportToCanvas({
        elements: excalidrawAPI.getSceneElements(),
        appState: excalidrawAPI.getAppState(),
        files: excalidrawAPI.getFiles(),
        getDimensions: () => canvasDisplayDimensions,
        exportPadding: 0
    });

    const imgDataUrl = convertCanvasToDataUrl(canvas);
    saveToLocalStorage('excalidrawImg', imgDataUrl);
    setCanvasUrl(imgDataUrl);
  }

  function saveToLocalStorage(key, data) {
    localStorage.setItem(key, data);
    console.log(`Saved '${key}' data to localStorage`);
  }

  function convertCanvasToDataUrl(canvas, imgType = 'png', quality = 1.0) {
    imgType = 'image/' + imgType;
    const ctx = canvas.getContext("2d");
    return canvas.toDataURL(imgType, quality);
  }
}