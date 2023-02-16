import React from "react";

const Login = () => {
  return (
    <>
      <div className=" bg-gradient-to-b from-purple-600 to-blue-600 h-16 w-full p-2">
        <h1 className=" text-center text-[30px] text-gray-200">WeNeed</h1>
      </div>
      <div className=" my-36 mx-auto w-[320px] h-[320px] rounded-lg shadow-lg bg-slate-100 p-6">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-center text-4xl my-2 text-purple-600 font-bold  ">
            Login
          </h2>
          <input
            type="email"
            placeholder="Email"
            className=" bg-slate-200 w-[85%] m-4 p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className=" bg-slate-200 w-[85%] mb-2 mx-4 p-2"
          />
          <button className=" bg-blue-500 rounded-lg w-[30%] py-1 my-6 mx-auto text-white">
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
