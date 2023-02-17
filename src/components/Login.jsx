import React from "react";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwrd, setPasswrd] = useState("");
  const [err, setErr] = useState("");
  const { Signup } = useUserAuth();
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await Signup(email, passwrd);
      navigate("/");
    } catch (err) {
      setErr(err.message);
    }
  };
  return (
    <>
      <div className=" bg-gradient-to-b from-purple-600 to-blue-600 h-16 w-full p-2">
        <h1 className=" text-center text-[30px] text-gray-200">WeNeed</h1>
      </div>
      <div className="w-full max-w-xs my-32 mx-auto md:px-0 px-3">
        <form
          className=" bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handlesubmit}
        >
          {err && <div className="w-full p-4 bg-red-400 rounded ">{err}</div>}
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-center text-4xl my-2 text-purple-600 font-bold  ">
              Login
            </h2>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
              id="username"
              type="email"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPasswrd(e.target.value)}
            />
            <button
              className=" bg-blue-500 rounded-lg w-[60%] text-xl py-2 my-6 mx-auto text-white"
              type="Submit"
            >
              Log in
            </button>
            <p className=" text-base text-black">
              Don't have an account?{" "}
              <Link to="/signup" className=" underline ">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
