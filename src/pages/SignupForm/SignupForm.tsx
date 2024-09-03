
import React from 'react';
import { Link } from "react-router-dom";

const Register: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-pink-100">
            <div className="w-full max-w-lg my-10 p-8 bg-pink-200 rounded-lg shadow-lg">
                <div className="flex justify-center mb-2">

                    <img src="/images/CampusZone.png" alt="CampusZone" className="size-20" />
                </div>
                <h1 className="text-2xl font-semibold text-center text-gray-800">
                    Welcome to <span className="text-pink-400">Campus<span className="text-black">Zone</span></span>
                </h1>
                <p className="mt-2 text-sm text-center text-gray-600">
                    Please fill the form to access to our services
                </p>
                <form className="mt-8 space-y-4">
                  
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Name / Noms
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 mt-1 border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-0.5 focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div>
                  

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email address / Adresse email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your e-mail"
                            className="w-full px-3 py-2 mt-1 border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-0.5 focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Phone number / Numéro de Téléphone
                        </label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full px-3 py-2 mt-1 border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-0.5 focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password / Mot de passe
                        </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 mt-1 border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-0.5 focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Confirm password / Confirmez le mot de passe
                        </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 mt-1 border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-0.5 focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-6 text-white bg-pink-500 rounded-md hover:bg-pink-300"
                    >
                        Submit / S'inscrire
                    </button>

                    <p className="mt-4 text-sm text-center text-gray-600">
                        Already have an acoount?{' '}
                        <Link to="/login" className="hover:text-pink-900 text-pink-400">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
