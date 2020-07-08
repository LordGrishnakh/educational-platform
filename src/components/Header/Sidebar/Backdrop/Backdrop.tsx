import React from "react";
import "./Backdrop.css";

const backdrop: React.FC<{ show: boolean; clicked: () => void }> = (props) =>
  props.show ? <div className="backdrop" onClick={props.clicked}></div> : null;

export default backdrop;
