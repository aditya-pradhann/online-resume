import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import "../styles/style.scss";

const Modal = ({ isOpen, onClose, heading, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-content">
        <div>
        <h2>{heading}</h2>
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
