// Hero.jsx
import "./hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <section className="hero">
      <h1>
        Skip the Code.
        <br />
        Keep the Control
      </h1>
      <p>Powerful templates, endlessly customizable</p>
      <a className="hero-btn" onClick={handleGetStarted} >
        Get Started
      </a>
    </section>
  );
};

export default Hero;
