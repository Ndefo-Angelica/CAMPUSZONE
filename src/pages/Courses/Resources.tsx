import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Resources: React.FC = () => {
  const { type } = useParams();
  

 

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
  <h1 className="text-3xl font-bold text-gray-800 mb-4">{type} Resources</h1>
  
  <h2 className="text-2xl font-semibold text-gray-700 mb-6">Resources for {type}</h2>
  
  <ul className="space-y-4">
    <li className="p-4 bg-pink-100 rounded-lg shadow hover:bg-pink-200 transition-colors duration-300">
      <a href="#" className="text-pink-600 hover:text-pink-800">Notes</a>
    </li>
    <li className="p-4 bg-pink-100 rounded-lg shadow hover:bg-pink-200 transition-colors duration-300">
      <a href="#" className="text-pink-600 hover:text-pink-800">Past Exam Papers</a>
    </li>
    <li className="p-4 bg-pink-100 rounded-lg shadow hover:bg-pink-200 transition-colors duration-300">
      <a href="#" className="text-pink-600 hover:text-pink-800">Other Learning Materials</a>
    </li>
  </ul>
</div>

  );
}

export default Resources; 
