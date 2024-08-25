
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-left mb-0">Contact With Us</h2>
      <div className="flex justify-left items-center mb-8">
        <div className="h-0.5 w-10 bg-pink-500"></div>
        <span className="mx-2 text-pink-500 text-2xl"><img src="src/assets/logo.png" alt="CampusZone Logo" className="h-10" /></span>
        <div className="h-0.5 w-10 bg-pink-500"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-md shadow-md border-b-[3px] border-l-[1px]  border-pink-500">
          <div className="flex items-center mb-4">
            <div className="text-pink-500">

            </div>
            <div className=" mt-5 ml-4 flex">
              <img src="src/assets/address.png" alt="Address Logo" className="h-10 flex flex-grow justify-start" />
              <p className="flex flex-grow justify-end">Douala-Cameroun <br></br> Akwa, Direction General Mtn
              </p>

            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md border-b-[3px] border-l-[1px]  border-pink-500">
          <div className="flex items-center mb-4">
            <div className="text-pink-500">
            </div>


            <div className="ml-4 flex flex-col space-y-3">
              <div className="flex items-center">
                <img src="src/assets/contact.png" alt="Contact Logo" className="h-6 mr-4" />
                <p className="flex-grow text-right">+237 6702986317 / 23789126572</p>
              </div>

              <div className="flex items-center">
                <img src="src/assets/website.png" alt="Website Logo" className="h-10 mr-4" />
                <p className="flex-grow text-right">https://client@campuszone.com</p>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Your name"
            className="p-4 border-b-[3px] border-l-[1px]  border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="text"
            placeholder="School"
            className="p-4 border-b-[3px] border-l-[1px]  border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"

          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border-b-[3px] border-l-[1px]  border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"

          />
        </div>

        <div className="flex flex-col space-y-3">

          <textarea
            placeholder="Your Comments"
            className="p-4 border-b-[3px] border-l-[1px]  border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 md:col-span-2 h-32"

          ></textarea>

          <div className="mt-4 text-center md:text-center">
            <button className="bg-pink-500 text-white py-3 px-40 rounded-lg hover:bg-pink-200 transition duration-300">
              Send your message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;