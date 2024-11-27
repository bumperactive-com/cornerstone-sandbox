import React, { useState, useRef } from 'react';
import {
  DEFAULT_BUBBLE_BACKGROUND_COLOR,
  DEFAULT_BUBBLE_TEXT_COLOR,
  DEFAULT_OVERFLOW_AREA_OPACITY,
  DEFAULT_STICKER_BACKGROUND_COLOR,
  ExcalidrawWrapper,
  PreviewPage,
} from "@bumperactive/excalidraw";


export default function ExcalidrawDesigner() {
  const [sceneData, setSceneData] = useState({
    elements: [],
    library: [],
    stickerType: "rectangle",
    bubbleTextColor: DEFAULT_BUBBLE_TEXT_COLOR,
    bubbleBackgroundColor: DEFAULT_BUBBLE_BACKGROUND_COLOR,
    stickerBackgroundColor: DEFAULT_STICKER_BACKGROUND_COLOR,
    overflowAreaOpacity: DEFAULT_OVERFLOW_AREA_OPACITY,
  });
  const [stickerSvg, setStickerSvg] = useState(null);
  const excalidrawRef = useRef(null);

  const [isOpen, setIsOpen] = useState(true);

  const saveData = (closeSceneData, closeStickerSvg) => {
    // setSceneData(closeSceneData);
    // setStickerSvg(closeStickerSvg);
  };

  const saveSceneData = async () => {
    const api = excalidrawRef.current;
    if (!api) {
      return;
    }
    const curSceneData = await api.exportSceneData();
    const curStickerSvg = await api.exportSticker();
    setSceneData(curSceneData);
    setStickerSvg(curStickerSvg || null);
  };

  return (
    <>
      {isOpen ? (
        <ExcalidrawWrapper
          ref={excalidrawRef}
          sceneData={sceneData}
          onCloseButtonPressed={() => {
            saveSceneData();
            setTimeout(() => setIsOpen(false), 1);
          }}
          onClose={saveData}
        />
      ) : (
        <PreviewPage stickerSvg={stickerSvg} />
      )}
    </>
  );
}
