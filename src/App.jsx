// import About from './Components/AboutUs/About.jsx'
// import Contact from './Components/Contact/Contact.jsx'
// import Header from './Components/Home/Header.jsx'
// import Home from './Components/Home/Home.jsx'
// import Pricing from './Components/Pricing/Pricing.jsx'
// import Program from './Components/Program/Program.jsx'
// import Login from './Components/Login/Login.jsx'
// import SignUp from './Components/SignUp/SignUp.jsx'
// function App() {

//   return (
//     <>
//       <Login/>
//       <SignUp/>
//       <Header/>
//       <Home/>
//       <About/>
//       <Program/>
//       <Pricing/>
//       <Contact/>
//     </>
//   )
// }

// export default App
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