
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header className="bg-pink-500 shadow-md">
      <div className="flex justify-between items-center p-4">
        <span className="text-sm font-semibold text-white">Formation: 14 / 05 / 24</span>
        <div className="flex space-x-4">
          <button className="bg-white hover:bg-pink-300 text-black py-2 px-4 rounded font-semibold">Login</button>
          <button className="bg-white hover:bg-pink-300 text-black py-2 px-4 rounded font-semibold">Account</button>
        </div>
      </div>

      <div className="bg-white w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center p-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="src/assets/logo.png" alt="CampusZone Logo" className="h-10" />
            <span className="text-pink-500 text-2xl font-bold ml-2">Campus</span>
            <span className="text-2xl font-bold">Zone</span>
          </div>

          <nav className="flex-grow flex mb-4 md:mb-0 md:ml-24 justify-center font-semibold">
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <li><a href="#" className="hover:text-pink-500">Home</a></li>
              <li><a href="#" className="hover:text-pink-500">Services</a></li>
              <li><a href="#" className="hover:text-pink-500">Chat</a></li>
              <li><a href="#" className="hover:text-pink-500">Formations</a></li>
              <li><a href="#" className="hover:text-pink-500">Contacts</a></li>
            </ul>
          </nav>

          <div className="flex items-center">
            <img
              src="src/assets/search.png"
              alt="Search"
              className="h-10 cursor-pointer bg-pink-500 rounded-full p-2"
              onClick={toggleSearchBar}
            />
            {isSearchVisible && (
              <div className="flex items-center ml-2 space-x-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded-l-md py-2 px-4"
                />
                <button
                  className="bg-pink-500 hover:bg-pink-300 text-white py-2 px-4 rounded-r-md"
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
