import React from 'react';

const Section3: React.FC = () => {
    return (
        <section className="">
            <div className="relative h-[calc(100vh_-_26rem)] md:relative h-[calc(100vh_-_16rem)] ml-0 md:ml-80 " >
                <div className="h-36 w-36 md:h-80 md:w-80 bg-pink-500 absolute rounded-full " ></div>
                <div className="flex justify-center items-center bg-white h-36 mt-5 ml-5 w-36 md:h-80 md:w-80 absolute rounded-full top-5 left-5 border-[1px] border-pink-400">
                    <div className="relative rounded-full text-center z-10 mt-4 ">
                        <h3 className="text-pink-500 font-bold text-lg md:text-8xl pb-7">01</h3>
                        <div className="text-lg pb-7">
                            <p className="text-pink-500 font-semibold text-md  md:text-lg">Years <br /> <span className="text-pink-500  font-medium text-md pt-2">of experience </span> </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-10 md:space-y-16 ml-[160px] md:ml-[320px]" >
                    <div className="h-6 w-6 md:h-10 md:w-10 bg-pink-500 absolute rounded-full ml-0 mb-10 " ></div>
                    <div className="h-6 w-6 md:h-10 md:w-10 bg-pink-500 absolute rounded-full mt-14 ml-0" ></div>
                </div>
                <div className="grid grid-rows-3 gap-2 md:gap-4 mt-7 md:mt-24 text-justify ml-[58%] md:ml-[45%]  ">
                    <div className="text-pink-500 text-lg md:text-6xl pt-8">2k  <span className="text-pink-500 font-medium text-md md:text-xl">subscribers</span></div>
                    <div className="text-pink-500 text-lg md:text-6xl ">200  <span className="text-pink-500 font-medium text-md md:text-xl">formations</span></div>
                    <div className="text-pink-500 text-lg md:text-6xl">15  <span className="text-pink-500 font-medium text-md md:text-xl">universities</span></div>


                </div>
            </div>

        </section>

       

    );
}

export default Section3;
