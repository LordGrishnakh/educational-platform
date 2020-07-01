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
        // setRedirect(true);
        context.setUser();
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

  const firebaseAuthAnonym = () => {
    context.startLoading();
    firebase
      .auth()
      .signInAnonymously()
      .then((data) => {
        setRedirect(true);
        context.setUser();
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
      {<h1 style={{ color: "red" }}>{errorMsg}</h1>}
      {!context.loading ? (
        <div className="login-box">
          <h1>Please login first</h1>
          <div className="login-group">
            <h2>Login via login+password</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                firebaseCreateUserPassword(
                  emailRef.current!.value,
                  passwordRef.current!.value
                );
              }}
            >
              <label>email</label>
              <input type="email" ref={emailRef} />
              <label>password</label>
              <input type="password" ref={passwordRef} />
              <button type="submit">CREATE ACCOUNT</button>
            </form>
          </div>
          <div className="login-group">
            <h2>Simmulate logging in</h2>
            <button onClick={() => firebaseAuthAnonym()}>Login</button>
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
