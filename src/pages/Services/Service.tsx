import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Service: React.FC = () => {
  return (
    <div>
      <h1>Services Page</h1>
      <ul>
        <li><Link to="/services/system-of-study">System of Study</Link></li>
      </ul>
      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
}

export default Service;
