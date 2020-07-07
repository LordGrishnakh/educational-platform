import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CoursePage from "./components/CoursePage/CoursePage";
import CommunityPage from "./components/CommunityPage/CommunityPage";
import Tracking from "./components/Tracking/Tracking";
import Landing from "./components/Landing/Landing";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [credits, setCredits] = useState(0);
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState("");
  const [load, setLoad] = useState(false);
  const [lectures, setLectures] = useState<{
    duration: number;
    id: number;
    title: string;
  }[]>([{ duration: 2841, id: 1, title: "some NEW title of lecture" }]);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setAuth(true);
    }
  }, []);

  const increaseCredits = (credit: number) => {
    setCredits(credits + credit)
  }

  const setCourseLectures = (lectures: {
    duration: number;
    id: number;
    title: string;
  }[]) => {
    setLectures(lectures)
  }

  const setAuthStatus = () => {
    setAuth(true);
  };
  const setUser = (uid: string) => {
    localStorage.setItem("userId", uid);
    setUserId(uid);
  };
  const logout = () => {
    localStorage.removeItem("userId");
    setAuth(false);
  };
  const startLoading = () => {
    setLoad(true);
    console.log(load);
  };
  const finishLoading = () => {
    setLoad(false);
    console.log(load);
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: auth,
        loading: load,
        userId: userId,
        lectures: lectures,
        credits: credits,
        increaseCredits: increaseCredits,
        setCourseLectures: setCourseLectures,
        startLoading: startLoading,
        finishLoading: finishLoading,
        setAuthStatus: setAuthStatus,
        setUser: setUser,
        logout: logout,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/course" component={CoursePage} />
            <Route path="/community" component={CommunityPage} />
            <Route path="/tracking" component={Tracking} />
          </Switch>
          {/* <Route path="/settings" component={Settings} /> */}
          {/* <Route path="/logout" component={Logout} /> */}
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
