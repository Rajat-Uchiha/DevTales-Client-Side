import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loadingcurrblog from "./Loadingcurrblog";
const Currblog = () => {
  const location = useLocation();

  const [currBlog, setCurrBlog] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const getBlog = async () => {
      const url = location.pathname;
      const urlParts = url.split("/");
      const lastPart = urlParts[urlParts.length - 1];

      const result = await axios.get(
        `https://devtales-web-service-production.up.railway.app/blogs/${lastPart}`
      );

      setCurrBlog(result.data);
    };
    getBlog();
  }, [location]);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-white px-4 w-full lg:w-5/6 mx-auto ">
        {Object.keys(currBlog).length !== 0 ? (
          <div className="py-10 space-y-8 lg:px-20">
            <div className="font-Jost space-y-4  ">
              <h1 className=" text-3xl md:text-5xl text-stone-800 ">
                {currBlog.title}
              </h1>
              <h6 className="text-center">
                Published :- {new Date(currBlog.createdAt).toDateString()}
              </h6>
            </div>
            <div className=" flex justify-center items-center ">
              <img
                className="w-4/6 shadow-2xl"
                src={`https://devtales-web-service-production.up.railway.app/${currBlog.cover}`}
                alt="blog-cover-image"
              />
            </div>
            <div className="font-Jost ">
              <h4 className=" text-xl md:text-2xl text-stone-800">
                {currBlog.snippet}
              </h4>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: currBlog.body }}
              className="font-Jost text-xl"
            ></div>
          </div>
        ) : (
          <Loadingcurrblog />
        )}
      </section>
      <Footer />
    </>
  );
};

export default Currblog;
