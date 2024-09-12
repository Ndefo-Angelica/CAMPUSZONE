
import React from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {

    const navigate = useNavigate();

    return (
        <section className="relative h-[calc(100vh_-_6rem)] bg-cover bg-center  " style={{ backgroundImage: "url('/images/Hero.jpg')" }}>
            <div className="absolute inset-0 bg-pink-600 opacity-60"></div>
            <div className="relative max-w-5xl mx-auto  py-40">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-justify leading-tight">Study, practice,<br /><p className="px-20">succeed!!!</p></h1>
                <p className="text-md md:text-lg text-white mt-6 tracking-widest">
                    Discover a vast collection of<br /> courses,  exams materials and <br /> more to help you succeed<br /> in your studies.
                </p>
                <div className="mt-8 flex ml-10 justify-right space-x-4">
                    <button onClick={() => navigate("/")} className="bg-white text-pink-600 px-4 py-2 rounded shadow hover:bg-pink-600 hover:text-pink-200 transition">
                        Get Started
                    </button>
                    {/* <button className="bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-white hover:text-pink-600 transition">
                        Learn More
                    </button> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;