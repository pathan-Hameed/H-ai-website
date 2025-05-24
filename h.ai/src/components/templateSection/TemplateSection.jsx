import React from "react";
import TemplateCard from "../TemplateCard";
import { useNavigate } from "react-router-dom";
import './templateSection.css'

export default function TemplateSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <section id="templates" className="template-section-dashboard">
      <div className="top">
        <h2>Start Strong With the Right Template</h2>
        <ul>
          <li>
            <p>
              Kick off your project with a layout that’s built for impact. Easy
              to customize, ready to launch.
            </p>
          </li>
          <li>
            <button onClick={handleGetStarted} className="nav-started">
              Get Started
            </button>
          </li>
        </ul>
      </div>

      <div className="template-cards">
        <TemplateCard url={"h.aisrcassetsTemplate.png"} imgName="portfolio" />
        <TemplateCard url="./Template.png" imgName="e-commerce" />
        <TemplateCard url="./Template.png" imgName="travels" />
        <TemplateCard url="./Template.png" imgName="services" />
      </div>
    </section>
  );
}
