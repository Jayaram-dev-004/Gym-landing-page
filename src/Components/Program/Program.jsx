import React, { useEffect } from 'react';
import './Program.css';
import Button_txt from '../Button/Button_txt.jsx'
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';
import img8 from '../../assets/8.png';

const Program = () => {
  const programs = [
    { img: img1, title: 'Fitness Training', description: "Transform your body and mind with our personalized fitness training programs tailored to your goals.", btnText: 'Learn More' },
    { img: img2, title: 'Group Fitness', description: "Transform together with our Group Fitness program – energizing workouts designed to motivate and connect!", btnText: 'Learn More' },
    { img: img3, title: 'Personal Trainer', description: 'Achieve your fitness goals faster with our expert Personal Trainer program, offering tailored workouts and one-on-one guidance.', btnText: 'Learn More' },
    { img: img4, title: 'Cardio Program', description: 'Boost your heart health and endurance with our dynamic Cardio programs, designed to keep you moving and energized!', btnText: 'Learn More' },
    { img: img5, title: 'Weight Gain', description: 'Achieve your goals with our tailored Weight Gain program, designed to build muscle and boost strength effectively.', btnText: 'Learn More' },
    { img: img6, title: 'Strength Training', description: 'Build power and endurance with our Strength Program, designed to help you lift, push, and conquer your fitness goals.', btnText: 'Learn More' },
    { img: img7, title: 'Fat Loss', description: 'Transform Your Body with Our Expert Fat Loss Program – Achieve a Leaner, Healthier You!', btnText: 'Learn More' },
    { img: img8, title: 'Physical Fitness', description: 'Elevate your well-being with our tailored Physical Fitness programs, designed to build strength, boost endurance, and enhance overall health.', btnText: 'Learn More' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.8 }
    );

    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div id="program" className="program-container">
      <div className="program-heading-container">
        <h1 className="program-heading">Our Programs</h1>
      </div>

      <div className="program-img-container">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <img src={program.img} alt={program.title} className="program-image" />
            <div className="program-overlay">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
             <Button_txt name = {'Learn More'}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;

