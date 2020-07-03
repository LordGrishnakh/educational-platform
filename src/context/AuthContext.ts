import React from "react";

export interface Context {
  authenticated: boolean,
  loading: boolean,
  userId: string,
  setCourseLectures: (lectures: {
    duration: number;
    id: number;
    title: string;
  }[]) => void,
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
  lectures: [{ duration: 0, id: 0, title: "", }],
  setCourseLectures: (lectures: {
    duration: number;
    id: number;
    title: string;
  }[]) => {},
  startLoading: () => {},
  finishLoading: () => {},
  setAuthStatus: () => {},
  setUser: (a: string) => {},
  logout: () => {},
});
