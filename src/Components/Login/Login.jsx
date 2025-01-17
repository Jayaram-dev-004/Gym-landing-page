import {React, useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import "./Login.css";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    username: "",
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
  const { username, password } = formData;

  if (!username || !password) {
    setError("Please fill out all fields.");
    return;
  }

  try {
    const response = await axios.post("https://loginpage-uij1.onrender.com/login", {
      username,
      password,
    });

    console.log("Login successful:", response.data);
    setError(""); 
    setFormData({ username: "", password: "" }); 
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
      <form id = 'login-form' onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
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
        <Link to ="/signup">Create an account</Link>
      </div>
    </div>
  </div>
);
};

export default Login;