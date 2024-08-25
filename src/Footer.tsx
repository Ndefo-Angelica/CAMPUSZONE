
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-200 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm flex flex-col items-center">
              <li><a href="#" className="hover:text-pink-300">Social Media</a></li>
              <li><a href="#" className="hover:text-pink-300">Chat Bot</a></li>
              <li><a href="#" className="hover:text-pink-300">Services</a></li>
              <li><a href="#" className="hover:text-pink-300">Courses</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4">Our Partners</h3>
            <ul className="space-y-2 text-sm flex flex-col items-center">
              <li><a href="#" className="hover:text-pink-300">ISTAMA</a></li>
              <li><a href="#" className="hover:text-pink-300">ESG</a></li>
              <li><a href="#" className="hover:text-pink-300">IUC</a></li>
              <li><a href="#" className="hover:text-pink-300">IUT</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4">Informations</h3>
            <ul className="space-y-2 text-sm flex flex-col items-center">
              <li><a href="#" className="hover:text-pink-300">Register</a></li>
              <li><a href="#" className="hover:text-pink-300">Login</a></li>
              <li><a href="#" className="hover:text-pink-300">My plans</a></li>
              <li><a href="#" className="hover:text-pink-300">My courses</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-grow justify-evenly space-x-6 mt-8">
          <a href="https://www.facebook.com/" className="text-white hover:text-pink-300 text-2xl">
            <img src="src/assets/facebook.png" alt="Facebook" className="h-10" />
          </a>
          <a href="https://x.com/" className="text-white hover:text-pink-300 text-2xl">
            <img src="src/assets/twitter.png" alt="Twitter" className="h-10" />
          </a>
          <a href="https://www.linkedin.com/" className="text-white hover:text-pink-300 text-2xl">
            <img src="src/assets/linkedin.png" alt="LinkedIn" className="h-12" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
