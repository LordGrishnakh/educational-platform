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
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setAuth(true);
    }
  }, []);

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
