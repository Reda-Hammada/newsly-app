import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import Auth from "../components/Auth";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
const HomePage = () => {
  const { isDarkTheme } = useSelector((state) => state.theme);

  const { isAuthenticated } = useSelector((state) => state.auth || {});

  return (
    <div
      className={`overflow-y-scroll overflow-x-hidden h-screen ${
        isDarkTheme ? "bg-dark-theme-color text-white" : "bg-white  text-black "
      }`}
    >
      <Header />
      <HeroSection />
      {isAuthenticated === true ? <SearchBar /> : <Auth />}
      <Feed />
      <Footer />
    </div>
  );
};

export default HomePage;
