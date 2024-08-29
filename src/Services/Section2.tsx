import React from 'react';

const Section2: React.FC = () => {
  return (
    <section className="p-6">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Quality of Content</h3>
          <img src="src/assets/Data Quality (2).png" alt="Quality of Content" className="w-full h-32 object-cover mb-4" />
          <p className="text-center">We provide high-quality learning material selected by educational experts.</p>
        </div>

        <div className="border p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">User Experience</h3>
          <img src="src/assets/Thin Client (1).png" alt="User Experience" className="w-full h-32 object-cover mb-4" />
          <p className="text-center">We focus on creating a smooth and intuitive user experience.</p>
        </div>

        <div className="border p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
          <img src="src/assets/Thin Client (1).png" alt="Expert Guidance" className="w-full h-32 object-cover mb-4" />
          <p className="text-center">Our content is curated by experienced educators.</p>
        </div>

        <div className="border p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
          <img src="src/assets/Thin Client (1).png" alt="Comprehensive Coverage" className="w-full h-32 object-cover mb-4" />
          <p className="text-center">We cover a wide range of topics to meet diverse learning needs.</p>
        </div>
      </div>
    </section>
  );
}

export default Section2;
