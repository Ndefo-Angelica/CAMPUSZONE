
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-[calc(100vh_-_8.1rem)] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: 'url(src/assets/header.jpg)' }}
    >
      <div className="absolute inset-0 bg-pink-500 opacity-50"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
          Best Online Training Resources
        </h1>
        <button className="bg-white hover:bg-pink-300 text-black mb-5 py-2 px-4 sm:py-2 sm:px-6 rounded-lg text-base sm:text-lg md:text-xl font-semibold">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
