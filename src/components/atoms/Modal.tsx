import React, { useState, useEffect, useRef } from "react";

export const Modal: React.FC<{
  id: string | undefined;
  activeProp: boolean;
}> = ({ id, activeProp, children }) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setActive(activeProp);
  }, [activeProp]);

  return (
    <div id={id} className={`modal ${active ? "active" : ""}`}>
      {children}
    </div>
  );
};

export const ModalContent: React.FC<{ onClose: () => void }> = ({
  onClose,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const parentNode = contentRef.current?.parentNode as Element;

  const closeModal = () => {
    parentNode?.classList?.remove("active");
    onClose && onClose();
  };

  return (
    <div ref={contentRef} className="modal__content">
      {children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};
