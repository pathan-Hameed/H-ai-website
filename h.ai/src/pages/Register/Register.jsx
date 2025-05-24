import React from "react";
import "./Register.css"; // Create this file next

const Register = () => {
  return (
    <div className="register-container">
      {/* Logo */}
      <div className="logo-container">
      <div className="login-logo">H.ai</div>
      </div>

      {/* Main Content */}
      <div className="register-main">
        <div className="register-box-wrapper">
          {/* Register Form */}
          <div className="register-form">
            <h2>Create Account</h2>
            <form>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter a password" />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm your password" />
              </div>
              <div className="have-account">
                <span>Already have an account? </span>
                <a href="/login">Login</a>
              </div>
              <button type="submit" className="submit-btn">
                Register
              </button>
            </form>
          </div>

          {/* Social Register Buttons */}
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

export default Register;
