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

  

  return (
    <div className="overflow-y-scroll overflow-x-hidden h-screen">
        <Header />
        <HeroSection />
        {isAuthenticated === true ? <SearchBar /> : <Auth />}
        <Feed />
        <Footer />
    </div>
  );
};

export default HomePage;
