import React, { useState, useRef } from 'react';
import {
  DEFAULT_BUBBLE_BACKGROUND_COLOR,
  DEFAULT_BUBBLE_TEXT_COLOR,
  DEFAULT_OVERFLOW_AREA_OPACITY,
  DEFAULT_STICKER_BACKGROUND_COLOR,
  ExcalidrawWrapper,
} from "@bumperactive/excalidraw";


export default function CustomExcalidrawDesigner() {
  const [sceneData, setSceneData] = useState({
    elements: [],
    library: [],
    stickerType: "rectangle",
    bubbleTextColor: DEFAULT_BUBBLE_TEXT_COLOR,
    bubbleBackgroundColor: DEFAULT_BUBBLE_BACKGROUND_COLOR,
    stickerBackgroundColor: DEFAULT_STICKER_BACKGROUND_COLOR,
    overflowAreaOpacity: DEFAULT_OVERFLOW_AREA_OPACITY,
  });
  const excalidrawRef = useRef(null);

  const reviewDesign = async () => {
    const api = excalidrawRef.current;
    if (!api) return;
    
    const excalidrawSvg = await api.exportSticker();
    const reviewDesignEvent = new CustomEvent(
      'reviewDesign',
      { detail: excalidrawSvg }
    );

    window.dispatchEvent(reviewDesignEvent);
  }

  return (
    <>
      <ExcalidrawWrapper
        ref={excalidrawRef}
        sceneData={sceneData}
      />
      <a onClick={() => reviewDesign()} className="button button--primary">Review design</a>
    </>
  );
}
