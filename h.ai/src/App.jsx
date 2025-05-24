import React from "react";
import './App.css'
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import Templates from "./pages/template/Templates";
import Login from "./pages/Login";

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
