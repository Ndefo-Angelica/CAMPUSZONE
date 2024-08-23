// src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h2>Contact With Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="icon-location"></i>
          <p>Douala - Cameroun<br />Akwa, Direction General Mtn</p>
        </div>
        <div className="contact-item">
          <i className="icon-phone"></i>
          <p>+237 6702986317 / 23789126572</p>
        </div>
        <div className="contact-item">
          <i className="icon-email"></i>
          <p>client@campuszone.com</p>
        </div>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <input type="text" placeholder="School" />
        <textarea placeholder="Your comments"></textarea>
        <button className="btn send-btn">Send your message</button>
      </div>
    </section>
  );
};

export default Contact;