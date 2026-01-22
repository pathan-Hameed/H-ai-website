import React from "react";
import { useNavigate } from "react-router-dom";

export default function CallToAction(props) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="cta-section">
      <p>{props.firstLine} <br/>
      {props.secondLine}</p>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
}
