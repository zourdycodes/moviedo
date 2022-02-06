import React, { useRef } from "react";
import { Modal, ModalContent } from "../atoms/Modal";

export const TrailerModal: React.FC<{ id: number }> = ({ id }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const onClose = () => iframeRef.current?.setAttribute("src", "");

  return (
    <Modal activeProp={false} id={`modal__${id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};
