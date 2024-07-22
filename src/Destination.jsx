import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Destination() {
    const [current, setCurrent] = useState([]);

    useEffect(() => {
        const datacollection = async () => {
            const response = await fetch("http://localhost:3000/destination");
            const data = await response.json();
            console.log(data);
            setCurrent(data);
        };
        datacollection();
    }, []);

    const [currentforhotels, setCurrentforhotels] = useState([]);

    useEffect(() => {
        const datacollectionforhotels = async () => {
            const response = await fetch("http://localhost:3000/hotels");
            const data = await response.json();
            console.log(data);
            setCurrentforhotels(data.slice(0, 4));
        };
        datacollectionforhotels();
    }, []);

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

    const [currentfortopDestinations, setCurrentfortopDestinations] = useState(
        []
    );

    useEffect(() => {
        const datacollectionfortopDestinations = async () => {
            const response = await fetch(
                "http://localhost:3000/thingsToDo"
            );
            const data = await response.json();
            console.log("here:", data);
            setCurrentfortopDestinations(data);
        };
        datacollectionfortopDestinations();
    }, []);

    const [counter, setcount] = useState(0);
    const img1 = current[counter];
    console.log(img1);

    useEffect(() => {
        if (img1 === undefined) {
            setcount(0);
        }
    }, [img1]);

    const clickable = () => {
        setcount(counter + 1);
    };

    if (img1 === undefined) {
        return null;
    }

    return (
        <>
            <div className="">
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

                <div key={img1.id} className="overflow-hidden">
                    <div className="w-full h-im pl-16 pr-16 pt-10 relative overflow-hidden ">
                        <img
                            src={img1.img}
                            className="w-full h-im rounded-2xl "
                            alt="No image available"
                        />
                        <h1 className="absolute top-24 left-3/4 text-4xl text-black p-4 bg-white bg-opacity-90 rounded-md ">
                            Explore{" "}
                            <span className="text-yellow-700">Solukhumbu</span>
                        </h1>
                    </div>
                    <div className="flex justify-center text-semibold w-full mt-4 mb-6 ">
                        <p className="w-11/12  p-10 shadow-md shadow-black text-semibold">
                            {img1.desc}
                        </p>
                    </div>
                </div>

                <footer className="flex justify-center mt-4">
                    <div
                        className="w-5 h-5 rounded-full bg-orange-400 ml-2"
                        onClick={clickable}
                    ></div>
                    <div
                        className="w-5 h-5 rounded-full border-orange-500 border ml-2"
                        onClick={clickable}
                    ></div>
                    <div
                        className="w-5 h-5 rounded-full border-orange-500 border ml-2"
                        onClick={clickable}
                    ></div>
                    <div
                        className="w-5 h-5 rounded-full border-orange-500 border ml-2"
                        onClick={clickable}
                    ></div>
                </footer>

                <div className="overflow-hidden font-semibold">
                    <h1 className="ml-16">Things To DO</h1>
                    <div className="flex h-96 w-full justify-center mr-16 ml-16 mb-8 ">
                        {currentfortopDestinations.map((dest) => (
                            <div
                                key={dest.id}
                                className="text-md h-full w-1/5  flex  flex-row mr-8 "
                            >
                                <p>
                                    <img
                                        src={dest.img}
                                        className="h-full w-mp"
                                        alt=""
                                    />
                                    <p>{dest.price}</p>
                                </p>
                            </div>
                        ))}
                    </div>

                    <h1 className="ml-16">Top Hotels</h1>
                    <div className="flex h-96 w-full justify-center mr-16 ml-16 mb-8 ">
                        {currentforhotels.map((hos) => (
                            <div
                                key={hos.id}
                                className="text-md h-full w-1/5 flex  flex-row mr-8"
                            >
                                <p>
                                    <img
                                        src={hos.img}
                                        className="h-full w-mp"
                                        alt=""
                                    />
                                </p>
                            </div>
                        ))}
                    </div>

                    <h1 className="ml-16">Top Travel Pakages</h1>
                    <div className="flex h-96 w-full justify-center mr-16 ml-16 mb-8 ">
                        {currentfortravels.map((hostrav) => (
                            <div
                                key={hostrav.id}
                                className="text-md h-full w-1/5 flex  flex-row mr-8"
                            >
                                <p>
                                    <img
                                        src={hostrav.img}
                                        className="h-full w-mp "
                                        alt=""
                                    />
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
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
        </>
    );
}

export default Destination;
