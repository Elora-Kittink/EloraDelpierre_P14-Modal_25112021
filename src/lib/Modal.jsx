import React from "react";
import "./modal.css";

const Modal = ({ isOpen, closeModal, content }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="flex-modal">
      <div className="modal">
        <button onClick={closeModal}>X</button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
