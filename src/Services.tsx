import React from 'react';

const services = [
    { name: 'Access to Courses', color: 'bg-cyan-500' },
    { name: 'Download of Exams', color: 'bg-green-800' },
    { name: 'Exam Topics and Corrections', color: 'bg-orange-500' },
    { name: 'Timetable Management', color: 'bg-purple-800' },
    { name: 'Technical Support', color: 'bg-pink-500' },
    { name: 'Digital Library', color: 'bg-cyan-500' }
];

const Services: React.FC = () => {
    return (
        <section className="py-12 pb-4">
            <h2 className="text-3xl font-bold text-center mb-1">Our Services</h2>
            <div className="flex justify-center items-center mb-8">
        <div className="h-0.5 w-10 bg-pink-500"></div>
        <span className="mx-2 text-pink-500 text-2xl">   <img src="src/assets/logo.png" alt="CampusZone Logo" className="h-10" /></span>
        <div className="h-0.5 w-10 bg-pink-500"></div>
      </div>
            <div className="bg-pink-200  flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
               
                <div className="flex-1 space-y-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`${service.color} text-white mr-23 rounded-full flex items-center`}
                        >
                            <div className="w-12 h-12 bg-white rounded-full flex-shrink-0"></div>
                            <p className="ml-4 text-lg font-semibold flex-grow ">{service.name}</p>
                        </div>
                    ))}
                </div>

               
                <div className="mt-8 lg:mt-0 lg:ml-8 flex-shrink-0">
                    <img
                        src="src/assets/services.png"
                        alt="Graduate"
                        className="w-64 lg:w-96"
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;

