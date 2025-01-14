import React, { useEffect } from "react";
import "./Pricing.css";
import Button_txt from '../Button/Button_txt.jsx';

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "$35",
      features: [
        "Gym without Trainers",
        "Unlimited Access",
        "Access to all Clubs",
        "Training for all Classes",
        "Executive Studio",
        "Additional Session",
      ],
    },
    {
      title: "Standard",
      price: "$50",
      features: [
        "Gym without Trainers",
        "Unlimited Access",
        "Access to all Clubs",
        "Training for all Classes",
        "Executive Studio",
        "Additional Session",
      ],
    },
    {
      title: "Professional",
      price: "$65",
      features: [
        "Gym without Trainers",
        "Unlimited Access",
        "Access to all Clubs",
        "Training for all Classes",
        "Executive Studio",
        "Additional Session",
      ],
    },
  ];

  // Intersection Observer to trigger animations on scroll
  useEffect(() => {
    const cards = document.querySelectorAll(".pricing-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.5 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div id = 'pricing' className="pricing-container">
      <h1 className="pricing-heading">Choose The Best One</h1>
      <p className="pricing-subheading">
        Choose the correct plan which is best for your body
      </p>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h2 className="card-title">{plan.title}</h2>
            <p className="card-price">
              {plan.price}
              <span>/month</span>
            </p>
            <ul className="card-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
              <Button_txt name = {'Join Now'}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;