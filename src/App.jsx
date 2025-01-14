import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/About";
import Program from "./Components/Program/Program";
import Pricing from "./Components/Pricing/Pricing";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page with Header and Other Sections */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <About />
              <Program />
              <Pricing />
              <Contact />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Sign Up Page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Catch-All Redirect to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;