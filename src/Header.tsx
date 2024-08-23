
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-top">
        <p>Formation: 14 / 05/24</p>
        <div className="header-actions">
          <button className="btn login-btn">Login</button>
          <button className="btn account-btn">Account</button>
        </div>
      </div>
      <nav className="navbar">
        <h1>CampusZone</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>Services</li>
          <li>Chat</li>
          <li>Formations</li>
          <li>Contacts</li>
          <li>Account</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;