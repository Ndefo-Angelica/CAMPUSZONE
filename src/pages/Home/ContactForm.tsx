
import React from 'react';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ContactForm: React.FC = () => {

  const schema = yup.object().shape({
    name: yup.string().required(),
    school: yup.string().required(),
    email: yup.string().email().required(),
    comment: yup.string().min(10).required(),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: any) => {
    console.log({ data });
    reset();
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 mt-1 ">
      <h2 className="text-2xl font-bold text-left mb-0">Contact With Us</h2>
      <div className="flex justify-left items-center mb-8">
        <div className="h-0.5 w-10 bg-pink-500"></div>
        <span className="mx-2 text-pink-500 text-2xl"><img src="src/assets/logo.png" alt="CampusZone Logo" className="h-5" /></span>
        <div className="h-0.5 w-10 bg-pink-500"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-md shadow-md border-[1px]  border-pink-500">
          <div className="flex items-center mb-4">
            <div className="text-pink-500"></div>
            <div className=" mt-5 ml-4 flex">
              <img src="src/assets/address.png" alt="Address Logo" className="h-8 mt-2 flex flex-grow justify-start  bg-pink-500 rounded-full mr-6" />
              <p className="flex flex-grow justify-end">Douala-Cameroun <br></br> Akwa, Direction General Mtn
              </p>

            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md  border-[1px]  border-pink-500">
          <div className="flex items-center mb-4">
            <div className="text-pink-500">
            </div>


            <div className="ml-4 flex flex-col space-y-3">
              <div className="flex items-center">
                <img src="src/assets/contact.png" alt="Contact Logo" className="h-8 mr-4 bg-pink-500 rounded-full" />
                <p className="flex-grow text-right">+237 6702986317 / 23789126572</p>
              </div>

              <div className="flex items-center">
                <img src="src/assets/website.png" alt="Website Logo" className="h-8 mr-4  bg-pink-500 rounded-full" />
                <p className="flex-grow text-right">https://client@campuszone.com</p>
              </div>
            </div>


          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Your name "
              {...register("name")}
              className="p-4 border-[1px]  border-pink-500 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 "
            />
            <p className="text-red-800">{errors.name?.message}</p>
            <input
              type="text"
              placeholder="School"
              {...register("school")}
              className=" p-4  border-[1px]   mb-4  border-pink-500 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
            />
            <p className="text-red-800">{errors.school?.message}</p>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className="p-4 border-[1px]  mt-4 border-pink-500 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 "
            />
            <p className="text-red-800">{errors.email?.message}</p>
          </div>

          <div className="flex flex-col space-y-3">
            <textarea
              placeholder="Your Comments"
              {...register("comment")}
              className="py-11 px-2  border-[1px]  border-pink-500 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 md:col-span-2 h-32"
            ></textarea>
            <p className="text-red-800">{errors.comment?.message}</p>

            <div className="mt-4 text-center md:text-center">
              <button className="bg-pink-500 text-white py-3 px-40 rounded-lg mt-3 hover:bg-pink-200 transition duration-300">
                Send your message
              </button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;