import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Second() {
    const [formdata, setFormData] = useState({
        username: "",
        password: "",
    });
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
    };
    const handelchange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    };

    const Validation = () =>{
        if(formdata.username == "" || formdata.password == "" ) 
            {
            alert("Please fill te form ");
        }
        else 
        {
            alert("login success");
        }
    }
    return (
        <>
        <dir className = "flex justify-center items-center h-screen">
        <div className="flex w-11/12 justify-center items-center shadow-xl shadow-gray-500 p-10 ">
            <form onSubmit={handlesubmit} className="w-2/3">
                <div className="flex flex-col justify-center  items-center mt-8 inset-y-px container-md">
                    <h1 className="text-3xl m-3 text-blue-400 ">Sign In</h1>
                    <input
                        type="text "
                        className="border  border-black w-1/3 m-3 p-3 rounded-md focus:bg-blue-50"
                        name="username"
                        value={formdata.username}
                        onChange={handelchange}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        className=" border  border-black w-1/3 m-3 p-3 focus:bg-blue-50"
                        name="password"
                        value={formdata.password}
                        onChange={handelchange}
                        placeholder="password"
                    />
                    <div className="flex">
                        <label htmlFor="Remember-me" className="m-3 ">
                            Remember me
                        </label>
                        <input type="Checkbox" />
                    </div>
                    <button
                        className="bg-blue-400 border-1 p-3 text-white rounded-md w-1/6 m-3"
                        onClick={Validation}
                    >
                        Sign In
                    </button>
                    <div className="flex m-3">
                        <label htmlFor="New">New Here ?</label>{" "}
                        <Link to="/SignUp" className="text-blue-500 ml-2">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </form>
            <div>
                <img src="src\assets\undraw_signin.svg" alt="" />
                <p className="flex justify-center">or signIn with ......</p>
            </div>
            </div>
            </dir>
        </>
    );
}

export default Second;
