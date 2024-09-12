
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contacts: React.FC = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    school: Yup.string()
      .min(2, 'School name must be at least 2 characters')
      .required('School is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
  });

  return (
    <section className="bg-pink-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Do not hesitate to contact us for any questions or additional information.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="pt-20 w-full w-full md:max-w-lg my-10 p-8 md:ml-20 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              You can reach us through the following means:
            </p>
            <ul className="text-gray-800 space-y-3">
              <li><span className="font-bold">Phone:</span> 6-54-14-56-05</li>
              <li><span className="font-bold">Email:</span> contact@campuszone.com</li>
              <li><span className="font-bold">Address:</span> Akwa, Direction Generale MTN</li>
            </ul>
          </div>
          <div className="bg-pink-300 w-full mr-40 max-w-lg my-10 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 md:pl-40">Contact Form</h3>
            <Formik
              initialValues={{ name: '', email: '', school: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                // Handle form submission here
                console.log(values);
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-600 font-medium">Name</label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="school" className="block text-gray-600 font-medium">School</label>
                    <Field
                      type="text"
                      id="school"
                      name="school"
                      className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <ErrorMessage name="school" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-600 font-medium">Message</label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                      rows={5}
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-300 transition duration-300"
                      disabled={isSubmitting}
                    >
                      Send your message
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
