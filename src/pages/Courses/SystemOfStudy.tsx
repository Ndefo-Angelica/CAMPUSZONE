import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SystemOfStudy: React.FC = () => {
  return (
    <div>
      <h1>System of Study</h1>
      <ul>
        <li><Link to="/services/faculties?type=francophone">Francophone</Link></li>
        <li><Link to="/services/faculties?type=anglophone">Anglophone</Link></li>
      </ul>
      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
}

export default SystemOfStudy;
