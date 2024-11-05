import React from "react";
import Stacks from "../components/Stacks";

function ProjectsItem({ img, title, link, details, stacks }) {
  return (
    <div className="relative flex items-center justify-center h-[250px] w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-teal-900 ">
      <img
        src={img}
        alt="/"
        className="rounded-xl group-hover:opacity-10 h-full w-full"
      />
      <div className="hidden group-hover:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col gap-4">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <Stacks projectStacks={stacks} />
        <div className="flex flex-row items-center justify-center">
          <a href={link} target="_blank">
            <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer w-28 text-sm md:text-lg md:w-44">
              {details}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsItem;
