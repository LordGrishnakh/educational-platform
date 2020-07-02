import React from "react";

export const AuthContext = React.createContext({
  authenticated: false,
  loading: false,
  userId: "",
  startLoading: () => {},
  finishLoading: () => {},
  setAuthStatus: () => {},
  setUser: (a: string) => {},
  logout: () => {},
});
