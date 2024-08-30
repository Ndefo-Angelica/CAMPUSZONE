
import React from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <footer className="bg-pink-200 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-2 mr-7">Explore</h3>
            <ul className="space-y-1 text-sm flex flex-col items-left text-left">
              <li><a href="#" className="hover:text-pink-300 ">Social</a></li>
              <li><a href="#" className="hover:text-pink-300">Chat Bot</a></li>
              <li><a href="#" className="hover:text-pink-300">Services</a></li>
              <li><a href="#" className="hover:text-pink-300">Courses</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-2">Our Partners</h3>
            <ul className="space-y-1 text-sm flex flex-col items-left text-left">
            <li><Link to="https://istamacameroon.com/" className="hover:text-pink-500">ISTAMA</Link></li>
              <li><Link to="https://www.univ-iug.com/" className="hover:text-pink-500">IUG</Link></li>
              <li><Link to="https://myiuc.com/" className="hover:text-pink-500">IUC</Link></li>
              <li><Link to="https://www.iut-dla.cm/" className="hover:text-pink-500">IUT</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-2">Informations</h3>
            <ul className="space-y-1 text-sm flex flex-col items-left text-left">
            <li><Link to="/register" className="hover:text-pink-500">Register</Link></li>
              <li><Link to="/login" className="hover:text-pink-500">Login</Link></li>
              <li><Link to="/
              " className="hover:text-pink-500">My plans</Link></li>
              <li><Link to="/" className="hover:text-pink-500">My Courses</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row space-x-6 pt-5 justify-end content-center px-4">
            <a href="https://www.facebook.com/" className="text-white hover:text-pink-300 text-2xl content-center">
              <img src="src/assets/facebook.png" alt="Facebook" className="h-8" />
          </a>
            <a href="https://x.com/" className="text-white hover:text-pink-300 text-2xl content-center">
              <img src="src/assets/twitter.png" alt="Twitter" className="h-9" />
          </a>
            <a href="https://www.linkedin.com/" className="text-white hover:text-pink-300 text-2xl content-center">
            <img src="src/assets/linkedin.png" alt="LinkedIn" className="h-12" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
