import React from 'react';

const Missions: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-1">Our Missions</h2>
        <div className="flex justify-center items-center mb-1">
          <div className="h-0.5 w-10 bg-pink-500"></div>
          <span className="mx-2 text-pink-500 text-2xl">
            <img src="src/assets/logo.png" alt="CampusZone Logo" className="h-5" />
          </span>
          <div className="h-0.5 w-10 bg-pink-500"></div>
        </div>
        <div className=" ml-20 pl-20 grid grid-cols-2 gap-20">
          <div className="relative h-80">
            <div className="h-80 w-80 bg-pink-500 absolute rounded-full"></div>
            <div className="flex justify-center items-center bg-white h-80 w-80 absolute rounded-full top-5 left-5 border-[1px] border-pink-400">
              <div className="relative rounded-full text-center z-10 mt-4 overflow-auto">
                <h3 className="text-pink-500 font-bold text-2xl">Study</h3>
                <div className="text-lg">
                  <p>Detailed courses to <br /> better understand and master each <br /> subject</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-pink-500 rounded-full absolute h-16 w-16 top-5 left-5">
              <div className="flex justify-center items-center bg-white h-[80%] w-[80%] rounded-full">
                <img src="src/assets/book.png" alt="CampusZone Logo" className="h-[70%] w-[70%]" />
              </div>
            </div>
          </div>

          <div className="relative h-80">
            <div className="h-80 w-80 bg-pink-500 absolute rounded-full"></div>
            <div className="flex justify-center items-center bg-white h-80 w-80 absolute rounded-full top-5 left-5 border-[1px] border-pink-400">
              <div className="relative rounded-full text-center z-10 mt-4 overflow-auto">
                <h3 className="text-pink-500 font-bold text-2xl">Collaborate</h3>
                <div className="text-lg">
                  <p>Work together on projects and assignments <br /> to foster teamwork and community</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-pink-500 rounded-full absolute h-16 w-16 top-5 left-5">
              <div className="flex justify-center items-center bg-white h-[80%] w-[80%] rounded-full">
                <img src="src/assets/Teacher.png" alt="Collaborate" className="h-[70%] w-[70%]" />
              </div>
            </div>
          </div>

          <div className="relative h-80">
            <div className="h-80 w-80 bg-pink-500 absolute rounded-full"></div>
            <div className="flex justify-center items-center bg-white h-80 w-80 absolute rounded-full top-5 left-5 border-[1px] border-pink-400">
              <div className="relative rounded-full text-center z-10 mt-4 overflow-auto">
                <h3 className="text-pink-500 font-bold text-2xl">Network</h3>
                <div className="text-lg">
                  <p>Connect with peers and mentors <br /> for guidance and support</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-pink-500 rounded-full absolute h-16 w-16 top-5 left-5">
              <div className="flex justify-center items-center bg-white h-[80%] w-[80%] rounded-full">
                <img src="src/assets/Positive.png" alt="Network" className="h-[70%] w-[70%]" />
              </div>
            </div>
          </div>

          <div className="relative h-80">
            <div className="h-80 w-80 bg-pink-500 absolute rounded-full"></div>
            <div className="flex justify-center items-center bg-white h-80 w-80 absolute rounded-full top-5 left-5 border-[1px] border-pink-400">
              <div className="relative rounded-full text-center z-10 mt-4 overflow-auto">
                <h3 className="text-pink-500 font-bold text-2xl">Innovate</h3>
                <div className="text-lg">
                  <p>Encourage creative thinking and <br /> problem-solving through innovative projects</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-pink-500 rounded-full absolute h-16 w-16 top-5 left-5">
              <div className="flex justify-center items-center bg-white h-[80%] w-[80%] rounded-full">
                <img src="src/assets/Medal.png" alt="Innovate" className="h-[70%] w-[70%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missions;