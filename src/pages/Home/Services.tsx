import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div>
      <h1>Services Page</h1>
      <ul>
        <li><Link to="/system-of-study">System of Study</Link></li>
      </ul>
    </div>
  );
}

export default Services;
