import { useNavigate } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };
  
  const handleTemplateClick = () => {
    navigate("/templates");
  }

  const handleHomeClick = () => {
    navigate("/");
  }

  const handleLogo = (e) => {
    navigate ('/'); // Redirect to registration page
  };

  return (
    <nav className="navbar">
      <div className="left">
        <div className="logo" onClick={handleLogo}>H.ai</div>
        <div className="nav-links">
          <a onClick={handleHomeClick}>Home</a>
          <a onClick={handleTemplateClick}>Templates</a>
        </div>
      </div>

      <div className="nav-actions">
        <button onClick={() => navigate("/login")} className="nav-login">
          Login
        </button>
        <button onClick={handleGetStarted} className="nav-started">
          Get Started
        </button>
      </div>
    </nav>
  );
}
