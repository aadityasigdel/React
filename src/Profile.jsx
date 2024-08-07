import React from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import Nav from "./Nav";

function Profile() {
    return (
        <div>
            <div>
            <Nav/>

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
            <div className="w-full justify-center items-center flex-col flex text-xl mt-10 ">
                <Comment/>
            </div>

        </div>
    );
}

export default Profile;
