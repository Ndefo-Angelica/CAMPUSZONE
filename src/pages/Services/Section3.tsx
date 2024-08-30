import React from 'react';

const Section3: React.FC = () => {
    return (
        <section className="">
            <div className="relative h-[calc(100vh_-_16rem)] ml-80 " >
                <div className="h-80 w-80 bg-pink-500 absolute rounded-full " ></div>
                <div className="flex justify-center items-center bg-white h-80 mt-5 ml-5 w-80 absolute rounded-full top-5 left-5 border-[1px] border-pink-400">
                    <div className="relative rounded-full text-center z-10 mt-4 ">
                        <h3 className="text-pink-500 font-bold text-8xl pb-7">01</h3>
                        <div className="text-lg pb-7">
                            <p className="text-pink-500 font-semibold text-3xl">Years <br /> <span className="text-pink-500  font-medium text-xl pt-2">of experience </span> </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-16 ml-[320px]" >
                    <div className="h-10 w-10 bg-pink-500 absolute rounded-full ml-0 mb-10 " ></div>
                    <div className="h-10 w-10 bg-pink-500 absolute rounded-full mt-14 ml-0" ></div>
                </div>
                <div className="grid grid-rows-3 gap-4 mt-24 text-justify ml-[45%]  ">
                    <div className="text-pink-500  text-6xl">2k  <span className="text-pink-500 font-medium text-xl">subscribers</span></div>
                    <div className="text-pink-500  text-6xl ">200  <span className="text-pink-500 font-medium text-xl">formations</span></div>
                    <div className="text-pink-500  text-6xl">15  <span className="text-pink-500 font-medium text-xl">universities</span></div>


                </div>
            </div>

        </section>

        // <div className="flex flex-col items-center mt-12">
        //      <div className="ml-0 sm:ml-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 right-5">
        //         <div className="relative h-80 flex justify-center right-5">
        //             <div className="h-80 w-80 bg-pink-500 absolute rounded-full"></div>
        //             <div className="flex justify-center items-center bg-white h-80 w-80 absolute rounded-full top-5 left-5 border-[1px] border-pink-400">
        //                 <div className="relative rounded-full text-center z-10 mt-4 overflow-auto">
        //                     <h3 className="text-pink-500 font-bold text-2xl">01</h3>
        //                     <div className="text-pink-600 text-xl font-semibold">Years <br />of experience</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     

        // </div>

    );
}

export default Section3;
