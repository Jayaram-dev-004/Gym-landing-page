import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/signup");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

// Requesting form server
const handleSubmit = async (e) => {
  e.preventDefault();
  const { email, password } = formData;

  if (!email || !password) {
    setError("Please fill out all fields.");
    return;
  }

  try {
    const response = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });

    console.log("Login successful:", response.data);
    setError(""); 
    setFormData({ email: "", password: "" }); 
    navigate("/dashboard"); 
    

  } catch (err) {
   
    if (err.response && err.response.data) {
      setError(err.response.data.message);
    } else {
      setError("An error occurred. Please try again.");
    }
  }
};

return (
  <div className="login-container">
    <div className="login-card">
      <h2>Login</h2>
      {error && <p className="error-text">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <div className="login-footer">
        <span>Don't have an account? </span>
        <a
          className="create-account-btn"
          onClick={handleCreateAccountClick}
          href="#"
        >
          Create Account
        </a>
      </div>
    </div>
  </div>
);
};

export default Login;