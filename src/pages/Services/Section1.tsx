import React from "react";

// import { Link } from "react-router-dom";

const Section1: React.FC = () => {

  

  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-autolg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-1">
          Our Services
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
        <div className=" bg-pink-100 grid grid-cols-1 sm:grid-cols-2 gap-6  w-screen">
          <div className="py-4 pl-20 ml-20 flex flex-col text-left mt-3">
            <div className="flex items-center">
              <div className="flex justify-center items-center rounded-full bg-white h-12 w-12">
                <div className="flex justify-center items-center bg-pink-500 h-[80%] w-[80%] rounded-full">
                  <img
                    src="/images/Online.png"
                    alt="CampusZone Logo"
                    className="h-[70%] w-[70%]"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-3 ml-4">
                Online Courses
                {/* <Link to="/online-courses" className="hover:underline">
                  Online Courses
                </Link> */}
              </h3>
            </div>
            <p className="text-left mt-5 pl-8">
              Access a wide selection <br /> of up-to-date and <br />{" "}
              comprehensive courses
            </p>
          </div>

          <div className="py-4 pl-20 ml-20 flex flex-col text-left mt-3">
            <div className="flex items-center">
              <div className="flex justify-center items-center rounded-full bg-white h-12 w-12">
                <div className="flex justify-center items-center bg-pink-500 h-[80%] w-[80%] rounded-full">
                  <img
                    src="/images/Exam.png"
                    alt="Past Papers Icon"
                    className="h-[70%] w-[70%]"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-3 ml-4">
                Past Papers
                {/* <Link to="/past-papers" className="hover:underline">
                  Past Papers
                </Link> */}
              </h3>
            </div>
            <p className="text-left mt-5 pl-8">
              Access a collection of <br /> past exam papers and <br /> practice
              your skills effectively.
            </p>
          </div>

          <div className="py-4 pl-20 ml-20 flex flex-col text-left mt-10">
            <div className="flex items-center">
              <div className="flex justify-center items-center rounded-full bg-white h-12 w-12">
                <div className="flex justify-center items-center bg-pink-500 h-[80%] w-[80%] rounded-full">
                  <img
                    src="/images/Overview.png"
                    alt="Revision Notes Icon"
                    className="h-[70%] w-[70%]"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-3 ml-4">
                Revision Materials
                {/* <Link to="/revision-notes" className="hover:underline">
                  Revision Materials
                </Link> */}
              </h3>
            </div>
            <p className="text-left mt-5 pl-8">
              Find concise and <br /> well-organized revision notes <br /> to
              boost your learning.
            </p>
          </div>

          <div className="py-4 pl-20 ml-20  flex flex-col text-left mt-10">
            <div className="flex items-center">
              <div className="flex justify-center items-center rounded-full bg-white h-12 w-12">
                <div className="flex justify-center items-center bg-pink-500 h-[80%] w-[80%] rounded-full">
                  <img
                    src="/images/Classroom.png"
                    alt="Chatbot Icon"
                    className="h-[70%] w-[70%]"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-3 ml-4">
                Chatbot Assistance
                {/* <Link to="/chatbot-assistance" className="hover:underline">
                  Chatbot Assistance
                </Link> */}
              </h3>
            </div>
            <p className="text-left mt-5 pl-8">
              Get instant answers <br /> to your questions with our <br />{" "}
              AI-powered chatbot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
