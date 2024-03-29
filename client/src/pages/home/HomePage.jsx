import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
const HomePage = () => {
  const navigate = useNavigate();
  //   const [isLoggedIn, setIsLoggedIn] = useState(
  //     localStorage.getItem("isLoggedIn")
  //   );

  //   const handleSignOut = () => {
  //     setIsLoggedIn(false);
  //     localStorage.removeItem("user");
  //   };

  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default HomePage;
