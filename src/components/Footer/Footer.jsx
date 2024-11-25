import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-links">
          <a href="#how-it-works">How It Works</a>
          <a href="#browse-festivals">Browse Festivals</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#help">Help</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-policy">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#logos">Logos</a>
        </div>
        <div className="footer-social">
          <a href="#facebook" className="social-icon facebook"></a>
          <a href="#twitter" className="social-icon twitter"></a>
          <a href="#instagram" className="social-icon instagram"></a>
        </div>
        <div className="footer-brand">
          <p>© FilmFreeway</p>
        </div>
      </footer>
  );
};

export default Footer;
