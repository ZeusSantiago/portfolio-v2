import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind.svg";
import viteIcon from "../assets/vite.svg";
import express from "../assets/express.svg";
import monggo from "../assets/mongodb.svg";
import node from "../assets/node.svg";

import React from "react";

export default function Stacks({ projectStacks }) {
  const stacks = [
    {
      name: "react",
      src: reactIcon,
    },
    {
      name: "tailwind",
      src: tailwindIcon,
    },
    {
      name: "vite",
      src: viteIcon,
    },
    {
      name: "node",
      src: node,
    },
    {
      name: "express",
      src: express,
    },
    {
      name: "monggo",
      src: monggo,
    },
  ];
  const filteredStacks = stacks.filter((stack) => {
    return projectStacks.includes(stack.name);
  });
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {filteredStacks.map((stack, index) => {
        return (
          <img
            key={index}
            src={stack.src}
            className="md:size-10 size-5 border-2 border-teal-900 bg-gray-700 rounded-md"
          />
        );
      })}
    </div>
  );
}
