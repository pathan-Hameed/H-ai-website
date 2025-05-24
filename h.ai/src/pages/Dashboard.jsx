import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import TemplateSection from "../components/templateSection/TemplateSection";
import MiddleSection from "../components/MiddleSection";
import CallToAction from "../components/CallToAction";

function Dashboard() {

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <Hero />

        {/* Middle Section */}
        <MiddleSection />

        {/* Template Section */}
        <TemplateSection />

        {/* How It Works */}
        <section className="how-it-works">
          <h2>How it works</h2>
          <ol>
            <li>
              <strong>Choose a Template</strong>
              <p>Pick the template that fits your project or idea.</p>
            </li>
            <li>
              <strong>Click ‘Edit’ to Customize</strong>
              <p>Click the edit button and start customizing.</p>
            </li>
            <li>
              <strong>Make It Yours</strong>
              <p>Update text, images, and titles freely.</p>
            </li>
            <li>
              <strong>Save Your Changes</strong>
              <p>Click Save to keep your changes.</p>
            </li>
            <li>
              <strong>Download Your Code</strong>
              <p>Download your final design with one click.</p>
            </li>
          </ol>
        </section>

        {/* Call to Action */}
        <CallToAction
          firstLine={"Design freely."}
          secondLine={"Download instantly."}
        />
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
