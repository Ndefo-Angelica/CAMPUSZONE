import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Faculties from './Faculties';

const Departments: React.FC = () => {
  const { type, faculty } = useParams<{ type: string; faculty: string }>();

  return (
    <div>
      <h1>{Faculties} Departments</h1>
      <ul>
        <li><Link to={`/services/system-of-study/faculties/${type}/departments/${faculty}/courses/computer-science`}>Computer Science</Link></li>
        <li><Link to={`/services/system-of-study/faculties/${type}/departments/${faculty}/courses/mechanical-engineering`}>Mechanical Engineering</Link></li>
        <li><Link to={`/services/system-of-study/faculties/${type}/departments/${faculty}/courses/literature`}>Literature</Link></li>
      </ul>
      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
}

export default Departments;
