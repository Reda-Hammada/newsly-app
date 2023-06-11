import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { useSelector } from "react-redux";
import useUserFromLocalStorage from "../hooks/useUserFromLocalStorage";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import Auth from "../components/Auth";
import Feed from "../components/Feed";
import Footer from "../components/Footer";

export const AuthContext = createContext();

const HomePage = () => {
  const { isAuthenticated } = useSelector((state) => state.auth || {});
  const user = useUserFromLocalStorage();

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
    <div className="overflow-y-scroll overflow-x-hidden h-screen">
      <AuthContext.Provider value={{ authState, updateAuthState }}>
        <Header />
        <HeroSection />
        {isAuthenticated === true ? <SearchBar /> : <Auth />}
        <Feed />
        <Footer />
      </AuthContext.Provider>
    </div>
  );
};

export default HomePage;
