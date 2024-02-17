import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Hide_icon from "../Static/Hide_icon.png";
import Show_icon from "../Static/Show_icon.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Alert from "../Components/Alert";
import LoadingBar from "react-top-loading-bar";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["auth_Token"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [alertDisplay, setAlertDisplay] = useState("hidden");
  const [alertMsg, setAlertMsg] = useState("");
  const [progress, setProgress] = useState();

  const getUsername = (e) => {
    setUsername(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleProgress = (progress) => {
    setProgress(progress);
  };
  const loginBtn = async () => {
    try {
      const response = await axios.post(
        "https://devtales-web-service-production.up.railway.app/user/login",
        {
          username,
          password,
        }
      );

      setCookie("auth_Token", response.data.token);

      window.localStorage.setItem("userID", response.data.userID);

      window.localStorage.setItem("username", response.data.username);

      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        setAlertMsg(error.response.data.message);
        setAlertDisplay("flex");
      }
    }
  };

  return (
    <>
      <LoadingBar
        color="#FF0000" // Customize the loading bar color
        height={3} // Set the height of the loading bar
        progress={progress} // Set the loading bar progress
      />
      <section className=" min-h-96 md:flex ">
        <div className="hidden md:flex w-1/2 bg-stone-900 space-y-4 flex-col justify-center items-center">
          <h1 className="text-6xl xl:text-8xl text-white font-Jost font-semibold ">
            DevTales
            <br />
          </h1>
          <p className="text-white font-Jost underline underline-offset-8 text-2xl">
            Welcomes You Back!
          </p>
        </div>
        <div className="w-full min-h-screen space-y-4 md:h-full md:w-1/2  flex justify-center items-center flex-col ">
          <div className="w-full px-12 md:px-0 md:mx-0 md:w-1/2 flex justify-start items-start flex-col h-1/6 space-y-4">
            <h4 className="text-4xl underline underline-offset-4 font-Jost text-stone-800">
              Login
            </h4>
            <p className="font-Jost text-stone-800 text-lg ">
              Login your DevTales account
            </p>
          </div>
          <div className="w-full px-12 md:px-0 md:mx-0 md:w-1/2 h-3/6 flex items-start flex-col space-y-10 ">
            <form className="space-y-4 flex flex-col w-full">
              <input
                id="username"
                onChange={getUsername}
                className=" font-Jost text-stone-800 text-xl bg-transparent border-black border-b-2 py-2 focus:outline-none  placeholder:text-stone-800"
                type="text"
                placeholder="Username"
              />
              <div className="flex justify-center items-end">
                <input
                  onChange={getPassword}
                  className=" w-full font-Jost text-stone-800 text-xl bg-transparent border-black border-b-2 py-2 focus:outline-none  placeholder:text-stone-800"
                  type={hidePassword ? "password" : "text"}
                  placeholder="Password"
                />
                <img
                  src={hidePassword ? Hide_icon : Show_icon}
                  alt="Show_Hide_password"
                  onClick={() => {
                    setHidePassword(!hidePassword);
                  }}
                  className="w-10 h-9  hover:cursor-pointer transition-all border-b-2 border-white invert"
                />
              </div>
            </form>
            <button
              onClick={loginBtn}
              className="border-2 border-stone-900 px-6 text-lg font-Jost py-1 rounded-lg text-white bg-stone-900 hover:scale-110 transition-all"
            >
              Login
            </button>
            <div className="font-Jost text-stone-800 space-y-4">
              <p className="text-md">
                Don't have DevTales account?
                <Link
                  to="/signup"
                  className="underline underline-offset-4 hover:underline-offset-8 transition-all px-2 "
                >
                  Signup
                </Link>
              </p>
              <div className="my-2">
                <Link
                  to="/"
                  className="underline flex items-center underline-offset-4 transition-all hover:underline-offset-8"
                >
                  All Blogs
                  <MdOutlineArrowRightAlt className="ml-2 " />
                </Link>
              </div>
            </div>
            <Alert
              message={alertMsg}
              alertDisplay={alertDisplay}
              setAlertDisplay={setAlertDisplay}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
