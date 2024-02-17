import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Login from "../Pages/Login";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { IoSendSharp } from "react-icons/io5";
import "react-quill/dist/quill.snow.css";

const Addblog = () => {
  const navigate = useNavigate();
  const [cookie] = useCookies(["auth_Token"]);

  const [urltitle, setUrlTitle] = useState("");
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [file, setFile] = useState("");
  const [content, setContent] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.set("urltitle", urltitle);
    data.set("title", title);
    data.set("snippet", snippet);
    data.set("file", file[0]);
    data.set("content", content);

    try {
      await axios.post(
        "https://devtales-web-service-production.up.railway.app/blogs/create",
        data,
        {
          headers: {
            authorization: cookie.auth_Token,
            userID: window.localStorage.getItem("userID"),
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log("Data cant be posted");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!cookie.auth_Token ? (
        <Login />
      ) : (
        <>
          {/* <Navbar /> */}
          <section className=" min-h-screen flex flex-col  ">
            <div className="w-full lg:w-5/6 font-Jost min-h-40 flex justify-start items-center mx-auto bg-gray-200 text-stone-800 rounded-lg">
              <p className=" text-sm lg:text-2xl leading-loose px-10 ">
                Join a community of storytellers and thought leaders. <br />
                Start your blog journey today – because every perspective
                deserves to be heard!
              </p>
            </div>
            <form
              onSubmit={submit}
              className="w-full lg:w-5/6 mx-auto font-Jost  space-y-10 px-10 py-10 my-5 "
            >
              <input
                className="p-2 w-full outline-none border-b-2 border-black placeholder:text-stone-800 text-lg"
                onChange={(e) => setUrlTitle(e.target.value)}
                type="text"
                required
                placeholder="URL heading (https://devtales.in/URL heading/)*"
              />
              <input
                className="p-2 w-full outline-none border-b-2 border-black placeholder:text-stone-800 text-lg"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Blog Title*"
              />
              <input
                className="p-2 w-full outline-none border-b-2 border-black placeholder:text-stone-800 text-lg"
                onChange={(e) => setSnippet(e.target.value)}
                type="text"
                required
                placeholder="Blog Snippet*"
              />
              <input
                className="p-2 w-full outline-none border-b-2 border-black placeholder:text-stone-800 text-lg"
                onChange={(e) => setFile(e.target.files)}
                required
                name="file"
                type="file"
              />
              <ReactQuill
                className="font-Jost"
                theme="snow"
                value={content}
                required
                onChange={setContent}
              />

              <button className="border-2 flex justify-center items-center border-black text-white bg-black px-6 py-2 text-lg hover:scale-110 transition-all rounded-lg">
                Publish
                <IoSendSharp className="ml-2" />
              </button>
            </form>
          </section>
        </>
      )}
    </>
  );
};

export default Addblog;
