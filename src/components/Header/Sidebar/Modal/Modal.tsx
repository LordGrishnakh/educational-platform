import React, { useContext } from "react";
import Backdrop from "../Backdrop/Backdrop";
import { AuthContext } from "../../../../context/AuthContext";
import "./Modal.css";
import { NavLink } from "react-router-dom";

const Modal: React.FC<{ show: boolean; hideModal: () => void }> = (props) => {
  const context = useContext(AuthContext);
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.hideModal} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateX(0)" : "translateX(-75vw)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="modal-profile">
          {context.authenticated ? (
            <div>
              <div>
                <i className="far fa-user"></i>
                <span> Rogi </span>
              </div>
              {/* <div>{0} Credits</div> */}
            </div>
          ) : (
            <div>Login first</div>
          )}
        </div>
        {context.authenticated ? (
          <div className="navigation" onClick={() => props.hideModal()}>
            <NavLink
              to="/course"
              activeStyle={{
                color: "#c7815e",
              }}
            >
              Course
            </NavLink>
            <NavLink
              to="/community"
              activeStyle={{
                color: "#c7815e",
              }}
            >
              Community
            </NavLink>
            <NavLink
              to="/tracking"
              activeStyle={{
                color: "#c7815e",
              }}
            >
              Tracking
            </NavLink>
            <NavLink to="/" onClick={() => context.logout()}>
              Logout
            </NavLink>
          </div>
        ) : null}
        {/* <nav>
          {!context.authenticated ? (
            <nav>
              <NavLink
                to="/"
                activeStyle={{
                  color: "#c7815e",
                }}
              >
                Home
              </NavLink>
            </nav>
          ) : (
            <nav>
              <NavLink
                to="/course"
                activeStyle={{
                  color: "#c7815e",
                }}
              >
                Course
              </NavLink>
              <NavLink
                to="/community"
                activeStyle={{
                  color: "#c7815e",
                }}
              >
                Community
              </NavLink>
              <NavLink
                to="/tracking"
                activeStyle={{
                  color: "#c7815e",
                }}
              >
                Tracking
              </NavLink>
            </nav>
          )}
        </nav> */}
      </div>
    </React.Fragment>
  );
};

export default Modal;
