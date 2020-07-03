import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

import { Context } from "../../context/AuthContext";

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

export const firebaseAuthAnonym: (
  context: Context,
  setRedirect: (a: boolean) => void,
  setErrorMsg: (a: string) => void
) => void = (context, setRedirect, setErrorMsg) => {
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

export const firebaseCreateUserPassword: (
  context: Context,
  setErrorMsg: (errorMsg: string) => void,
  email: string,
  password: string
) => void = (context, setErrorMsg, email, password) => {
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

export const firebaseSigninUserWithPassword: (
  context: Context,
  setRedirect: (a: boolean) => void,
  setErrorMsg: (errorMsg: string) => void,
  email: string,
  password: string
) => void = (context, setRedirect, setErrorMsg, email, password) => {
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

export const fetchCourse = () => {
  firebase
    .database()
    .ref("course")
    .on("value", (snap) => {
      console.log(snap.val());
    });
};
// export const fetchCourse = () => {
//   let courseRef = firebase.database().ref("course/");
//   courseRef.on("value", (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//       let childData = childSnapshot.val();
//       console.log(childData)
//     });
//   });
// };
