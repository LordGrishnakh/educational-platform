import React, { useState, useRef } from "react";
import { validateLocaleAndSetLanguage } from "typescript";
import { updateUserPassword } from "../../API/Authentication/Authentication";
import "./Settings.css";

const Settings: React.FC = () => {
  const [shownPage, setShownPage] = useState<"profile" | "password">("profile");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const profileRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  let settingsHTML = null;

  const setNewUsername = (username: string) => {
    localStorage.setItem("username", username);
    window.location.reload();
  };
  const validate = () => {
    if (passwordRef.current!.value.length < 6) {
      passwordRef.current!.className = "invalid"
      return
    }
    setErrorMessage("");
    passwordRef.current!.className = "valid"
  }

  switch (shownPage) {
    case "profile":
      settingsHTML = (
        <div className="container-settings">
          <h1>Профиль</h1>
          <div className="details">
            <h2>Детали</h2>
            <p>Здесь вы можете поменять свой юзернейм</p>
          </div>
          <div className="input-group">
            <label htmlFor="name">Юзернейм</label>
            <input
              type="text"
              name="name"
              ref={profileRef}
              placeholder={localStorage.getItem("username")!}
            />
            <button onClick={() => setNewUsername(profileRef.current!.value)}>
              Сохранить
            </button>
          </div>
        </div>
      );
      break;

    case "password":
      settingsHTML = (
        <div className="container-settings">
          <h1>Пароль</h1>
          <div className="details">
            <h2>Детали</h2>
            <p>Здесь вы можете поменять свой пароль</p>
          </div>
          <div className="input-group">
            <label htmlFor="password">Пароль</label>
            <span className="error">{errorMessage}</span>
            <input
              className="invalid"
              type="text"
              name="password"
              onChange={()=>validate()}
              ref={passwordRef}
              placeholder={localStorage.getItem("username")!}
            />
            <button
              onClick={() => {
                updateUserPassword(
                  passwordRef.current!.value,
                  setLoading,
                  setErrorMessage
                );
              }}
              disabled={loading}
            >
              {!loading ? (
                "Сохранить"
              ) : (
                <div>
                  <i className="fa fa-cog fa-spin" />
                </div>
              )}
            </button>
          </div>
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <div className="container">
      <h1>Настройки</h1>
      <div className="settings">
        <div className="sidebar-settings">
          <div
            style={
              shownPage === "profile" ? { backgroundColor: "#DDEBFE" } : {}
            }
            onClick={() => setShownPage("profile")}
          >
            Профиль
          </div>
          <div
            style={
              shownPage === "password" ? { backgroundColor: "#DDEBFE" } : {}
            }
            onClick={() => setShownPage("password")}
          >
            Пароль
          </div>
        </div>
        <div className="main-content">{settingsHTML}</div>
      </div>
    </div>
  );
};

export default Settings;
