import React from 'react';

const Section2: React.FC = () => {
  return (
    <section className="p-6">
       <h2 className="text-3xl font-semibold text-center text-gray-900 mb-1">
          Why Choose Us
        </h2>
        <div className="flex justify-center items-center mb-12">
          <div className="h-0.5 w-10 bg-pink-500"></div>
          <span className="mx-2 text-pink-500 text-2xl">
            <img
              src="/images/logo.png"
              alt="CampusZone Logo"
              className="h-5"
            />
          </span>
          <div className="h-0.5 w-10 bg-pink-500"></div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border shadow-md p-4 w-5/6 h-full rounded-lg flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-2 text-pink-500">Quality Content</h3>
          <img src="/images/Data Quality (2).png" alt="Quality of Content" className="w-12 h-12 my-6" />
          <p className="text-center tracking-wide">We provide high-quality <br />learning material selected <br />by educational experts.</p>
        </div>

        <div className="border p-4 w-5/6 h-full shadow-md rounded-lg flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-2 text-pink-500 ">User Experience</h3>
          <img src="/images/Thin Client (1).png" alt="User Experience" className="w-12 h-12  my-6" />
          <p className="text-centerb tracking-wide">We focus on creating <br /> a smooth and intuitive <br />user experience.</p>
        </div>

        <div className="border p-4 w-5/6 h-full shadow-md rounded-lg flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-2 text-pink-500 mt-3">Expert Guidance</h3>
          <img src="/images/Thin Client (1).png" alt="Expert Guidance" className="w-12 h-12 my-6" />
          <p className="text-center tracking-wide">Our content is curated <br />by experienced educators.</p>
        </div>

        <div className="border p-4 w-5/6 h-full shadow-md rounded-lg flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-2 text-pink-500 mt-3">Comprehensive Coverage</h3>
          <img src="/images/Thin Client (1).png" alt="Comprehensive Coverage" className="w-12 h-12 my-6" />
          <p className="text-center tracking-wide">We cover a wide range of topics <br /> to meet diverse learning needs.</p>
        </div>
      </div>
    </section>
  );
}

export default Section2;
