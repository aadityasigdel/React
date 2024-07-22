import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Travel() {
    const [currentfortravels, setCurrentfortravels] = useState([]);

    useEffect(() => {
        const datacollectionfortravels = async () => {
            const response = await fetch(
                "http://localhost:3000/travelPackages"
            );
            const data = await response.json();
            console.log(data);
            setCurrentfortravels(data);
        };
        datacollectionfortravels();
    }, []);

    return (
        <div>
            <div>
                <div className="overflow-hidden ">
                    <div className="flex justify-evenly items-center ml-5 w-full h-s">
                        <h1 className="text-3xl font-bold text-blue-600 mt-5">
                            <Link to="/">WanderMate</Link>
                        </h1>
                        <ul className="mt-5 flex justify-evenly w-full">
                            <li className="text-xl font-bold">
                                <Link to="/home"> Home</Link>
                            </li>
                            <li className="text-xl font-bold">
                                <Link to="/destination">Destination</Link>
                            </li>
                            <li className="text-xl font-bold">
                                <Link to="/travel">Travel package</Link>
                            </li>
                            <li className="text-xl font-bold">
                                <Link to="/hotel">Hotels</Link>
                            </li>
                        </ul>
                        <Link to="/profile">
                            <div className="rounded-full bg-green-700 w-14 h-14 mr-5">
                                <img
                                    src="src/assets/userProfile.jpg"
                                    alt="User Profile"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="full m-5">
                {currentfortravels.map((travel) => (
                    <div
                        className="flex flex-row h-1/4 justify-center items-center m-4 shadow-gray-500 shadow-md"
                        key={travel.id}
                    >
                        <div className="w-1/2 h-96    ">
                            <img
                                src={travel.img}
                                alt=""
                                className="h-96  w-full"
                            />
                        </div>
                        <div className="w-1/2 h-70 p-5 m-2 font-semibold">
                            <h1 className="text-2xl font-bold">
                                {travel.name}
                            </h1>
                            <p className="m-2">price :${travel.price}</p>
                            <h1 className="m-2">{travel.title}</h1>
                            <p className="m-2">{travel.desc}</p>
                            <Link to={`/travels/${travel.id}`}>
                                <button className="text-black bg-blue-500 text-md p-2 px-4 rounded-md m-1">
                                    View
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <footer className="bg-gray-100 py-8 border-t border-gray-300">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-4">
                            About WanderMate
                        </h3>
                        <ul>
                            <li className="mb-2">
                                <a
                                    href="#about"
                                    className="text-gray-700 hover:underline"
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#home"
                                    className="text-gray-700 hover:underline"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#destinations"
                                    className="text-gray-700 hover:underline"
                                >
                                    Destinations
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#tours"
                                    className="text-gray-700 hover:underline"
                                >
                                    Tours
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#hotels"
                                    className="text-gray-700 hover:underline"
                                >
                                    Hotels
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-4">Explore</h3>
                        <ul>
                            <li className="mb-2">
                                <a
                                    href="#flights"
                                    className="text-gray-700 hover:underline"
                                >
                                    Flights
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#car-rentals"
                                    className="text-gray-700 hover:underline"
                                >
                                    Car Rentals
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#activities"
                                    className="text-gray-700 hover:underline"
                                >
                                    Activities
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#deals"
                                    className="text-gray-700 hover:underline"
                                >
                                    Deals
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-4">
                            Trip-Advisor Sites
                        </h3>
                        <ul>
                            <li className="mb-2">
                                <a
                                    href="#contact"
                                    className="text-gray-700 hover:underline"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#terms-of-service"
                                    className="text-gray-700 hover:underline"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#privacy-policy"
                                    className="text-gray-700 hover:underline"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#terms-and-conditions"
                                    className="text-gray-700 hover:underline"
                                >
                                    Terms and Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto text-center pt-4 border-t border-gray-300 mt-6">
                    <p className="text-gray-700">
                        &copy; 2024 WanderMate LLC All rights reserved
                    </p>
                </div>
            </footer>
        </div>
    );
}
