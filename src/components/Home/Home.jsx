import React from "react";

const Home = () => {
  return (
    <>
      <div className="h-[48px] bg-[#205E61] shadow-lg">USER</div>
      <div className="flex w-full items-start">
        <div className="w-[30%] border-r-2 h-full border-r-[#3f979B]">
          <h2 className="p-3 text-center bg-[#3f979B] text-gray-200 opacity-90">
            People Store
          </h2>
          <div></div>
        </div>
        <div className="w-[70%] opacity-80 bg-gradient-to-t from-[#8bF5FA] to-[#f9f54b] h-[500px]">
          Manage query
          <div>
            <textarea
              name="text"
              id=""
              cols="50"
              rows="2"
              className="rounded-[30%]"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
