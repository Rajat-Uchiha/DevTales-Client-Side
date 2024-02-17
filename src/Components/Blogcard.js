import React from "react";
import { Link } from "react-router-dom";
const Blogcard = (props) => {
  return (
    <li
      key={props.item._id}
      className=" lg:px-10 font-Jost space-y-4 pb-8 lg:flex flex-col lg:flex-row lg:space-x-10 justify-center items-center shadow-sm  "
    >
      <div className=" w-full lg:w-2/6  ">
        <img
          className="object-cover bg-cover bg-no-repeat rounded-xl"
          src={`https://devtales-web-service-production.up.railway.app/${props.item.cover}`}
          alt="blog-cover"
        />
      </div>
      <div className=" w-full lg:w-5/6 space-y-2 ">
        <h1 className="text-xl lg:text-3xl text-stone-800 hover:underline hover:underline-offset-4 cursor-pointer transition-all">
          <Link to={`/blogs/${props.item.urltitle}`}>{props.item.title}</Link>
        </h1>
        <p className=" text-base lg:text-xl text-stone-800">
          {props.item.snippet}
        </p>
        <h6 className="text-sm text-stone-800">
          Published on :-
          {new Date(props.item.createdAt).toDateString()}
        </h6>
      </div>
    </li>
  );
};

export default Blogcard;
