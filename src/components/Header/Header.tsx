import React, { useState, useContext } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Sidebar from "./Sidebar/Sidebar";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const context = useContext(AuthContext);
  return (
    <React.Fragment>
      <header className="rogi app">
        {/* Logo */}
        <Sidebar />
        <img src="images/SimpleStudyLogo.webp" alt="Simple Study Logo" />
        {/* Navigation */}
        {!context.authenticated ? (
          <nav>
            <NavLink
              to="/"
              activeStyle={{
                color: "#c7815e",
              }}
            >
              Домашняя страница
            </NavLink>
          </nav>
        ) : (
          <nav>
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
          </nav>
        )}
        {/* Profile and credits */}
        {context.authenticated ? (
          <div className="profile-group">
            <div className="profile" onClick={() => setOpen(!open)}>
              <i className="far fa-user"></i>
              <span> {localStorage.getItem("username")} </span>
              <i className="fas fa-caret-down"></i>
              {open && (
                <ul className="dd-list">
                  <NavLink to="/settings">Настройки</NavLink>
                  <NavLink to="/" onClick={() => context.logout()}>
                    Выйти
                  </NavLink>
                </ul>
              )}
            </div>
            <div className="credits">{context.credits} Кредитов</div>
          </div>
        ) : (
          <div className="profile-group">Для начала войдите!</div>
        )}
      </header>
    </React.Fragment>
  );
};

export default Header;
