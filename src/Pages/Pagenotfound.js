import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import notfound from "../Static/notfound.png";
const Pagenotfound = () => {
  return (
    <section className="min-h-screen bg-black/90 text-white flex justify-center space-y-16 items-center flex-col">
      <div className=" font-Jost space-y-8">
        <h2 className="text-7xl text-center font-bold"> Error - 404 </h2>
        <h5 className="text-center text-3xl font-bold">
          Opps! This page doesn't exist
        </h5>
      </div>

      <img className="w-40 invert" src={notfound} alt="Page-Not-Found-icon" />
      <div className="font-Jost">
        <Link
          className="text-2xl flex justify-center items-end underline underline-offset-4 hover:underline-offset-8 transition-all"
          to="/"
        >
          Go To Homepage <RiArrowGoBackFill className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Pagenotfound;
