import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Hotel from "./Hotel";
import Destinatin from "./Destination";
import Travels from "./Travels";
import AdminUser from './AdminUser';

const Dashboard = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
            <p className="text-gray-700">Welcome to the dashboard.</p>
        </div>
    );
};



const NavAdmin = () => {
    return (
        <nav className="flex flex-col justify-start p-4 bg-gray-800 w-1/5 h-screen ">
            <ul className="flex flex-col space-x-4">
                <li>
                    <Link to="" className="text-white hover:text-gray-300">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to="Hotels"
                        className="text-white hover:text-gray-300"
                    >
                        Hotels
                    </Link>
                </li>
                <li>
                    <Link
                        to="Travels"
                        className="text-white hover:text-gray-300"
                    >
                        Travels
                    </Link>
                </li>
                <li>
                    <Link to="Users" className="text-white hover:text-gray-300">
                        users
                    </Link>
                </li>
                <li>
                    <Link
                        to="destination"
                        className="text-white hover:text-gray-300"
                    >
                        destination
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

const Admin = () => {
    return (
        <div className=" flex h-screen ">
            <NavAdmin />
            <div className="">
                <Routes>
                    <Route path="" element={<Dashboard />} />
                    <Route path="destination" element={ <Destinatin />}/>
                    <Route path="Users" element={<AdminUser/>} />
                    <Route path="Travels" element={<Travels />} />
                    <Route path="Hotels" element={<Hotel />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;
