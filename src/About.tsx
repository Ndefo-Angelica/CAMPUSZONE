
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
      <div className="flex-1 max-w-md flex flex-col items-center md:items-start pt-10">
        <img className="w-full h-[300px] object-cover md:h-[400px]" src="/src/assets/about.jpg" alt="About CampusZone" />
      </div>
      <div className="flex-1 max-w-md flex flex-col items-center ">
        <h1 className="text-3xl font-bold text-center mb-1">
          About <span className="text-pink-500">Campus</span><span className="text-black">Zone</span>
        </h1>
        <div className="flex justify-center items-center mb-8">
        <div className="h-0.5 w-10 bg-pink-500"></div>
        <span className="mx-2 text-pink-500 text-2xl">   <img src="src/assets/logo.png" alt="CampusZone Logo" className="h-10" /></span>
        <div className="h-0.5 w-10 bg-pink-500"></div>
      </div>
        <p className="text-base md:text-lg mb-4 font-semibold text-center md:text-left">
          WHO IS <span className="text-pink-500">Campus</span>
          <span className="text-black">Zone</span>
          <span className="text-pink-500">? ?</span>
        </p>
        <p className="text-sm md:text-base mb-4 text-center md:text-left">
          We empower students with essential resources for academic success. Our platform offers access to course materials, past exams, and interactive tools, all designed to help students achieve their goals. Whether you’re preparing for exams, catching up on lessons, or seeking to expand your understanding, CampusZone is here to support your educational journey. Join our community and take your learning to the next level with us.
        </p>
        <button className="px-4 py-2 items-center flex-grow justify-center bg-pink-500 font-semibold rounded hover:bg-pink-200">
          Join our community
        </button>
      </div>
    </section>
  );
};

export default About;
