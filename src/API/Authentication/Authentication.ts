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

const routeToIndex = (route: string) => {
  switch (route) {
    case "JS for Begginers":
      return 0;
    case "TS for Beginners":
      return "1";
    case "CSS for Beginners":
      return "2";
    case "Web Development":
      return "3";
    case "React":
      return "4";
    case "React with Redux":
      return "5";
    case "Manage your state like pro":
      return "6";
    case "HTML CSS JS":
      return "7";
    case "Basics of Web Design":
      return "8";
    case "Bootstrap 5":
      return "9";
    case "Modern Frontend Development":
      return "10";
    case "MERN Full-Stack Introduction":
      return "11";
    case "Advanced CSS":
      return "12";
    case "SCSS Best Guide 2020":
      return "13";
    case "Webpack your back":
      return "14";
    case "Algorithms course at MID":
      return "15";
    case "Operating Systems":
      return "16";
    case "Memory Management":
      return "17";
    case "Time Management":
      return "18";
  
    default:
      return "0";
  }
}

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
      firebase
        .database()
        .ref("users/" + data.user?.uid)
        .set([
          {
            title: "JS for Beginners",
            imgUrl:
              "https://images.unsplash.com/photo-1592609931041-40265b692757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=180&q=80",
            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "TS for Beginners",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "CSS for Beginners",
            imgUrl:
              "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Web Development",
            imgUrl:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=180&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "React",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "React with Redux",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Manage your state like pro",
            imgUrl:
              "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "HTML CSS JS",
            imgUrl:
              "https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Basics of Web Design",
            imgUrl:
              "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Bootstrap 5",
            imgUrl:
              "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Modern Frontend Development",
            imgUrl:
              "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "MERN Full-Stack Introduction",
            imgUrl:
              "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Advanced CSS",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "SCSS Best Guide 2020",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Webpack your back",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Algorithms course at MID",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Operating Systems",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Memory Management",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Time Management",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
        ]);
      setRedirect(true);
      context.setUser(data.user!.uid);
      context.finishLoading();
    })
    .catch(function (error) {
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
      firebase
        .database()
        .ref("users/" + data.user?.uid)
        .set([
          {
            title: "JS for Beginners",
            imgUrl:
              "https://images.unsplash.com/photo-1592609931041-40265b692757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=180&q=80",
            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "TS for Beginners",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "CSS for Beginners",
            imgUrl:
              "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Web Development",
            imgUrl:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=180&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "React",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "React with Redux",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Manage your state like pro",
            imgUrl:
              "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "HTML CSS JS",
            imgUrl:
              "https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Basics of Web Design",
            imgUrl:
              "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Bootstrap 5",
            imgUrl:
              "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Modern Frontend Development",
            imgUrl:
              "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "MERN Full-Stack Introduction",
            imgUrl:
              "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Advanced CSS",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "SCSS Best Guide 2020",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Webpack your back",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Algorithms course at MID",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Operating Systems",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Memory Management",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
          {
            title: "Time Management",
            imgUrl:
              "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

            watchedLessons: [""],
            rating: 0,
          },
        ]);
      context.finishLoading();
    })
    .catch(function (error) {
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
      localStorage.setItem("userId", data.user!.uid);
      context.setUser(data.user!.uid);
      context.finishLoading();
    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      context.finishLoading();
      setErrorMsg(errorMessage + `error code: ${errorCode}`);
      setTimeout(() => {
        setErrorMsg("");
      }, 15000);
    });
};

export const fetchCourse = (
  finishLoading: () => void,
  setCourseLectures: (a: any) => void,
  setSelectedLecture: (a: any) => void,
  fetchDoneLections: (a: any) => void,
  route: any,
  userId: string | null
) => {
  firebase
    .database()
    .ref(`courses/${route}`)
    .on("value", (snap) => {
      setCourseLectures(Object.values(snap.val()));
      setSelectedLecture(Object.values(snap.val())[0])
      finishLoading();
    });
  firebase
    .database()
    .ref(`users/${userId}/${routeToIndex(route)}/watchedLessons`)
    .on("value", (snap) => {
      fetchDoneLections(snap.val());
    })
};
export const fetchCourses = (
  setCourseProgress: (a: any) => void,
  route: any
) => {
  firebase
    .database()
    .ref(route)
    .on("value", (snap) => {
      setCourseProgress(snap.val());
    });
};

export const makeProgress = (userId: string | null, route: any, doneLections: any) => {
  firebase.database().ref(`users/${userId}/${routeToIndex(route)}/watchedLessons`).set(doneLections)
}

export const setRating = (userId: any, courseIdx: number, ratingValue: number ) => {
  firebase.database().ref(`users/${userId}/${courseIdx}`).update({
    rating: ratingValue
  });
}