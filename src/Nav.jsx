import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
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
  )
}
