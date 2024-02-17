import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Myblogs = (props) => {
  const [cookie] = useCookies(["auth_Token"]);
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    const getMyBlogs = async () => {
      try {
        const userID = window.localStorage.getItem("userID");
        const response = await axios.get(
          `https://devtales-web-service-production.up.railway.app/blogs/user/${userID}`,
          {
            headers: {
              authorization: cookie.auth_Token,
            },
          }
        );
        console.log(response.data);

        setUserBlogs(response.data);
      } catch (error) {
        console.log("Error in my blogs page ", error);
      }
    };
    getMyBlogs();
  }, []);

  const deleteBlog = async (id) => {
    try {
      await axios.delete(
        `https://devtales-web-service-production.up.railway.app/blogs/${id}`,
        {
          headers: {
            authorization: cookie.auth_Token,
            userid: window.localStorage.getItem("userID"),
          },
        }
      );
      setUserBlogs(
        userBlogs.filter((item) => {
          return item._id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const showAlert = (id) => {
    Swal.fire({
      title:
        "<h4 className=`font-Jost text-base text-stone-900` >Do you really want to delete this blog?</h4>",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          {
            title: "Deleted!",
            text: "Your Blog has been deleted.",
            icon: "success",
          },
          deleteBlog(id)
        );
      }
    });
  };

  return (
    <section className="bg-white min-h-screen px-4 md:px-0">
      {userBlogs.length ? (
        <div className="pt-10 md:mx-20">
          <span className="text-stone-800 text-4xl md:text-6xl font-Jost font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
            Way to Go Dev !
          </span>
          <p className="text-lg md:text-2xl pt-3 font-Jost text-stone-800">
            Your unique perspective and skills have the power to create positive
            change, <br />
            Contribute your brilliance to inspire a better world today!
          </p>
        </div>
      ) : (
        <div className="pt-10 md:mx-20 font-Jost  space-y-8">
          <h1 className="text-xl text-stone-800 md:text-4xl">
            You haven't contributed yet
          </h1>
          <button
            onClick={(e) => props.setCurrentPage("addblog")}
            className="border-2 rounded-lg border-stone-900 text-lg bg-stone-900 px-2 md:px-6 md:py-2 text-white font-base transition-all hover:scale-110"
          >
            Add Blog
          </button>
        </div>
      )}

      {userBlogs ? (
        userBlogs.map((item) => {
          return (
            <ul
              key={item._id}
              className="px-4 md:px-20 xl:list-disc text-stone-800 pt-4 font-Jost space-y-4"
            >
              <li
                key={item._id}
                className=" xl:px-10 font-Jost space-y-4 py-8 xl:flex flex-col xl:flex-row xl:space-x-10 justify-center items-center shadow-sm  "
              >
                <div className=" w-full xl:w-3/6  ">
                  <img
                    className="object-cover bg-cover bg-no-repeat rounded-xl"
                    src={`https://devtales-web-service-production.up.railway.app/${item.cover}`}
                    alt="blog-cover"
                  />
                </div>
                <div className=" w-full xl:w-5/6 space-y-2 ">
                  <h1 className="text-xl lg:text-3xl hover:underline hover:underline-offset-4 cursor-pointer transition-all">
                    <Link to={`/blogs/${item.urltitle}`}>{item.title}</Link>
                  </h1>
                  <p className="  text-base lg:text-xl">{item.snippet}</p>
                  <h6 className="text-sm">
                    Published on :-
                    {new Date(item.createdAt).toDateString()}
                  </h6>
                </div>
                <div>
                  <button
                    onClick={() => {
                      showAlert(item._id);
                    }}
                    className="transition-all font-Jost text-md md:text-lg hover:scale-125"
                  >
                    <MdDelete className="text-2xl text-stone-800" />
                  </button>
                </div>
              </li>
            </ul>
          );
        })
      ) : (
        <div>You have not contributed any blog as of now.</div>
      )}
    </section>
  );
};

export default Myblogs;
