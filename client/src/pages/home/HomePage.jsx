import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    navigate("/login");
  };
  const handleSignUpSubmit = () => {
    navigate("/signup");
  };

  return (
    <div>
      <HeroSection
        handleLoginSubmit={handleLoginSubmit}
        handleSignUpSubmit={handleSignUpSubmit}
      />
    </div>
  );
};

export default HomePage;
