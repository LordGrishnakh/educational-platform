import React, { useState, useContext, useRef } from "react";

import "./Landing.css";

// import AnonymAuth from '../../API/Authentication/AnonymAuth';
import * as firebase from "firebase/app";

import "firebase/auth";
import { AuthContext } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCRb6bOZENGqdwkAHA73Lre0Pfjmma9kTw",
  authDomain: "simplestudy-cbaf1.firebaseapp.com",
  databaseURL: "https://simplestudy-cbaf1.firebaseio.com",
  projectId: "simplestudy-cbaf1",
  storageBucket: "simplestudy-cbaf1.appspot.com",
  messagingSenderId: "763981001548",
  appId: "1:763981001548:web:728b4ccbf7e014d23395e9",
};

firebase.initializeApp(firebaseConfig);

const Landing: React.FC = () => {
  const context = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const firebaseCreateUserPassword: (a: string, b: string) => void = (
    email,
    password
  ) => {
    context.startLoading();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        context.setAuthStatus();
        context.setUser(data.user!.uid);
        context.finishLoading();
      })
      .catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        context.finishLoading();
        setErrorMsg(errorMessage + `error code: ${errorCode}`);
        setTimeout(() => {
          setErrorMsg("");
        }, 15000);
      });
  };

  const firebaseSigninUserWithPassword: (a: string, b: string) => void = (
    email,
    password
  ) => {
    context.startLoading();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        context.setAuthStatus();
        setRedirect(true);
        context.setUser(data.user!.uid);
        context.finishLoading();
      })
      .catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        context.finishLoading();
        setErrorMsg(errorMessage + `error code: ${errorCode}`);
        setTimeout(() => {
          setErrorMsg("");
        }, 15000);
      });
  };

  const firebaseAuthAnonym = () => {
    context.startLoading();
    firebase
      .auth()
      .signInAnonymously()
      .then((data) => {
        context.setAuthStatus();
        setRedirect(true);
        context.setUser(data.user!.uid);
        context.finishLoading();
      })
      .catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        context.finishLoading();
        setErrorMsg(errorMessage + `error code: ${errorCode}`);
        setTimeout(() => {
          setErrorMsg("");
        }, 5000);
      });
  };

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
                    firebaseCreateUserPassword(
                      emailRef.current!.value,
                      passwordRef.current!.value
                    )
                  }
                >
                  CREATE ACCOUNT
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={() =>
                    firebaseSigninUserWithPassword(
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
            <button onClick={() => firebaseAuthAnonym()}>LOGIN</button>
          </div>
        </div>
      ) : (
        <div>
          <i className="fa fa-cog fa-spin fa-4x" />
          {redirect ? <Redirect to="/course" /> : null}
        </div>
      )}
    </div>
  );
};

export default Landing;
