import React, { useState, useRef } from 'react';
import {
  DEFAULT_BUBBLE_BACKGROUND_COLOR,
  DEFAULT_BUBBLE_TEXT_COLOR,
  DEFAULT_OVERFLOW_AREA_OPACITY,
  DEFAULT_STICKER_BACKGROUND_COLOR,
  ExcalidrawWrapper,
  PreviewPage,
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

    const curSceneData = await api.exportSceneData();
    const curStickerSvg = await api.exportSticker();

    const stickerStr = new XMLSerializer().serializeToString(curStickerSvg);
    const stickerEncoded = 'data:image/svg+xml;base64,' + window.btoa(stickerStr);
    const designerReviewEvent = new CustomEvent(
      'openDesignerReviewModal',
      { detail: stickerEncoded }
    );

    window.dispatchEvent(designerReviewEvent);
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
