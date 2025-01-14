import React from "react";
import "./Home.css";
import woman from '../../assets/image 1.jpg'; 
import Button_txt from '../Button/Button_txt.jsx';


const Home = () => {
  return (
    <div id='#home' className="home">
      {/* Text Section */}
      <div className="home-content">
        <h1 className="home-title">Give Your Muscle More Strength</h1>
        <p className="home-subtitle">Start your workout to keep your body fit and healthy.</p>
        <p className="home-subtitle">Exercise with us here!</p>
        <Button_txt name = {'Get Started'} />

        {/* Gym Girl Image */}
        <div className="gym-girl-wrapper">
          <img className="gym-girl-image" src={woman} alt="Female Fitness" />
        </div>
      </div>
    </div>
  );
};

export default Home;
