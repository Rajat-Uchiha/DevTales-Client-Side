import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-stone-800 body-font mx-10 lg:mx-20 font-Jost">
      <div className=" justify-center lg:px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm md:text-base lg:text-lg text-stone-800 sm:ml-4 sm:pl-4 sm:border-stone-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 DevTales —
          <Link
            to="https://github.com/Rajat-Uchiha"
            className="text-stone-800 ml-1"
            target="_blank"
          >
            @rajatkalotra
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
