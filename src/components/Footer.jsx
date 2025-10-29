import React from "react";
import "./Footer.css";
import kaoLogo from "../assets/kao_logo.avif";

function Footer() {
  return (
    <footer className="footer">
      {/* --- Top Social Links --- */}
      <div className="footer-top">
        <a href="#">INSTAGRAM</a>
        <a href="#">FACEBOOK</a>
        <a href="#">YOUTUBE</a>
      </div>

      {/* --- Middle Section --- */}
      <div className="footer-main">
        <div className="footer-column">
          <h3 className="footer-heading italic">company</h3>
          <ul>
            <li><a href="#">CARRY US</a></li>
            <li><a href="#">CAREERS</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="#">PRIVACY POLICY</a></li>
            <li><a href="#">TERMS & CONDITIONS</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading italic">customer care</h3>
          <ul>
            <li><a href="#">FAQS</a></li>
            <li><a href="#">INGREDIENTS</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">COMMITMENTS</a></li>
            <li><a href="#">ACCESSIBILITY</a></li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h3 className="footer-heading italic">
            Let’s get this straight into your inbox.
          </h3>
          <p className="newsletter-desc">
            By subscribing, you agree to receive Marketing Emails from Oribe. 
            You may unsubscribe at any time. To find out more, visit our <a href="#">Privacy Policy</a>.
          </p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter email address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="footer-bottom">
        <p>© 2025 ORIBE. All rights reserved. Oribe is part of KAO Salon Division.</p>
        <img src={kaoLogo} alt="KAO Salon Division Logo" className="footer-logo" />
      </div>
    </footer>
  );
}

export default Footer;
