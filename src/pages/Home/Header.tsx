
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
          <img src="src/assets/formation.png" alt="formation" className="h-5 mr-2" />
          Formation: 14 / 05 / 24
        </span>
        <div className="flex space-x-4">
          <button className="bg-white hover:bg-pink-300 text-black text-xs py-2 px-2 rounded font-semibold flex items-center">
            <img src="src/assets/login.png" alt="login" className="h-5 mr-1" />
            Login
          </button>
          <button onClick={()=> navigate("/Register")} className="bg-white hover:bg-pink-300 text-black text-xs py-2 px-2 rounded font-semibold flex items-center">
            <img src="src/assets/account.png" alt="account" className="h-5 mr-1" />
            Account
          </button>
        </div>
      </div>

      <div className="bg-white w-full flex-grow justify-evenly items-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 py-2">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="src/assets/logo.png" alt="CampusZone Logo" className="h-5" />
            {" "}
            <span className="text-pink-500 text-sm font-bold ">Campus</span>
            <span className="text-sm font-bold">Zone</span>
          </div>

          <nav className="flex-grow flex mb-4 md:mb-0 md:ml-24 text-xs justify-center font-semibold">
            <ul className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
              <li><a href="#" className="hover:text-pink-500">Home</a></li>
              <li className="hover:text-pink-500" onClick={()=> navigate("/Services")}>Services</li>
              <li><a href="#" className="hover:text-pink-500">Chat</a></li>
              <li><a href="#" className="hover:text-pink-500">Contacts</a></li>
            </ul>
          </nav>

          <div className="flex items-center">
            <img
              src="src/assets/search.png"
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
                <button
                  className="bg-pink-500 hover:bg-pink-300 text-white py-2 text-xs px-4 rounded-r-md"
                >
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
