
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Chat</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Formations</a></li>
            <li><a href="#">Social Media</a></li>
            <li><a href="#">Department</a></li>
            <li><a href="#">Upgrade plans</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Partners</h3>
          <ul>
            <li><a href="#">IUC</a></li>
            <li><a href="#">ISTAMA</a></li>
            <li><a href="#">ESG</a></li>
            <li><a href="#">IUT</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Informations</h3>
          <ul>
            <li><a href="#">Register</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">My plans</a></li>
            <li><a href="#">My courses</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <a href="#"><i className="icon-facebook"></i></a>
        <a href="#"><i className="icon-twitter"></i></a>
        <a href="#"><i className="icon-linkedin"></i></a>
      </div>
      <div className="footer-bottom">
        <p>©2024 CampusZone All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;