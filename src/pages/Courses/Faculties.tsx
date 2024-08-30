import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Faculties: React.FC = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-pink-400 mt-0  item-center text-center">
    <div className=" space-x-6 mt-0  justify-center items-center h-70">
      <div className="text-4xl pt-7 fond-bold flex justify-center items-center">
        <h1>{type === 'francophone' ? 'Francophone Faculties' : 'Anglophone Faculties'}</h1>
        <p></p>
      </div>
      <ul className="list-none">
        <div className=" justify-items-center grid-rows-1 text-2xl fond-semibold h-40 pt-5 pr-50 text-center">
          <li className='font-lg text-blue-700 hover:text-blue-900'><Link to={`/departments/science`} >Faculty of Science</Link></li>
          <li className='font-lg text-blue-700 hover:text-blue-900'><Link to={`/departments/engineering`} >Faculty of Engineering</Link></li>
          <li className='font-lg text-blue-700 hover:text-blue-900'><Link to={`/departments/arts`}>Faculty of Arts</Link></li>
        </div>
      </ul>
      </div>
      {/* Render nested routes here */}

     
    </div>
  );
}

export default Faculties;
