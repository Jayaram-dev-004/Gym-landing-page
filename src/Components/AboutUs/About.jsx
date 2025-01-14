import React, { useEffect, useState } from 'react';
import thumbel from '../../assets/thumbel.jpg';
import Button_txt from '../Button/Button_txt.jsx';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const aboutSection = document.querySelector('#about');
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <div
      id="about"
      className={`about-container ${isVisible ? 'animate' : ''}`} // Add the "animate" class on visibility
    >
      {/* Image Section */}
      <div className="about-img-container">
        <img src={thumbel} alt="Thumbel" className="about-img" />
      </div>

      {/* Content Section */}
      <div className="about-content-container">
        <div className="about-text">
          <h1 className="about-heading">Get Ready To Achieve Your Fitness Plan</h1>
          <p className="about-para">
            Just believe in yourself. Even if you don't, just pretend that you do, and at some point, you will.
            "The harder you work and the more prepared you are for something, you're going to be able to persevere through anything."
          </p>
        </div>
        <div className="about-btn">
          <Button_txt name={'Free Trial Now'} />
        </div>
      </div>
    </div>
  );
};

export default About;