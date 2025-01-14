import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";
import './SignUp.css';

const SignUp = ({ onSignUpSuccess }) => {

  const navigate = useNavigate();
  
    const handlelogInAccountClick = () => {
      navigate("/login");
    };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = () => {
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    onSignUpSuccess?.();
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
          name="name"
          value={formData.name}
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
        <TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
        />

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
          <Link underline="hover" onClick={handlelogInAccountClick}>
            Log in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;