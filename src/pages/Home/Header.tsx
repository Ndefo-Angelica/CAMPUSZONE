import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import formationImage from '/src/assets/formation.png';
import loginImage from '/src/assets/login.png';
import accountImage from '/src/assets/account.png';
import logoImage from '/src/assets/logo.png';
import searchImage from '/src/assets/search.png';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header className="bg-pink-500 shadow-md">
      <div className="flex justify-between items-center px-4 py-2">
        <span className="flex items-center text-sm font-semibold text-white">
          <img src={formationImage} alt="formation" className="h-5 mr-2" />
          Formation: 14 / 05 / 24
        </span>
        <div className="flex space-x-4">
          <button  onClick={() => navigate("/login")} className="bg-white hover:bg-pink-300 text-black text-xs py-2 px-2 rounded font-semibold flex items-center">
            <img src={loginImage} alt="login" className="h-5 mr-1" />
            Login
          </button>
          <button onClick={() => navigate("/register")} className="bg-white hover:bg-pink-300 text-black text-xs py-2 px-2 rounded font-semibold flex items-center">
            <img src={accountImage} alt="register" className="h-5 mr-1" />
            Register
          </button>
        </div>
      </div>

      <div className="bg-white w-full flex-grow justify-evenly items-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 py-2">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logoImage} alt="CampusZone Logo" className="h-5" />
            <span className="text-pink-500 text-sm font-bold">Campus</span>
            <span className="text-sm font-bold">Zone</span>
          </div>

          <nav className="flex-grow flex mb-4 md:mb-0 md:ml-24 text-xs justify-center font-semibold">
            <ul className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
              <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
              <li><Link to="/Courses" className="hover:text-pink-500">Courses</Link></li>
              <li><Link to="/Services" className="hover:text-pink-500">Services</Link></li>
              <li><Link to="/chat" className="hover:text-pink-500">Chat</Link></li>
              <li><Link to="/contacts" className="hover:text-pink-500">Contacts</Link></li>
            </ul>
          </nav>

          <div className="flex items-center">
            <img
              src={searchImage}
              alt="Search"
              className="h-8 cursor-pointer bg-pink-500 rounded-full p-2"
              onClick={toggleSearchBar}
            />
            {isSearchVisible && (
              <div className="flex items-center ml-2 space-x-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded-l-md py-2 text-xs px-4"
                />
                <button className="bg-pink-500 hover:bg-pink-300 text-white py-2 text-xs px-4 rounded-r-md">
                  Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
