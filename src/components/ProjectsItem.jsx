import React from "react";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind.svg";
import viteIcon from "../assets/vite.svg";

function ProjectsItem({ img, title, link }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-teal-900 ">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col gap-4">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <div className="flex flex-row items-center justify-center gap-2">
          <img
            src={reactIcon}
            className="size-10 border-2 border-teal-900 bg-gray-700 rounded-md"
          />
          <img
            src={tailwindIcon}
            className="size-10 border-2 border-teal-900 bg-gray-700 rounded-md"
          />
          <img
            src={viteIcon}
            className="size-10 border-2 border-teal-900 bg-gray-700 rounded-md"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <a href={link} target="_blank">
            <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg w-44">
              More Info
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsItem;