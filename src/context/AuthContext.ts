import React from "react";

export const AuthContext = React.createContext({
  authenticated: false,
  loading: false,
  startLoading: () => {},
  finishLoading: () => {},
  setUser: () => {},
  logout: () => {},
});
