
import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="services">
      <h2>Our services</h2>
      <div className="service-list">
        <div className="service-item" style={{ backgroundColor: '#00c4cc' }}>
          <span>Access to Courses</span>
        </div>
        <div className="service-item" style={{ backgroundColor: '#00993b' }}>
          <span>Download of Exams</span>
        </div>
        <div className="service-item" style={{ backgroundColor: '#ff8216' }}>
          <span>Exam Topics and Corrections</span>
        </div>
        <div className="service-item" style={{ backgroundColor: '#aa1f61' }}>
          <span>Timetable Management</span>
        </div>
        <div className="service-item" style={{ backgroundColor: '#ff5e5e' }}>
          <span>Technical Support</span>
        </div>
        <div className="service-item" style={{ backgroundColor: '#0086ff' }}>
          <span>Digital Library</span>
        </div>
      </div>
    </section>
  );
};

export default Services;