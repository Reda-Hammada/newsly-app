import React from "react";
import { useState } from "react";
import { createContext } from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import Auth from "../components/Auth";
import Feed from "../components/Feed";

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
        <SearchBar />
        <Auth />
        <Feed />
      </AuthContext.Provider>
    </div>
  );
};

export default HomePage;
