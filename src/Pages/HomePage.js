import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Auth from "../components/Auth";

export const AuthContext = createContext();

const HomePage = () => {
  const [authState, setAuthState] = useState({
    whichAuth: "",
    isAuth: false,
  });

  const updateAuthState = (whichAuthValue, isAuthValue) => {
    setAuthState({
      whichAuth: whichAuthValue,
      isAuth: isAuthValue,
    });
  };
  return (
    <div>
      <AuthContext.Provider value={{ authState, updateAuthState }}>
        <Header />
        <HeroSection />
        <Auth />
      </AuthContext.Provider>
    </div>
  );
};

export default HomePage;
