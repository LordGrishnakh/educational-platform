import React, { useState, useContext } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const context = useContext(AuthContext);
  return (
    <React.Fragment>
      <header className="rogi app">
        {/* Logo */}
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
        {/* Profile and credits */}
        {context.authenticated ? (
          <div className="profile-group">
            <div className="profile" onClick={() => setOpen(!open)}>
              <i className="far fa-user"></i>
              <span> Rogi </span>
              <i className="fas fa-caret-down"></i>
              {open && (
                <ul className="dd-list">
                  <NavLink to="/settings">Settings</NavLink>
                  <NavLink to="/" onClick={() => context.logout()}>
                    Logout
                  </NavLink>
                </ul>
              )}
            </div>
            <div className="credits">{0} Credits</div>
          </div>
        ) : (
          <div className="profile-group">Login first</div>
        )}
      </header>
    </React.Fragment>
  );
};

export default Header;
