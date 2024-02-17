import React from "react";

const Loadingcard = () => {
  return (
    <div className=" shadow-sm mx-auto lg:h-60 flex flex-col lg:flex lg:flex-row animate-pulse -z-10">
      {/* For image */}
      <div className=" w-full lg:w-[30%] rounded-lg lg:m-6 bg-gray-300"></div>
      {/* For content */}
      <div className=" w-full lg:w-[70%] lg:m-6 space-y-6 flex justify-center items-start flex-col ">
        <div className=" w-full rounded-lg h-8 bg-gray-300"></div>
        <div className=" w-4/5 rounded-lg h-8 bg-gray-300"></div>
        <div className=" w-5/6 rounded-lg h-8 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Loadingcard;
