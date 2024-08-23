
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-top">
        <span className="header-date">Formation: 14/05/24</span>
        <div className="header-buttons">
          <button className="btn header-btn">Login</button>
          <button className="btn header-btn">Account</button>
        </div>
      </div>
      <div className="header-bottom">
        <div className="logo">
          <img src="./assets/logo.jpeg" alt="CampusZone Logo" />
          <span className="logo-text">CampusZone</span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Chat</a></li>
            <li><a href="#">Formations</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;