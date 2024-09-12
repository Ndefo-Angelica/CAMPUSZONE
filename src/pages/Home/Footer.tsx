
import React from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <footer className="bg-pink-200 py-10">
      <div className="max-w-7xl mx-auto px-4">
<<<<<<< HEAD
        <div className="grid grid-cols-3 md:grid-rows-3 gap-6 ">
          <div className="flex flex-col justify-start">
            <h3 className="font-bold text-lg mb-2 mr-7">Explore</h3>
            <ul className="space-y-1 text-sm flex flex-col items-left text-left">
              <li><a href="#" className="hover:text-pink-300 ">Social</a></li>
              <li><a href="#" className="hover:text-pink-300">Chat Bot</a></li>
              <li><a href="#" className="hover:text-pink-300">Services</a></li>
              <li><a href="#" className="hover:text-pink-300">Courses</a></li>
=======
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-sm mb-2 mr-2">Explore</h3>
            <ul className="space-y-1 mb-5 text-sm flex flex-col items-left text-left">
            <li><Link to="/social" className="hover:text-pink-500">Social</Link></li>
              <li><Link to="/chat" className="hover:text-pink-500">Chatbot</Link></li>
              <li><Link to="/services" className="hover:text-pink-500">Services</Link></li>
              <li><Link to="/courses" className="hover:text-pink-500">Courses</Link></li>
>>>>>>> ece5115b1c6ac3eabc426b85e1a788424f4fb364
            </ul>
            <a href="https://www.facebook.com/" className="text-white hover:text-pink-300 text-2xl content-center ">
              <img src="/images/facebook.png" alt="Facebook" className="h-8" />
            </a> 
          </div>

<<<<<<< HEAD
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-lg mb-2">Our Partners</h3>
            <ul className="space-y-1 text-sm flex flex-col items-left text-left">
=======
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-sm mb-2">Partners</h3>
            <ul className="space-y-1 mb-5 text-sm flex flex-col items-left text-left">
>>>>>>> ece5115b1c6ac3eabc426b85e1a788424f4fb364
            <li><Link to="https://istamacameroon.com/" className="hover:text-pink-500">ISTAMA</Link></li>
              <li><Link to="https://www.univ-iug.com/" className="hover:text-pink-500">IUG</Link></li>
              <li><Link to="https://myiuc.com/" className="hover:text-pink-500">IUC</Link></li>
              <li><Link to="https://www.iut-dla.cm/" className="hover:text-pink-500">IUT</Link></li>
            </ul>
            <a href="https://x.com/" className="text-white hover:text-pink-300 text-2xl content-center">
              <img src="/images/twitter.png" alt="Twitter" className="h-9" />
            </a>
          </div>

<<<<<<< HEAD
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-lg mb-2">Informations</h3>
            <ul className="space-y-1 text-sm flex flex-col items-left text-left">
=======
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-sm mb-2">Informations</h3>
            <ul className="space-y-1 mb-3 text-sm flex flex-col items-left text-left">
>>>>>>> ece5115b1c6ac3eabc426b85e1a788424f4fb364
            <li><Link to="/register" className="hover:text-pink-500">Register</Link></li>
              <li><Link to="/login" className="hover:text-pink-500">Login</Link></li>
              <li><Link to="/ " className="hover:text-pink-500">My plans</Link></li>
              <li><Link to="/" className="hover:text-pink-500">Courses</Link></li>
            </ul>
            <a href="https://www.linkedin.com/" className="text-white hover:text-pink-300 text-2xl content-center">
              <img src="/images/linkedin.png" alt="LinkedIn" className="h-12"  />
            </a>
          </div>
        </div>

        {/* <div className="flex flex-row space-x-6 pt-5 justify-end content-center px-4">
            <a href="https://www.facebook.com/" className="text-white hover:text-pink-300 text-2xl content-center">
              <img src="/images/facebook.png" alt="Facebook" className="h-8" />
            </a>
            <a href="https://x.com/" className="text-white hover:text-pink-300 text-2xl content-center">
              <img src="/images/twitter.png" alt="Twitter" className="h-9" />
            </a>
            <a href="https://www.linkedin.com/" className="text-white hover:text-pink-300 text-2xl content-center">
              <img src="/images/linkedin.png" alt="LinkedIn" className="h-12" />
            </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
