import React from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';

const SystemOfStudy: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='bg-pink-400 p-4  shadow-md h-150 '>
        <h1 className="text-3xl fond-bold mb-4 flex justify-center item- center">System of Study</h1>
        <ul className='list-non'>
          <div className='grid-row-2'>
          <div className='flex justify-center item-center  h-20 rounded-lg gb-pink-200'>
            <li className='mb-2'>
              <Link to='/faculties/francophone' className='text-lg font-lg text-blue-700 hover:text-blue-900'>Francophone</Link>
            </li>
          </div>
          <div className='flex justify-center item-center  h-20 rounded-lg gb-pink-200'>
            <li>
              <Link to='/faculties/anglophone' className='text-lg font-lg text-blue-700 hover:text-blue-900'>Anglophone</Link>
            </li>
          </div>
          </div>
        </ul>
        {/* Render nested routes here */}
        <Outlet />
      </div >
     
    </div >


  );
}

export default SystemOfStudy;
