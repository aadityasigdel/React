import React from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";

function Profile() {
    return (
        <div>
            <div className="overflow-hidden">
                <div className="flex justify-between items-center ml-5 w-full h-s p-4">
                    <h1 className="text-3xl font-bold text-blue-600 mt-5">
                        <Link to="/">WanderMate</Link>
                    </h1>
                    <ul className="mt-5 flex justify-evenly w-1/2">
                        <li className="text-xl font-bold">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="text-xl font-bold">
                            <Link to="/destination">Destination</Link>
                        </li>
                        <li className="text-xl font-bold">
                            <Link to="/travel">Travel Package</Link>
                        </li>
                        <li className="text-xl font-bold">
                            <Link to="/hotel">Hotels</Link>
                        </li>
                    </ul>
                    <Link to="/profile">
                        <div className="rounded-full bg-green-700 w-14 h-14 mr-5">
                            <img
                                className="rounded-full w-full h-full object-cover"
                                src="src\assets\userProfile.jpg"
                                alt="User Profile"
                            />
                        </div>
                    </Link>
                </div>

                <div className="flex items-center bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="profile-picture">
                        <img
                            className="rounded-full w-24 h-24 mr-6"
                            src="src\assets\userProfile.jpg"
                            alt="Profile"
                        />
                    </div>
                    <div className="profile-description">
                        <h2 className="text-2xl font-bold">sora</h2>
                        <p className="mt-2 text-gray-600">
                            My name is Sora because I was born during a
                            thunderstorm, and 'Sora' means 'sky' in Japanese. The
                            raging storm outside was a powerful force of nature, and
                            my parents wanted to give me a name that reflected the
                            majesty and beauty of the sky.
                        </p>
                    </div>
                </div>
                <div className="mt-10 w-full max-w-4xl">
                    <h2 className="text-xl font-bold mb-4">Hotel Bookings</h2>
                    <div className="flex items-center bg-white p-4 rounded-lg shadow-md mb-6">
                        <img
                            className="w-1/2 h-32 object-cover rounded-lg mr-4"
                            src="src\assets\hotel1.jpg"
                            alt="Hotel Annapurna"
                        />
                        <div className="booking-details">
                            <h3 className="text-lg font-semibold">
                                Hotel Annapurna
                            </h3>
                            <p className="text-gray-600">$100</p>
                            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                View Deal
                            </button>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold mb-4">
                        Travel Packages Bookings
                    </h2>
                    <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                        <img
                            className="w-1/2 h-32 object-cover rounded-lg mr-4"
                            src="src\assets\hotel2.jpg"
                            alt="Hotel Annapurna"
                        />
                        <div className="booking-details">
                            <h3 className="text-lg font-semibold">
                                Hotel Annapurna
                            </h3>
                            <p className="text-gray-600">$100</p>
                            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                View Deal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-11/12 justify-center items-center flex-col flex text-xl mt-10 ">
                <Comment/>
            </div>

        </div>
    );
}

export default Profile;
