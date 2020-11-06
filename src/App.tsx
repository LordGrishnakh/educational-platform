import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CoursePage from "./components/CoursePage/CoursePage";
import CommunityPage from "./components/CommunityPage/CommunityPage";
import Tracking from "./components/Tracking/Tracking";
import Landing from "./components/Landing/Landing";
import { AuthContext } from "./context/AuthContext";
import ChooseCoursePage from "./components/ChooseCoursePage/ChooseCoursePage";
import Settings from "./components/Settings/Settings";

function App() {
  const [credits, setCredits] = useState(0);
  const [auth, setAuth] = useState(false);
  const [route, setRoute] = useState("");
  const [userId, setUserId] = useState("");
  const [load, setLoad] = useState(false);
  const [doneLections, setDoneLections] = useState<string[]>([""]);
  const [lectures, setLectures] = useState<
    {
      duration: number;
      id: string;
      title: string;
    }[]
  >([{ duration: 0, id: "1", title: "0" }]);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setAuth(true);
    }
    if (!localStorage.getItem("username")) {
      localStorage.setItem("username", "Rogi");
    }
  }, []);

  const setDoneLectionsArray = (idx: string) => {
    const copyDoneLections = doneLections.slice();
    copyDoneLections.push(idx);
    localStorage.setItem("doneLections", JSON.stringify(copyDoneLections));
    setDoneLections(copyDoneLections);
  };

  const increaseCredits = (credit: number) => {
    setCredits(credits + credit);
  };

  const setCourseLectures = (
    lectures: {
      duration: number;
      id: string;
      title: string;
    }[]
  ) => {
    setLectures(lectures);
  };

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
  };
  const finishLoading = () => {
    setLoad(false);
  };
  const setRouteProp = (route: string) => {
    localStorage.setItem("route", route);
    setRoute(route);
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: auth,
        loading: load,
        userId: userId,
        lectures: lectures,
        credits: credits,
        doneLections: doneLections,
        setDoneLectionsArray: setDoneLectionsArray,
        increaseCredits: increaseCredits,
        setCourseLectures: setCourseLectures,
        startLoading: startLoading,
        finishLoading: finishLoading,
        setAuthStatus: setAuthStatus,
        setUser: setUser,
        logout: logout,
        route: route,
        setRouteProp: setRouteProp,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/courses" exact component={ChooseCoursePage} />
            <Route path="/courses/:id" component={CoursePage} />
            <Route path="/community" component={CommunityPage} />
            <Route path="/tracking" component={Tracking} />
            <Route path="/settings" component={Settings} />
          </Switch>
          {/* <Route path="/logout" component={Logout} /> */}
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
