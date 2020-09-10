import React from "react";

export interface Context {
  authenticated: boolean;
  loading: boolean;
  userId: string;
  credits: number;
  doneLections: number[];
  setDoneLectionsArray: (id: number) => void;
  increaseCredits: (credits: number) => void;
  setCourseLectures: (
    lectures: {
      duration: number;
      id: number;
      title: string;
      done: boolean;
    }[]
  ) => void;
  startLoading: () => void;
  finishLoading: () => void;
  setAuthStatus: () => void;
  setUser: (a: string) => void;
  logout: () => void;
  route: string,
  setRouteProp: (route: string) => void
}

export const AuthContext = React.createContext({
  authenticated: false,
  loading: false,
  userId: "",
  lectures: [{ duration: 0, id: 0, title: "", done: false }],
  credits: 0,
  doneLections: [1],
  setDoneLectionsArray: (id: number) => {},
  increaseCredits: (credits: number) => {},
  setCourseLectures: (
    lectures: {
      duration: number;
      id: number;
      title: string;
      done: boolean;
    }[]
  ) => {},
  startLoading: () => {},
  finishLoading: () => {},
  setAuthStatus: () => {},
  setUser: (a: string) => {},
  logout: () => {},
  route: "",
  setRouteProp: (r: string) => {}
});
