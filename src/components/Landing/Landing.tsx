import React, { useState, useContext, useRef } from "react";

import "./Landing.css";

import { AuthContext } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import {
  firebaseAuthAnonym,
  firebaseCreateUserPassword,
  firebaseSigninUserWithPassword
} from "../../API/Authentication/Authentication";

const Landing: React.FC = () => {
  const context = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="container">
      {context.userId}
      {<h1 style={{ color: "red" }}>{errorMsg}</h1>}
      {!context.loading ? (
        <div className={`login-box ${authMode}`}>
          <h1>Please login first</h1>
          <div className="login-group">
            <h2>
              {authMode === "signup" ? "Create an account " : "Login "} via
              login+password
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label>Email</label>
              <input type="email" ref={emailRef} />
              <label>Password</label>
              <input type="password" ref={passwordRef} />
              {authMode === "signup" ? (
                <button
                  type="submit"
                  onClick={() =>
                    {  firebaseCreateUserPassword(
                      context,
                      setErrorMsg,
                      emailRef.current!.value,
                      passwordRef.current!.value
                    ) }
                  }
                >
                  CREATE ACCOUNT
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
                  SIGN IN ACCOUNT
                </button>
              )}
            </form>
            {authMode === "signup" ? (
              <p>
                Already have an account? click{" "}
                <button onClick={() => setAuthMode("signin")}>
                  here to login
                </button>
              </p>
            ) : (
              <p>
                Need to create an account? click{" "}
                <button onClick={() => setAuthMode("signup")}>
                  here to create
                </button>
              </p>
            )}
          </div>
          <div className="login-group">
            <h2>Simmulate logging in</h2>
            <button
              onClick={() =>
                firebaseAuthAnonym(context, setRedirect, setErrorMsg)
              }
            >
              LOGIN
            </button>
          </div>
        </div>
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
