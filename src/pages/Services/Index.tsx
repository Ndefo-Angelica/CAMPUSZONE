import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Service from './Service';
import SystemOfStudy from './SystemOfStudy';
import Faculties from './Faculties';
import Departments from './Departments';
import Courses from './Course';
import Resources from './Resources';



const Services: React.FC = () => {
  return (
    <Router>
    
        <ul>
          <li><Link to="/services">Services</Link></li>
        </ul>

      <Routes>
        <Route path="/service" element={<Service />} />
        <Route path="/system-of-study" element={<SystemOfStudy />} />
        <Route path="/faculties/:system" element={<Faculties />} />
        <Route path="/departments/:system/:faculty" element={<Departments />} />
        <Route path="/courses/:system/:faculty/:department" element={<Courses />} />
        <Route path="/resources/:system/:faculty/:department/courseId" element={<Resources />} />
      </Routes>
    </Router>
  );
}




export default Services;
