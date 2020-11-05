import React, { useState, useContext, useRef } from "react";

import "./Landing.css";

import { AuthContext } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import {
  firebaseAuthAnonym,
  firebaseCreateUserPassword,
  firebaseSigninUserWithPassword,
} from "../../API/Authentication/Authentication";

const Landing: React.FC = () => {
  const context = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="container-auth">
      {!context.loading ? (
        <>
          <div className={`login-box ${authMode}`}>
            {<h1 style={{ color: "red" }}>{errorMsg}</h1>}
            <h1>Для начала войдите</h1>
            <div className="login-group">
              <h2>
                {authMode === "signup"
                  ? "ФОРМА СОЗДАНИЯ АККАУНТА "
                  : "ФОРМА ВХОДА В АККАУНТ "}{" "}
                с помощью логина и пароля
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label>Электронная Почта</label>
                <input type="email" ref={emailRef} />
                <label>Пароль</label>
                <input type="password" ref={passwordRef} />
                {authMode === "signup" ? (
                  <button
                    type="submit"
                    onClick={() => {
                      firebaseCreateUserPassword(
                        context,
                        setErrorMsg,
                        emailRef.current!.value,
                        passwordRef.current!.value
                      );
                    }}
                  >
                    СОЗДАТЬ АККАУНТ
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={() =>
                      firebaseSigninUserWithPassword(
                        context,
                        setRedirect,
                        setErrorMsg,
                        emailRef.current!.value,
                        passwordRef.current!.value
                      )
                    }
                  >
                    ВОЙТИ В АККАУНТ
                  </button>
                )}
              </form>
              {authMode === "signup" ? (
                <p>
                  У вас уже есть аккаунт? Нажмите{" "}
                  <button onClick={() => setAuthMode("signin")}>
                    СЮДА ЧТОБЫ ВОЙТИ
                  </button>
                </p>
              ) : (
                <p>
                  Необходимо создать аккаунт? Нажмите{" "}
                  <button onClick={() => setAuthMode("signup")}>
                    СЮДА ЧТОБЫ СОЗДАТЬ
                  </button>
                </p>
              )}
            </div>
            <div className="login-group">
              <h2>Или просто нажмите сюда! (ДЕМО-вход)</h2>
              <button
                onClick={() =>
                  firebaseAuthAnonym(context, setRedirect, setErrorMsg)
                }
              >
                ВОЙТИ
              </button>
            </div>
          </div>
          <div className="image">
            <img src="images/abstractEducationMain.jpg" alt="123" />
          </div>
        </>
      ) : (
        <div>
          <i className="fa fa-cog fa-spin fa-4x" />
          {redirect ? <Redirect to="/courses" /> : null}
        </div>
      )}
    </div>
  );
};

export default Landing;
