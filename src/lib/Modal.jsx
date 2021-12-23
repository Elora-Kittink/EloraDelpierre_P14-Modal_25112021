import React from "react";
import "./modal.css";

const Modal = ({ isOpen, handleModalOpening }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex-modal">
      <div className="modal">
        <button onClick={handleModalOpening}>X</button>
        <p>Employé créé !</p>
      </div>
    </div>
  );
};

export default Modal;
