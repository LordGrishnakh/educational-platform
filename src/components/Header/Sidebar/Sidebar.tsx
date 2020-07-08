import React, { useState } from "react";
import "./Sidebar.css";
import Modal from "./Modal/Modal";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Modal show={open} hideModal={hideModal} />
      <div className="sidebar">
        <i className="fas fa-bars fa-3x" onClick={openModal}></i>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
