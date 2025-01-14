import React, { useEffect, useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png";
import googleApp from "../../assets/playstore.svg.png";
import appStore from "../../assets/appstore.svg.png";
import Button_txt from '../Button/Button_txt.jsx';

const useOnScreen = (ref, threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isVisible;
};

const Contact = () => {
  const footerRef = React.useRef(null);
  const isFooterVisible = useOnScreen(footerRef);

  return (
    <footer  className={`footer ${isFooterVisible ? "fade-in" : ""}`} id='contact' ref={footerRef}>
      <div className="footer-content">
        <div className="footer-left">
          {/* Logo Section */}
          <div className="footer-logo">
            <img src={logo} alt="FitNexus Logo" />
          </div>

          {/* Call-Back Form */}
          <div className="footer-callback">
            <h3>Request A Call-Back</h3>
            <form className="callback-form">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="callback-input"
              />
              <Button_txt name = {'Submit'}/>
            </form>
          </div>

          {/* Social Media Icons */}
          <div className="footer-social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          {/* App Links */}
          <div className="footer-app-links">
            <img src={googleApp} alt="Google Play" />
            <img src={appStore} alt="App Store" />
          </div>
        </div>

        {/* Footer Right Sections */}
        <div className="footer-right">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Program</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Category</h3>
            <ul>
              <li><a href="#">Strength Training</a></li>
              <li><a href="#">Fitness</a></li>
              <li><a href="#">Cardio Program</a></li>
              <li><a href="#">Weight Gain</a></li>
              <li><a href="#">Fat Loss</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="tel:+919042364236">📞 +91 90423 64236</a></li>
              <li><a href="mailto:fitnexus@gmail.com">📧 fitnexus@gmail.com</a></li>
              <li>📍 OMR, Semmencherry, Chennai</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© FitNexus, 2024 All rights reserved by Unovay Technologies Private Limited</p>
      </div>
    </footer>
  );
};

export default Contact;