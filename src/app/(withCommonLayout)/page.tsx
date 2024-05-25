import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import FooterGrid from "@/components/shared/Footer/FooterGrid";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FooterGrid />
    </>
  );
};

export default HomePage;
