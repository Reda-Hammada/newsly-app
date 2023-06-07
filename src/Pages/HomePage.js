import React from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Auth from "../components/Auth";

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Auth />
    </div>
  );
}

export default HomePage;
