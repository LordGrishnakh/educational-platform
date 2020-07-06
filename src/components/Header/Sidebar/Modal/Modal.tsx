import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const Modal: React.FC<{ show: boolean; hideModal: () => void }> = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.hideModal} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateX(0)" : "translateX(-75vw)",
          opacity: props.show ? "1" : "0",
        }}
      ></div>
    </React.Fragment>
  );
};

export default Modal;
