import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Faculties: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type');

  return (
    <div>
      <h1>{type === 'francophone' ? 'Francophone Faculties' : 'Anglophone Faculties'}</h1>
      <ul>
        <li><Link to={`/services/system-of-study/faculties/${type}/departments/science`}>Faculty of Science</Link></li>
        <li><Link to={`/services/system-of-study/faculties/${type}/departments/engineering`}>Faculty of Engineering</Link></li>
        <li><Link to={`/services/system-of-study/faculties/${type}/departments/arts`}>Faculty of Arts</Link></li>
      </ul>
      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
}

export default Faculties;
