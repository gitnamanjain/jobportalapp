import React from "react";
// import '../../App.css';
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video3.mp4" autoPlay loop muted />
      <h1>Job Search Made Easier</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Link style={{ textDecoration: "none" }} to="/viewjobs">
          <div
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
