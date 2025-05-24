import React from "react";
import { useNavigate } from "react-router-dom";
import aboutPic from "../assets/about-pic.png"; // Assuming you have an image in the assets folder

export default function MiddleSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
      <section className="middle-section">
        <div className="middle-left">
          <h2>
            Building Websites Should Be Effortless.
            <br />
            We Make It That Way.
          </h2>
          <ul>
            <li>Template-Ready</li>
            <li>Design Your Way</li>
            <li>Download Your Code</li>
          </ul>
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
        <div className="middle-right">
          <img src={aboutPic} alt="illustration" />
        </div>
      </section>
  );
}
