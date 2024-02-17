import React, { useEffect, useState } from "react";
import Addblog from "../Components/Addblog";
import Personal from "../Components/Personal";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Myblogs from "../Components/Myblogs";
import Footer from "../Components/Footer";
import axios from "axios";
const Profile = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("personal");
  const [, , removeCookie] = useCookies(["auth_Token"]);
  const [userData, setUserData] = useState({});

  const logout = () => {
    removeCookie("auth_Token");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("username");
    navigate("/");
  };

  useEffect(() => {
    window.scroll(0, 0);
    const getUserProfile = async () => {
      const response = await axios.get(
        `https://devtales-web-service-production.up.railway.app/user/profile/${window.localStorage.getItem(
          "userID"
        )}`
      );

      setUserData(response.data);
    };
    getUserProfile();
  }, []);

  return (
    <>
      <section className=" lg:relative lg:flex lg:flex-row flex-col">
        {/* USER CONTAINER  */}
        <div className="font-Jost lg:w-1/6 w-full bg-white text-stone-800 flex flex-col items-center lg:h-screen lg:fixed lg:py-20 ">
          {/* ABOUT USER */}
          <div className=" w-full lg:w-11/12 lg:mx-auto py-4 lg:py-0  justify-evenly flex-wrap items-center flex space-x-3 lg:space-x-0 lg:flex lg:flex-col lg:justify-center lg:items-center">
            {/* Profile Pic */}
            <div className=" lg:h-20  lg:w-20 flex justify-center items-end">
              <img
                className=" w-12 h-12 lg:w-20 lg:h-20 rounded-full object-cover"
                src={`https://devtales-web-service-production.up.railway.app/${userData.profile}`}
                alt="user-profile-pic"
              />
            </div>

            {/* Username */}

            <h4 className="text-center text-lg lg:text-xl lg:pt-2 ">
              Hi, {userData.username}
            </h4>

            {/* Username */}
            <div className="my-4 lg:space-y-4  space-x-4 lg:space-x-0 flex items-center lg:flex-col lg:justify-center lg:items-center">
              <p
                className={` hover:cursor-pointer ${
                  currentPage === "personal"
                    ? "underline underline-offset-4 "
                    : ""
                }`}
                onClick={() => {
                  setCurrentPage("personal");
                }}
              >
                Personal
              </p>
              <p
                className={` hover:cursor-pointer ${
                  currentPage === "addblog"
                    ? "underline underline-offset-4 "
                    : ""
                }`}
                onClick={() => {
                  setCurrentPage("addblog");
                }}
              >
                Add Blog
              </p>
              <p
                className={`hover:cursor-pointer ${
                  currentPage === "myblogs"
                    ? "underline underline-offset-4 "
                    : ""
                }`}
                onClick={() => {
                  setCurrentPage("myblogs");
                }}
              >
                My Blogs
              </p>
            </div>
            {/* LOGOUT BUTTON */}
            <div className=" my-4  ">
              <button
                onClick={logout}
                className="text-center flex justify-center items-center rounded-lg text-white text-base lg:text-lg bg-stone-900 px-2 py-1 lg:px-3 lg:py-2 hover:scale-110 transition-all "
              >
                Logout
                <FaSignOutAlt className="ml-3" />
              </button>
            </div>
          </div>
        </div>

        {/* DYNAMIC PAGES */}
        <div className=" w-full lg:w-5/6 min-h-screen text-stone-800 lg:ml-64 lg:p-10 border-2 py-10 lg:my-0">
          {currentPage === "personal" ? (
            <Personal setCurrentPage={setCurrentPage} />
          ) : (
            <>
              {currentPage === "addblog" ? (
                <Addblog />
              ) : (
                <Myblogs setCurrentPage={setCurrentPage} />
              )}
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
