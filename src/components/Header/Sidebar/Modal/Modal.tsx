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
            </div>
          ) : (
            <div>Для начала войдите</div>
          )}
        </div>
        {context.authenticated ? (
          <div className="navigation" onClick={() => props.hideModal()}>
            <NavLink
              to="/courses"
              activeStyle={{
                color: "#c7815e",
              }}
            >
              Курсы
            </NavLink>
            <NavLink
              to="/community"
              activeStyle={{
                color: "#c7815e",
              }}
            >
              Сообщество
            </NavLink>
            <NavLink
              to="/tracking"
              activeStyle={{
                color: "#c7815e",
              }}
            >
              Отчёт
            </NavLink>
            <NavLink
              to="/settings"
              activeStyle={{
                color: "#c7815e",
              }}
            >
              Настройки
            </NavLink>
            <NavLink to="/" onClick={() => context.logout()}>
              Выйти
            </NavLink>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Modal;
