import React from "react";

export interface Context {
  authenticated: boolean,
  loading: boolean,
  userId: string,
  startLoading: () => void,
  finishLoading: () => void,
  setAuthStatus: () => void,
  setUser: (a: string) => void,
  logout: () => void,
}

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
