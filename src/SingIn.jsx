import React, { useState } from "react";
import Home from "./Home"
import { Link, } from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Second() {
    const confirm = JSON.parse(localStorage.getItem("authdata"));
    const navigate = useNavigate();

    const [formdata, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    };

    const validation = () => {
        
        if (formdata.username === "" || formdata.password === "") {
            alert("Please fill the form");
        } else {
            if (formdata.username == confirm.map(a => a.username) && formdata.password == confirm.map(a => a.password)) {
                
                navigate('/Home');
            } else {
                alert("Incorrect username or password.");
                
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex w-11/12 justify-center items-center shadow-xl shadow-gray-500 p-10 ">
                <form onSubmit={handleSubmit} className="w-2/3">
                    <div className="flex flex-col justify-center items-center mt-8 inset-y-px container-md">
                        <h1 className="text-3xl m-3 text-blue-400 ">Sign In</h1>
                        <input
                            type="text"
                            className="border border-black w-1/3 m-3 p-3 rounded-md focus:bg-blue-50"
                            name="username"
                            value={formdata.username}
                            onChange={handleChange}
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            className="border border-black w-1/3 m-3 p-3 focus:bg-blue-50"
                            name="password"
                            value={formdata.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        <div className="flex">
                            <label htmlFor="remember-me" className="m-3">
                                Remember me
                            </label>
                            <input type="checkbox" id="remember-me" />
                        </div>
                        <button
                            className="bg-blue-400 border-1 p-3 text-white rounded-md w-1/6 m-3"
                            onClick={validation}
                            type="button"
                        >
                            Sign In
                        </button>
                        <div className="flex m-3">
                            <label htmlFor="new">New Here?</label>{" "}
                            <Link to="/SignUp" className="text-blue-500 ml-2">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </form>
                <div>
                    <img src="/assets/undraw_signin.svg" alt="Sign In" />
                    <p className="flex justify-center">or sign in with ...</p>
                </div>
            </div>
        </div>
    );
}

export default Second;