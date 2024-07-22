import React from "react";
import { Link } from 'react-router-dom';
export default function Landing() {
    return(
    <>
    <div className=" flex flex-col  w-full bg-[url('/src/assets/bg7.jpg')] h-screen ">
        <div className="flex justify-between ">
                <div className="font-bold text-4xl text-orange-500 mt-5 ">
                    <Link to={'/signIn'}> Explore.</Link>
                </div>
                <div className="flex justify-around w-1/2 mt-5 ">
                    <ul className="flex justify-evenly w-full text-2xl font-semibold font-serif  text-black">
                        <li>
                            <Link to="/home"> Home</Link>
                        </li>
                        <li>
                        About
                            
                        </li>
                        <li>
                            Tours
                        </li>
                        <li>
                            Sale
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
                <div>
                    <img src="src\assets\headerImg2.jpg"  alt="" className="  w-60 h-60 "  />
                </div>
        </div>

        <div className="flex flex-col items-center justify-center h-2/3 text-white">
            <p className="text-4xl">The contry of Himalays </p>
            <p className="text-9xl font-bold">  <span className="text-orange-400">NEP</span>AL</p>
        </div>

        <div className="flex justify-between place-items-end text-2xl w-full text-white pb-4">
            <p className="flex w-1/5 p-4 ">Visit Nepal, you will never regret it. From the majestic Himalayas to the vibrant cultural
                tapestry, every corner offers an unforgettable experience.</p>
            <ul className="flex justify-evenly  w-full text-white">
                <li>
                    Facebook
                </li>
                <li>
                    twitter
                </li>
                <li>
                    instagram
                </li>
                <li>
                    youtube 
                </li>
                <li>
                    google
                </li>
            </ul>
        </div>
    </div>
    </>
    )
}
