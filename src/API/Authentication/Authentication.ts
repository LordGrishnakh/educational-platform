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
      firebase.database().ref('users/' + data.user?.uid ).set({
        "JS for Beginners": {
          watchedLessons: [1, 3, 1],
          rating: 0
        },
        "TS for Beginners": {
          watchedLessons: [],
          rating: 0
        },
        "CSS for Beginners": {
          watchedLessons: [],
          rating: 0
        },
        "Web Development": {
          watchedLessons: [],
          rating: 0
        },
        "React": {
          watchedLessons: [],
          rating: 0
        },
        "React with Redux": {
          watchedLessons: [],
          rating: 0
        },
        "Manage your state like pro": {
          watchedLessons: [],
          rating: 0
        },
        "HTML CSS JS": {
          watchedLessons: [],
          rating: 0
        },
        "Basics of Web Design": {
          watchedLessons: [],
          rating: 0
        },
        "Bootstrap 5": {
          watchedLessons: [],
          rating: 0
        },
        "Modern Frontend Development": {
          watchedLessons: [],
          rating: 0
        },
        "MERN Full-Stack Introduction": {
          watchedLessons: [],
          rating: 0
        },
        "Advanced CSS": {
          watchedLessons: [],
          rating: 0
        },
        "SCSS best guide 2020": {
          watchedLessons: [],
          rating: 0
        },
        "Webpack your back": {
          watchedLessons: [],
          rating: 0
        },
        "Algorithms course at MID": {
          watchedLessons: [],
          rating: 0
        },
        "Operating Systems": {
          watchedLessons: [],
          rating: 0
        },
        "Memory Management": {
          watchedLessons: [],
          rating: 0
        },
        "Time Management": {
          watchedLessons: [],
          rating: 0
        },
      });
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

export const fetchCourse = (finishLoading: () => void, setCourseLectures: (a: any) => void, route: string) => {
  firebase
    .database()
    .ref(`courses/${route}`)
    .on("value", (snap) => {
      finishLoading();
      setCourseLectures(Object.values(snap.val()));
    });
};
export const fetchCourses = (setCourses: (a: any) => void) => {
  firebase
    .database()
    .ref("courses")
    .on("value", (snap) => {
      setCourses(Object.keys(snap.val()));
    });
};

export const writeUserData = (userId: string) => {
  firebase.database().ref('users/' + userId + 1).set({
    username: "test",
    
  });
}
// export const fetchCourse = () => {
//   let courseRef = firebase.database().ref("course/");
//   courseRef.on("value", (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//       let childData = childSnapshot.val();
//       console.log(childData)
//     });
//   });
// };
