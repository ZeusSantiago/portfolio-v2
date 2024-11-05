import React from "react";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind.svg";
import viteIcon from "../assets/vite.svg";
import express from "../assets/express.svg";
import monggo from "../assets/mongodb.svg";
import node from "../assets/node.svg";

export default function Languages() {
  const stacks = [
    {
      name: "React",
      src: reactIcon,
    },
    {
      name: "Tailwind",
      src: tailwindIcon,
    },
    {
      name: "Vite",
      src: viteIcon,
    },
    {
      name: "Node",
      src: node,
    },
    {
      name: "Express",
      src: express,
    },
    {
      name: "MongoDB",
      src: monggo,
    },
  ];

  return (
    <div id="languages" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div className="text-4xl font-bold text-center text-teal-800 mb-5">
        Technologies
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {stacks.map((stack, index) => {
          return (
            <div className="flex flex-col justify-center border-2 text-center font-bold rounded-md shadow-md bg-gray-100 shadow-gray-600 m-2 p-2 cursor-pointer border-gray-200">
              <img
                key={index}
                src={stack.src}
                className="md:size-24 size-14 border-2 border-teal-900 bg-gray-700 rounded-md hover:scale-110 ease-in duration-300"
              />
              <div className="mt-1">{stack.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
