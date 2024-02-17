import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer.js";
import LoadingBar from "react-top-loading-bar";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Navbar />

      <section className="bg-white text-stone-800 min-h-96 w-5/6 mx-auto mb-10 mt-6 space-y-6 ">
        <main className="lg:p-2 xl:flex flex-col xl:flex-row ">
          <div className=" w-full lg:w-full mx-auto pt-4 px-2 sm:px-4 md:px-10 my-auto   ">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl xl:text-5xl 2xl:text-7xl font-Jost text-stone-800 font-extralight">
                DevTales - Your Platform for Coding Narratives
              </h2>
              <p className=" text-lg lg:text-xl font-Jost  font-extralight text-stone-800 lg:leading-10">
                Welcome to DevTales, the premier destination for passionate
                coders, developers, and tech enthusiasts to share their
                insights, experiences, and journeys in the vast world of
                programming. Our blogging web app is designed to be your digital
                canvas, where you can craft and share stories, tutorials, and
                reflections on all things coding.
              </p>
              <p className=" text-lg lg:text-xl font-Jost  font-extralight text-stone-800 lg:leading-10">
                At DevTales, we believe in the power of storytelling to inspire,
                educate, and connect. Our mission is to empower the coding
                community by providing a platform where individuals can
                articulate their coding adventures, share technical expertise,
                and foster a sense of camaraderie among fellow developers.
              </p>
            </div>
          </div>
        </main>
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={2}
          onLoaderFinished={() => setProgress(100)}
        />
        {/* ADD A PARALLAX EFFECT HERE */}
        <div className=" flex justify-center md:mx-10 items-center h-20 lg:h-96 bg-parallax bg-cover bg-no-repeat bg-fixed object-center ">
          <h1 className="text-center font-Jost text-white text-4xl lg:text-8xl">
            Simply The Best
          </h1>
        </div>
        <main className="p-2 flex">
          <div className=" w-full lg:w-full mx-auto pt-4 px-2 sm:px-4 md:px-10 my-auto  ">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl xl:text-5xl 2xl:text-7xl font-Jost text-stone-800 font-extralight">
                Join DevTales Today!
              </h2>
              <p className=" text-lg lg:text-xl  font-Jost font-extralight text-stone-800 lg:leading-10">
                Whether you're a coding veteran, a coding newbie, or somewhere
                in between, DevTales is your canvas to paint the vibrant picture
                of your coding experiences. Join our community, unleash your
                creativity, and be part of a platform that celebrates the
                diverse narratives within the coding world. Start your coding
                chronicle today! Together, let's weave the tapestry of the
                coding community at DevTales.
              </p>
            </div>
            <div className="flex justify-start space-x-10">
              <div className="my-10 font-Jost">
                <Link
                  to="/signup"
                  className=" font-Jost border-2 py-1 px-2 rounded-lg border-stone-800 lg:px-4 lg:py-2 text-base lg:text-lg bg-stone-900 text-white flex justify-center items-center hover:scale-110 transition-all"
                >
                  Join Now <MdOutlineArrowRightAlt className="ml-2" />
                </Link>
              </div>
              <div className="my-6 font-Jost"></div>
            </div>
          </div>
        </main>
        <Link
          to="https://github.com/Rajat-Uchiha/DevTales"
          className=" mx-auto flex justify-center items-center pl-4 font-extralight text-stone-800 hover:scale-110 transition-all pb-4"
        >
          <FaGithub className="text-xl" />
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default About;
