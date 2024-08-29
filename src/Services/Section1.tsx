import React from 'react';
import { Link } from 'react-router-dom';

const Section1: React.FC = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg flex flex-col items-center">
          <img src="src/assets/Overview (1).png" alt="Online Courses" className="w-full h-32 object-cover mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            <Link to="/online-courses" className="text-blue-500 hover:underline">Online Courses</Link>
          </h3>
          <p className="text-center">Purchase your courses here complete</p>
        </div>

        <div className="border p-4 rounded-lg flex flex-col items-center">
          <img src="src/assets/Classroom.png" alt="Revision Guide" className="w-full h-32 object-cover mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            <Link to="/revision-guide" className="text-blue-500 hover:underline">Revision Guide</Link>
          </h3>
          <p className="text-center">Purchase your courses here complete</p>
        </div>

        <div className="border p-4 rounded-lg flex flex-col items-center">
          <img src="src/assets/Exam.png" alt="Past Exam Papers" className="w-full h-32 object-cover mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            <Link to="/past-exam-papers" className="text-blue-500 hover:underline">Past Exam Papers</Link>
          </h3>
          <p className="text-center">Purchase your trimester exam past questions for better preparation here complete</p>
        </div>

        <div className="border p-4 rounded-lg flex flex-col items-center">
          <img src="" alt="Chatboard" className="w-full h-32 object-cover mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            <Link to="/chatboard" className="text-blue-500 hover:underline">Chatboard</Link>
          </h3>
          <p className="text-center">Make your research here</p>
        </div>
      </div>
    </section>
  );
}

export default Section1;
