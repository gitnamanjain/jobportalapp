import React from "react";
import MyAppbar from "../appbar/MyAppbar";
import Footer from "../footer/Footer";
// import "../../../App.css";
import Cards from "./Cards";
import HeroSection from "./HeroSection";

function Homepage() {
  return (
    <>
      {/* <MyAppbar></MyAppbar> */}
      <HeroSection />
      <Cards />
      <Footer></Footer>
    </>
  );
}

export default Homepage;
