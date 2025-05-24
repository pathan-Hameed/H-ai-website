import "./Login.css"; // Make sure this path is correct based on your file structure
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    navigate ('/register'); // Redirect to registration page
  };

  return (
    <div className="login-container">
      {/* Logo */}
      <div className="logo-container">
        <div className="login-logo">H.ai</div>
      </div>

      {/* Main Content */}
      <div className="login-main">
        <div className="login-box-wrapper">
          {/* Login Form */}
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>Email or Username</label>
                <input type="text" placeholder="Enter email or username" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
              </div>
              <div className="forgot-link">
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" className="submit-btn">
                Login
              </button>
              <p className="register-label">
                Dont have an account? Sign up Here
              </p>
              <button
                type="submit"
                className="register-btn"
                onClick={handleRegistration}
              >
                Register
              </button>
            </form>
          </div>

          {/* Social Login Buttons */}
          <div className="social-login">
            <button className="google-btn">Sign in with Google</button>
            <button className="facebook-btn">Sign in with Facebook</button>
            <button className="twitter-btn">Sign in with Twitter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
