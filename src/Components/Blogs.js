import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Blogcard from "./Blogcard.js";
import Loadingcard from "./Loadingcard.js";
const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(
          "https://devtales-web-service-production.up.railway.app/blogs"
        );
        const data = response.data;

        setAllBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBlogs();
  }, []);

  // !Implement openBlog
  const handleSearch = (event) => {
    setSearchBar(event.target.value);
  };

  const filteredData = allBlogs.filter(
    (item) =>
      item.title.toLowerCase().includes(searchBar.toLowerCase()) ||
      item.snippet.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section className="bg-white ">
        {/* HERO SECTION */}
        <div className="py-16  bg-gradient-to-tr from-gray-100 to-stone-200 space-y-4 shadow-md">
          <h1 className=" text-5xl lg:text-9xl font-Jost text-center  text-stone-800">
            DevTales
          </h1>
          <p className="font-Jost px-2 text-base sm:text-lg md:text-2xl text-center font-extralight lg:leading-10 text-stone-800 tracking-wide">
            Dive into the art of self-expression. <br /> Create, inspire, and
            connect with like-minded individuals. <br />
            Your Words, your Space, your Impact.
          </p>
        </div>
        <div className="w-5/6 mx-auto my-10 ">
          <input
            onChange={handleSearch}
            className="w-full border-2 rounded-xl placeholder:text-stone-400  md:py-2 py-1 md:px-2 px-1 font-Jost text-base md:text-lg outline-none"
            type="text"
            placeholder="Search Blogs"
          />
        </div>

        {/* ALL BLOGS */}
        <div className="w-5/6 mx-auto my-4 space-y-12 ">
          {allBlogs.length === 0 ? (
            <>
              {Array.from({ length: 3 }).map((_, idx) => {
                return <Loadingcard key={idx} />;
              })}
            </>
          ) : (
            <>
              {!searchBar ? (
                <ul className="space-y-6 mx-auto ">
                  {allBlogs.map((item) => {
                    return <Blogcard key={item._id} item={item} />;
                  })}
                </ul>
              ) : (
                <>
                  {filteredData.length !== 0 ? (
                    <ul className="space-y-6">
                      {filteredData.map((item) => {
                        return <Blogcard key={item._id} item={item} />;
                      })}
                    </ul>
                  ) : (
                    <div className="font-Jost">
                      <h4 className="text-3xl ">
                        No Blog found with the keyword "{searchBar}"
                      </h4>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blogs;
