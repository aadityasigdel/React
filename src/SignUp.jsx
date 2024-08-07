import React, { useState } from "react";
import { Link} from "react-router-dom";

function Third() {
    const [Arraydata,setArrayData] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
    });



    function handleSubmit(e) {
        e.preventDefault();

        setArrayData((prevData) => {
            const newData = [...prevData, formData];
            localStorage.setItem("authdata", JSON.stringify(newData));
            return newData;
        });
        
        if (validateForm()) {
            localStorage.setItem('authData', JSON.stringify(formData));
            alert("Sign up successful!");
            
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function validateForm() {
        if (formData.username === "" || formData.password === "" || formData.email === "") {
            alert("Please fill all fields");
            return false;
        }
        if (formData.password !== formData.cpassword) {
            alert("Passwords do not match");
            return false;
        }
        return true;
    }

    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div className="flex w-11/12 justify-center items-center shadow-xl shadow-black p-14">
                <form onSubmit={handleSubmit} className="w-2/3">
                    <div className="container-md flex flex-col items-center mt-8 justify-center">
                        <h1 className="text-3xl text-blue-600 m-2">Sign Up</h1>
                        <input
                            id="username"
                            onChange={handleChange}
                            value={formData.username}
                            className="border border-black w-1/3 m-3 p-3 rounded"
                            type="text"
                            placeholder="Username"
                            name="username"
                            required
                        />
                        <input
                            id="email"
                            onChange={handleChange}
                            value={formData.email}
                            className="border border-black w-1/3 m-3 p-3 rounded"
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                        />
                        <input
                            id="password"
                            onChange={handleChange}
                            value={formData.password}
                            className="border border-black w-1/3 m-3 p-3 rounded"
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                        />
                        <input
                            id="cpassword"
                            onChange={handleChange}
                            value={formData.cpassword}
                            className="border border-black w-1/3 m-3 p-3 rounded"
                            type="password"
                            placeholder="Confirm password"
                            name="cpassword"
                            required
                        />
                        
                        <button
                            type="submit"
                            className="text-white bg-blue-600 p-3 rounded-md w-1/6 m-3"
                        >
                            Sign Up
                        </button>

                        <div className="flex">
                            <input id="agree" className="m-2" type="checkbox" required />
                            <label htmlFor="agree">I agree to the Terms of Service</label>
                        </div>
                    </div>
                </form>
                <div className="w-2/5">
                    <img src="/assets/undraw_signup.svg" alt="Sign Up" />
                    <div className="flex justify-center">
                        <p>Already have an Account? </p>
                        <Link
                            className="text-md text-blue-700 ml-3"
                            to="/signin"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Third;