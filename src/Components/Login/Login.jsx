import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form>
          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>

          {/* Login Button */}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {/* Redirect to Sign Up */}
        <div className="login-footer">
          <span>Don't have an account? </span>
          <button className="create-account-btn" onClick={handleCreateAccountClick}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;