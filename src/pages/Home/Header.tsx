import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import formationImage from "/images/formation.png";
import loginImage from "/images/login.png";
import accountImage from "/images/account.png";
import logoImage from "/images/logo.png";
// import searchImage from '/images/search.png';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  // const [isSearchVisible, setIsSearchVisible] = useState(false);

  // const toggleSearchBar = () => {
  //   setIsSearchVisible(!isSearchVisible);
  // };

  return (
    <header className="bg-pink-500 shadow-md relative">
      <div className="flex justify-between items-center px-4 py-2 ">
        <span className="flex items-center text-sm font-semibold text-white">
          <img src={formationImage} alt="formation" className="h-5 mr-2" />
          Formation: 14 / 05 / 24
        </span>
        <div className="flex space-x-4">
          <button onClick={() => navigate("/login")} className="bg-white hover:bg-pink-300 text-black text-xs py-2 px-2 rounded font-semibold flex items-center">
            <img src={loginImage} alt="login" className="h-5 md:mr-1" />
            <span className='hidden md:block'>Login</span>
          </button>
          <button onClick={() => navigate("/register")} className="bg-white hover:bg-pink-300 text-black text-xs py-2 px-2 rounded font-semibold flex items-center">
            <img src={accountImage} alt="register" className="h-5 md:mr-1" />
            <span className='hidden md:block'>Register</span>
          </button>
        </div>
      </div>

      <div className="bg-white w-full flex justify-between items-center p-4">
        <div className="flex items-center text-sm space-x-2">
          <img src={logoImage} alt="CampusZone Logo" className="h-5" />
          <div>
            <span className="text-pink-500 text-sm font-bold">Campus</span>
            <span className="text-sm font-bold">Zone</span>
          </div>
        </div>

        <nav className="flex hidden md:flex justify-end mr-6 space-x-10 font-semibold text-xs">
          <Link to="/" className="hover:text-pink-500">Home</Link>
          <Link to="/services" className="hover:text-pink-500">Services</Link>
          <Link to="/chat" className="hover:text-pink-500">ChatBot</Link>
          <Link to="/contacts" className="hover:text-pink-500">Contacts</Link>
        </nav>

        <div className="block md:hidden" onClick={toggleNavbar} role='button'>
          {mobileDrawerOpen ? <X className='h-5' /> : <Menu className='h-5' />}
        </div>


        {/* <div className="flex items-center">
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
          </div> */}
      </div>

      {mobileDrawerOpen && (
          <div className="absolute top-27 right-0 w-24 z-20 p-5 flex flex-col justify-center items-center lg:hidden opacity-70 bg-white">
            <nav className="flex-grow flex-col flex mb-4 text-xs justify-center space-y-4 font-semibold">
                <Link to="/" className="hover:text-pink-500">Home</Link>
                <Link to="/services" className="hover:text-pink-500">Services</Link>
                <Link to="/chat" className="hover:text-pink-500">ChatBot</Link>
                <Link to="/contacts" className="hover:text-pink-500">Contacts</Link>
            </nav>
          </div>
      )}



    </header>
  );
};

export default Header;
