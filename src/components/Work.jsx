import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2020,
    title: "Developer",
    duration: "1 month",
    details: "Lorem ipsum dolor sit amet.",
  },
  {
    year: 2021,
    title: "Software Dev",
    duration: "8Month",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, beatae.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto mdLpl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-cyan-900">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
