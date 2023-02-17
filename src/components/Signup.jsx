import React from "react";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
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
      <div className="w-full max-w-xs my-32 mx-auto md:px-0 px-3">
        <form
          className=" bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handlesubmit}
        >
          {err && <div className="w-full p-4 bg-red-400 rounded ">{err}</div>}
          <h2 className="text-center text-4xl my-4 text-purple-600 font-bold  ">
            Sign up
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPasswrd(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-[60%] mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="Submit"
            >
              Sign In
            </button>
          </div>
          <div className="p-4 box mt-3 text-center">
            Have an account?{" "}
            <Link to="/" className="underline">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
