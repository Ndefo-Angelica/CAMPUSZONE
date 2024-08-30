import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
//import Faculties from './Faculties';

const Departments: React.FC = () => {
  const {type} = useParams();
  const navigate = useNavigate();
 // const { type, faculty } = useParams<{ type: string; faculty: string }>();
  
  return (
    <div bg-pink-600>
      <div  >
      <h1> Departments of {type}</h1>
      </div>
      <ul>
        <li><Link to={`/course/computer-science`} >Computer Science</Link></li>
        <li><Link to={`/course/mechanical-engineering`}>Mechanical Engineering</Link></li>
        <li><Link to={`/course/literature`} >Literature</Link></li>
      </ul>
      {/* Render nested routes here */}
    
    
  </div>
  );
}

export default Departments;
