import React from "react";

export interface Context {
  authenticated: boolean;
  loading: boolean;
  userId: string;
  credits: number;
  doneLections: string[];
  setDoneLectionsArray: (id: string) => void;
  increaseCredits: (credits: number) => void;
  setCourseLectures: (
    lectures: {
      duration: number;
      id: string;
      title: string;
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
  lectures: [{ duration: 0, id: "", title: "" }],
  credits: 0,
  doneLections: [""],
  setDoneLectionsArray: (id: string) => {},
  increaseCredits: (credits: number) => {},
  setCourseLectures: (
    lectures: {
      duration: number;
      id: string;
      title: string;
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
