import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import axios from "axios";
import './SignUp.css';

const SignUp = ({ onSignUpSuccess }) => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.username]: e.target.value,
    });
  };

  const handleSignUp = async () => {
    const { username, email, password} = formData;
  
    if (!username || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }
  
    // if (password !== confirmPassword) {
    //   setError("Passwords do not match.");
    //   return;
    // }
  
    try {
      
      const response = await axios.post("http://localhost:9000/register", {
        username,
        email,
        password,
      });
  
      console.log("Sign up successful:", response.data);
  
     
      setFormData({
        username: "",
        email: "",
        password: ""
      });
  
      setError("");
      onSignUpSuccess?.(); 
    } catch (err) {
  
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <Box className="sign-up-container">
      <Box className="sign-up-form">
        <Typography variant="h4" className="sign-up-title">
          Create an Account
        </Typography>

        {error && <Typography className="error-text">{error}</Typography>}

        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
        />
        {/*<TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
        />*/}

        <Button
          variant="contained"
          color="primary"
          className="sign-up-button"
          fullWidth
          onClick={handleSignUp}
        >
          Sign Up
        </Button>

        <Typography className="login-link">
          Already have an account?{' '}
          <Link to="/login"  >
            Log in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;