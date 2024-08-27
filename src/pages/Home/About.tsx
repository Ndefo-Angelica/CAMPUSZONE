import React from 'react';

const About: React.FC = () => {
    return (
        <section className='max-w-5xl mx-auto py-12'>
            <div className="flex flex-col lg:flex-row items-end justify-center gap-8">
                <div className="flex items-end justify-center">
                    <div className="w-fit h-fit flex items-center justify-center lg:-mb-8">
                        <img className="rounded shadow-lg object-cover w-full lg:w-[25rem] h-full lg:h-[22rem]" src="/src/assets/about.jpg" alt="About CampusZone" />
                    </div>
                </div>

                <div className="flex-1 space-y-4">
                    <div className='space-y-1'>
                        <h1 className="font-bold text-center text-xl">
                            About <span className="text-pink-500">Campus</span><span className="text-black">Zone</span>
                        </h1>

                        <div className="flex justify-center items-center mb-5">
                            <div className="h-0.5 w-10 bg-pink-500"></div>
                            <span className="mx-2 text-pink-500 text-2xl">
                                <img src="src/assets/logo.png" alt="CampusZone Logo" className="h-5" />
                            </span>
                            <div className="h-0.5 w-10 bg-pink-500"></div>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <div className='flex items-center justify-center text-sm'>
                            <span>
                                WHO IS
                                {" "}
                                <span className='text-xl font-bold'>
                                    <span className="text-pink-500">Campus</span>
                                    Zone
                                </span>
                            </span>
                            {" "}
                            <span className='flex items-center -space-x-3'>
                                <img src="src/assets/question.png" alt="Question Mark" className="h-6" />
                                <img src="src/assets/question.png" alt="Question Mark" className="h-6" />
                            </span>
                        </div>

                        <p className="text-sm md:text-base text-center md:text-left">
                            We empower students with essential resources for academic success. Our platform offers access to course materials, past exams, and interactive tools, all designed to help students achieve their goals. Whether you’re preparing for exams, catching up on lessons, or seeking to expand your understanding, CampusZone is here to support your educational journey. Join our community and take your learning to the next level with us.
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <button className="px-4 py-2 bg-pink-500 font-semibold rounded hover:bg-pink-300">
                            Join our community
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;