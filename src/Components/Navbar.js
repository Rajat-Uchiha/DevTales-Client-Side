import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();

  const [cookie] = useCookies(["auth_Token"]);
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  return (
    <>
      <nav
        className={`bg-white shadow-md text-stone-800 py-6 md:py-8 w-full  sticky top-0 z-10 `}
      >
        <ul className="flex w-5/6 mx-auto justify-between items-center font-Jost text-2xl ">
          <h1 className="text-2xl font-Jost ">DevTales</h1>

          {/* FOR BIG SCREENS */}

          <div className="hidden md:flex justify-end space-x-20 items-center w-full text-stone-800 ">
            <li
              className={`cursor-pointer text-xl ${
                location.pathname === "/" ? "underline underline-offset-8" : ""
              }   hover:underline hover:underline-offset-2 transition-all`}
            >
              <Link to="/">Blogs</Link>
            </li>
            {!cookie.auth_Token ? (
              <>
                <li
                  className={`cursor-pointer text-xl ${
                    location.pathname === "/about"
                      ? "underline underline-offset-8"
                      : ""
                  }  hover:underline hover:underline-offset-2 transition-all`}
                >
                  <Link to="/about">About</Link>
                </li>
                <li
                  className={`cursor-pointer text-xl ${
                    location.pathname === "/login"
                      ? "underline underline-offset-8"
                      : ""
                  }  hover:underline hover:underline-offset-2 transition-all`}
                >
                  <Link to="/login">Login</Link>
                </li>
                <li
                  className={`cursor-pointer text-xl border-2 border-stone-900 bg-stone-900 text-white px-2 py-1 rounded-lg ${
                    location.pathname === "/signup"
                      ? "underline underline-offset-8"
                      : ""
                  }  hover:underline hover:underline-offset-2 transition-all`}
                >
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            ) : (
              <li
                className={`cursor-pointer text-xl ${
                  location.pathname === "/profile"
                    ? "underline underline-offset-8"
                    : ""
                }  hover:underline hover:underline-offset-2 transition-all`}
              >
                <Link to="/profile">Profile</Link>
              </li>
            )}
          </div>
          <div className="md:hidden flex justify-center items-center">
            <button
              onClick={() => {
                setIsBurgerClicked(!isBurgerClicked);
              }}
            >
              {!isBurgerClicked ? <GiHamburgerMenu /> : <RxCross1 />}
            </button>
          </div>
        </ul>

        {/* FOR SMALL SCREENS */}
        <div
          className={`bg-white min-h-40 w-full pb-6 z-100 transition-all absolute mt-4 text-stone-800 shadow-lg ${
            isBurgerClicked ? "flex opacity-100" : "hidden opacity-0"
          }`}
        >
          {!cookie.auth_Token ? (
            <ul className="  my-auto  w-5/6 mx-auto flex flex-col space-y-6 font-Jost ">
              <li className="text-xl">
                <Link to="/">Blogs</Link>
              </li>
              <li className="text-xl">
                <Link to="/about">About</Link>
              </li>
              <li className="text-xl">
                <Link to="/login">Login</Link>
              </li>
              <li className="text-xl">
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          ) : (
            <ul className="  my-auto  w-5/6 mx-auto flex flex-col space-y-6 font-Jost ">
              <li className="text-xl">
                <Link to="/">Blogs</Link>
              </li>
              <li className="text-xl">
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
