import React, { useState } from "react";
import axios from "axios";

const Personal = (props) => {
  const [file, setFile] = useState("Choose New Pic");
  const [password, setPassword] = useState("");

  const updateProfilePic = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.set("file", file[0]);
    data.set("password", password);

    try {
      const response = await axios.put(
        "https://devtales-web-service-production.up.railway.app/user/update/profile-pic",
        data,
        {
          headers: {
            userid: window.localStorage.getItem("userID"),
          },
        }
      );
      if (response.data.message === "success") {
        props.setCurrentPage("myblogs");
      }
    } catch (error) {
      console.log("Could not update the user profile pic");
    }
  };

  return (
    <section className=" w-full lg:w-4/6 mx-auto font-Jost space-y-6 ">
      <div className="mx-4 py-4">
        <h1 className="text-5xl">Edit Profile</h1>
      </div>
      {/* For Profile Pic */}
      <form
        onSubmit={updateProfilePic}
        className="flex flex-col space-y-6 shadow-sm p-4"
      >
        <label
          htmlFor="profilepic"
          className="text-stone-800 text-2xl font-bold"
        >
          Change Profile Pic
        </label>
        <input
          onChange={(e) => {
            setFile(e.target.files);
          }}
          type="file"
          id="files"
          className=""
          name="file"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password*"
          className="border-b-2 border-stone-900 outline-none text-lg p-2 placeholder:text-stone-800"
          type="text"
        />
        <button
          onClick={updateProfilePic}
          className="border-2 border-stone-900 rounded-lg text-white bg-stone-900 w-2/6 lg:w-1/6 py-2 hover:scale-105 transition-all"
        >
          Update
        </button>
      </form>
    </section>
  );
};

export default Personal;
