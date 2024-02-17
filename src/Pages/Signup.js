import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "../Components/Alert";
import Hide_icon from "../Static/Hide_icon.png";
import Show_icon from "../Static/Show_icon.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [alertDisplay, setAlertDisplay] = useState("hidden");
  const [alertMsg, setAlertMsg] = useState("");

  const getUsername = (e) => {
    setUsername(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const signupBtn = async () => {
    try {
      const response = await axios.post(
        "https://devtales-web-service-production.up.railway.app/user/signup",
        {
          username,
          password,
        }
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        setAlertMsg(error.response.data.message);
        setAlertDisplay("flex");
      }
    }
  };

  return (
    <section className=" min-h-96 md:flex ">
      <div className="w-full min-h-screen space-y-4 md:h-full md:w-1/2 flex justify-center items-center flex-col ">
        <div className="w-full px-12 md:px-0 md:mx-0 md:w-1/2 flex justify-start items-start flex-col h-1/6 space-y-4">
          <h4 className="text-4xl underline underline-offset-4 font-Jost text-stone-800">
            Create Account
          </h4>
          <p className="font-Jost text-stone-800 text-lg ">
            Create your DevTales account now
          </p>
        </div>
        <div className="w-full px-12 md:px-0 md:mx-0 md:w-1/2 h-3/6 flex items-start flex-col space-y-10 ">
          <form className="space-y-4 flex flex-col w-full">
            <input
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
            onClick={signupBtn}
            className="border-2 border-stone-900 px-6 rounded-lg text-lg font-Jost py-1 text-white bg-stone-900 hover:scale-110 transition-all"
          >
            Create
          </button>
          <div className="font-Jost text-stone-800 space-y-4">
            <p className="text-md">
              Already have DevTales account?
              <Link
                to="/login"
                className="underline underline-offset-4 hover:underline-offset-8 transition-all px-2 "
              >
                Login
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
            alertDisplay={alertDisplay}
            message={alertMsg}
            setAlertDisplay={setAlertDisplay}
          />
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-stone-900 space-y-4 flex-col justify-center items-center">
        <h1 className="text-6xl xl:text-8xl text-white font-Jost font-semibold ">
          DevTales
          <br />
        </h1>
        <p className="text-white font-Jost underline underline-offset-8 text-2xl text-center">
          Join us and unlock a world of possibilities
        </p>
      </div>
    </section>
  );
};

export default Signup;
